const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

/**
 * Metro-Konfiguration für das Monorepo.
 *
 * Ohne diese Datei sucht Metro den Einstiegspunkt im Wurzelverzeichnis statt in
 * mobile/ und bricht mit "Unable to resolve module ./index" ab. Nötig sind drei
 * Dinge: der Projektstamm, das Beobachten des Workspace-Wurzelverzeichnisses
 * (dort liegt @lingua/shared und das gehobene node_modules) und eine feste
 * Auflösungsreihenfolge für Module.
 */
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = config;
