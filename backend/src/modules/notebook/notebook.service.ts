import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PageBackground, Prisma } from '@prisma/client';
import { emptyPageContent, NOTEBOOK_CONTENT_VERSION } from '@lingua/shared';
import type { NotebookDto, NotebookPageContent, NotebookPageDto } from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import {
  CreateNotebookDto,
  CreatePageDto,
  ReorderPagesDto,
  UpdateNotebookDto,
  UpdatePageDto,
} from './dto/notebook.dto';

/** Schutz vor Speicherfressern: eine Seite darf nicht beliebig groß werden. */
const MAX_ELEMENTS_PER_PAGE = 5_000;
const MAX_POINTS_PER_STROKE = 10_000;

@Injectable()
export class NotebookService {
  constructor(private readonly prisma: PrismaService) {}

  // --------------------------------------------------------------- Hefte

  async listNotebooks(userId: string): Promise<NotebookDto[]> {
    const notebooks = await this.prisma.notebook.findMany({
      where: { userId, archivedAt: null },
      include: { language: true, _count: { select: { pages: true } } },
      orderBy: { updatedAt: 'desc' },
    });

    return notebooks.map((notebook) => ({
      id: notebook.id,
      title: notebook.title,
      coverColor: notebook.coverColor,
      language: notebook.language ? toLanguageDto(notebook.language) : null,
      pageCount: notebook._count.pages,
      createdAt: notebook.createdAt.toISOString(),
      updatedAt: notebook.updatedAt.toISOString(),
    }));
  }

  /** Ein neues Heft startet nie leer – die erste Seite wird direkt mit angelegt. */
  async createNotebook(userId: string, dto: CreateNotebookDto): Promise<NotebookDto> {
    const notebook = await this.prisma.notebook.create({
      data: {
        userId,
        title: dto.title,
        coverColor: dto.coverColor ?? '#2563EB',
        languageId: dto.languageId,
        pages: {
          create: {
            index: 0,
            background: dto.defaultBackground ?? PageBackground.LINED,
            content: emptyPageContent(
              1000,
              1414,
              dto.defaultBackground ?? PageBackground.LINED,
            ) as unknown as Prisma.InputJsonValue,
          },
        },
      },
      include: { language: true, _count: { select: { pages: true } } },
    });

    return {
      id: notebook.id,
      title: notebook.title,
      coverColor: notebook.coverColor,
      language: notebook.language ? toLanguageDto(notebook.language) : null,
      pageCount: notebook._count.pages,
      createdAt: notebook.createdAt.toISOString(),
      updatedAt: notebook.updatedAt.toISOString(),
    };
  }

  async updateNotebook(userId: string, notebookId: string, dto: UpdateNotebookDto) {
    await this.assertOwnNotebook(userId, notebookId);
    const notebook = await this.prisma.notebook.update({
      where: { id: notebookId },
      data: { title: dto.title, coverColor: dto.coverColor, languageId: dto.languageId },
      include: { language: true, _count: { select: { pages: true } } },
    });
    return {
      id: notebook.id,
      title: notebook.title,
      coverColor: notebook.coverColor,
      language: notebook.language ? toLanguageDto(notebook.language) : null,
      pageCount: notebook._count.pages,
      createdAt: notebook.createdAt.toISOString(),
      updatedAt: notebook.updatedAt.toISOString(),
    };
  }

  async deleteNotebook(userId: string, notebookId: string): Promise<void> {
    await this.assertOwnNotebook(userId, notebookId);
    await this.prisma.notebook.delete({ where: { id: notebookId } });
  }

  // --------------------------------------------------------------- Seiten

  async listPages(userId: string, notebookId: string): Promise<NotebookPageDto[]> {
    await this.assertOwnNotebook(userId, notebookId);
    const pages = await this.prisma.notebookPage.findMany({
      where: { notebookId },
      orderBy: { index: 'asc' },
    });
    return pages.map((page) => this.toPageDto(page));
  }

  async getPage(userId: string, pageId: string): Promise<NotebookPageDto> {
    const page = await this.prisma.notebookPage.findUnique({
      where: { id: pageId },
      include: { notebook: true },
    });
    if (!page) throw new NotFoundException('Seite nicht gefunden');
    if (page.notebook.userId !== userId) throw new ForbiddenException('Kein Zugriff auf diese Seite');
    return this.toPageDto(page);
  }

  async createPage(userId: string, notebookId: string, dto: CreatePageDto): Promise<NotebookPageDto> {
    await this.assertOwnNotebook(userId, notebookId);

    const last = await this.prisma.notebookPage.findFirst({
      where: { notebookId },
      orderBy: { index: 'desc' },
      select: { index: true },
    });

    const background = dto.background ?? PageBackground.LINED;
    const page = await this.prisma.notebookPage.create({
      data: {
        notebookId,
        index: (last?.index ?? -1) + 1,
        background,
        content: emptyPageContent(
          dto.width ?? 1000,
          dto.height ?? 1414,
          background,
        ) as unknown as Prisma.InputJsonValue,
      },
    });

    await this.touchNotebook(notebookId);
    return this.toPageDto(page);
  }

  /**
   * Speichert den Canvas-Inhalt. Die App ruft das gedrosselt beim Zeichnen auf
   * (Autosave) und immer beim Verlassen der Seite.
   */
  async updatePage(userId: string, pageId: string, dto: UpdatePageDto): Promise<NotebookPageDto> {
    const existing = await this.prisma.notebookPage.findUnique({
      where: { id: pageId },
      include: { notebook: { select: { userId: true } } },
    });
    if (!existing) throw new NotFoundException('Seite nicht gefunden');
    if (existing.notebook.userId !== userId) {
      throw new ForbiddenException('Kein Zugriff auf diese Seite');
    }

    const content = dto.content ? this.validateContent(dto.content) : undefined;

    const page = await this.prisma.notebookPage.update({
      where: { id: pageId },
      data: {
        background: dto.background ?? content?.background,
        content: content as unknown as Prisma.InputJsonValue | undefined,
        thumbnailUrl: dto.thumbnailUrl,
      },
    });

    await this.touchNotebook(page.notebookId);
    return this.toPageDto(page);
  }

  async deletePage(userId: string, pageId: string): Promise<void> {
    const page = await this.prisma.notebookPage.findUnique({
      where: { id: pageId },
      include: { notebook: { select: { userId: true } } },
    });
    if (!page) throw new NotFoundException('Seite nicht gefunden');
    if (page.notebook.userId !== userId) throw new ForbiddenException('Kein Zugriff auf diese Seite');

    const remaining = await this.prisma.notebookPage.count({ where: { notebookId: page.notebookId } });
    if (remaining <= 1) throw new BadRequestException('Ein Heft muss mindestens eine Seite behalten');

    // Nach dem Löschen werden die Indizes lückenlos neu vergeben.
    await this.prisma.$transaction(async (tx) => {
      await tx.notebookPage.delete({ where: { id: pageId } });
      const pages = await tx.notebookPage.findMany({
        where: { notebookId: page.notebookId },
        orderBy: { index: 'asc' },
        select: { id: true },
      });
      await this.writeIndices(tx, pages.map((entry) => entry.id));
    });

    await this.touchNotebook(page.notebookId);
  }

  async reorderPages(userId: string, notebookId: string, dto: ReorderPagesDto): Promise<NotebookPageDto[]> {
    await this.assertOwnNotebook(userId, notebookId);

    const pages = await this.prisma.notebookPage.findMany({
      where: { notebookId },
      select: { id: true },
    });
    const known = new Set(pages.map((page) => page.id));
    if (dto.pageIds.length !== known.size || dto.pageIds.some((id) => !known.has(id))) {
      throw new BadRequestException('Die Reihenfolge muss genau alle Seiten des Hefts enthalten');
    }

    await this.prisma.$transaction((tx) => this.writeIndices(tx, dto.pageIds));
    await this.touchNotebook(notebookId);
    return this.listPages(userId, notebookId);
  }

  // -------------------------------------------------------------- Helfer

  /**
   * Der Client schickt beliebiges JSON – hier wird es auf das erwartete Format
   * und auf sinnvolle Obergrenzen geprüft, bevor es in die Datenbank geht.
   */
  private validateContent(content: NotebookPageContent): NotebookPageContent {
    if (!Array.isArray(content.elements)) {
      throw new BadRequestException('content.elements muss ein Array sein');
    }
    if (content.elements.length > MAX_ELEMENTS_PER_PAGE) {
      throw new BadRequestException(
        `Eine Seite darf höchstens ${MAX_ELEMENTS_PER_PAGE} Elemente enthalten`,
      );
    }
    for (const element of content.elements) {
      if (element.type === 'STROKE' && element.points.length > MAX_POINTS_PER_STROKE) {
        throw new BadRequestException('Ein Strich enthält zu viele Punkte');
      }
    }

    return {
      version: NOTEBOOK_CONTENT_VERSION,
      width: content.width || 1000,
      height: content.height || 1414,
      background: content.background ?? 'LINED',
      elements: content.elements,
    };
  }

  private async writeIndices(tx: Prisma.TransactionClient, pageIds: string[]) {
    // Zweistufig, weil (notebookId, index) unique ist und sonst kollidiert.
    await Promise.all(
      pageIds.map((id, index) =>
        tx.notebookPage.update({ where: { id }, data: { index: -(index + 1) } }),
      ),
    );
    await Promise.all(
      pageIds.map((id, index) => tx.notebookPage.update({ where: { id }, data: { index } })),
    );
  }

  private async assertOwnNotebook(userId: string, notebookId: string) {
    const notebook = await this.prisma.notebook.findUnique({ where: { id: notebookId } });
    if (!notebook) throw new NotFoundException('Heft nicht gefunden');
    if (notebook.userId !== userId) throw new ForbiddenException('Kein Zugriff auf dieses Heft');
    return notebook;
  }

  /** Hält updatedAt des Hefts aktuell, damit die Übersicht korrekt sortiert. */
  private touchNotebook(notebookId: string) {
    return this.prisma.notebook.update({
      where: { id: notebookId },
      data: { updatedAt: new Date() },
    });
  }

  private toPageDto(page: {
    id: string;
    notebookId: string;
    index: number;
    background: PageBackground;
    content: Prisma.JsonValue;
    updatedAt: Date;
  }): NotebookPageDto {
    return {
      id: page.id,
      notebookId: page.notebookId,
      index: page.index,
      background: page.background,
      content: page.content as unknown as NotebookPageContent,
      updatedAt: page.updatedAt.toISOString(),
    };
  }
}
