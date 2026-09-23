import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 3: „Arbeitswelt im Wandel“ (B1, Kapitel 3)
 *
 * Fünf Seiten. Der Weg zu einer Stelle, wie er in Deutschland üblich ist –
 * Anzeige lesen, Anschreiben verfassen, Vorstellungsgespräch führen – und
 * dazu die Frage, wie sich Arbeit gerade verändert.
 *
 * Aufbau: Seite 1 liest eine Stellenanzeige und erklärt die üblichen
 * Bewerbungsunterlagen, Seite 2 baut ein Anschreiben auf, Seite 3 spielt das
 * Vorstellungsgespräch durch. Seite 4 ist der grammatische Kern: das Passiv,
 * an einem Arbeitsablauf gezeigt, bei dem es auf die Handlung ankommt und
 * nicht darauf, wer sie ausführt. Seite 5 diskutiert Homeoffice und neue
 * Technik und wiederholt das Kapitel.
 *
 * Passiv hier: Präsens, Präteritum und mit Modalverb. Das Perfekt Passiv
 * („ist … worden“) wird auf Seite 4 nur gezeigt; geübt wird es im
 * Grammatikbuch, Kapitel 11.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Firmen und Personen
 * sind erfunden; sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Stellenanzeige, die Bewerbungsunterlagen.
  {
    order: 1,
    title: 'Wir stellen ein',
    subtitle: 'Eine Stellenanzeige lesen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i3-1-h1', type: 'HEADING', level: 1, text: 'Wir stellen ein' },
        {
          id: 'i3-1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Zwei Menschen begrüßen sich in einem hellen Büro.',
          caption: 'Der erste Eindruck zählt – schon in der Bewerbung.',
        },
        {
          id: 'i3-1-anzeige',
          type: 'TEXT',
          text: 'Die Grünwerk GmbH ist ein junges Unternehmen aus Bremen, das Solaranlagen für Privathäuser plant und installiert. Für unser wachsendes Team suchen wir ab sofort eine/n\n\nKAUFFRAU / KAUFMANN FÜR BÜROMANAGEMENT (m/w/d) in Vollzeit\n\nIhre Aufgaben: Sie betreuen unsere Kundinnen und Kunden am Telefon und per E-Mail, organisieren die Termine unserer Monteure und erstellen Angebote und Rechnungen.\n\nIhr Profil: abgeschlossene kaufmännische Ausbildung, sicherer Umgang mit MS Office, gute Deutsch- und Englischkenntnisse. Berufserfahrung ist von Vorteil, aber keine Voraussetzung. Sie arbeiten gern im Team und behalten auch in stressigen Situationen den Überblick.\n\nWir bieten: einen unbefristeten Arbeitsvertrag, flexible Arbeitszeiten, einen Tag Homeoffice pro Woche, 30 Tage Urlaub und ein Jobticket.\n\nBitte senden Sie Ihre vollständigen Bewerbungsunterlagen mit Angabe Ihres frühestmöglichen Eintrittstermins bis zum 15. Mai an Frau Wagner: bewerbung@gruenwerk-bremen.de',
        },
        {
          id: 'i3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Die Stellenanzeige',
          items: [
            {
              term: 'Stelle',
              article: 'die',
              plural: 'die Stellen',
              translations: { en: 'job, position', es: 'el puesto', fr: 'le poste', it: 'il posto di lavoro' },
            },
            {
              term: 'sich bewerben (um + Akk.)',
              translations: { en: 'to apply (for)', es: 'solicitar (un puesto)', fr: 'postuler (à)', it: 'candidarsi (per)' },
              example: 'Ich bewerbe mich um die Stelle als Bürokauffrau.',
            },
            {
              term: 'Bewerbungsunterlagen',
              article: 'die',
              translations: { en: 'application documents', es: 'la documentación de la candidatura', fr: 'le dossier de candidature', it: 'la documentazione per la candidatura' },
            },
            {
              term: 'Lebenslauf',
              article: 'der',
              plural: 'die Lebensläufe',
              translations: { en: 'CV, résumé', es: 'el currículum', fr: 'le CV', it: 'il curriculum' },
            },
            {
              term: 'Anschreiben',
              article: 'das',
              translations: { en: 'cover letter', es: 'la carta de presentación', fr: 'la lettre de motivation', it: 'la lettera di presentazione' },
            },
            {
              term: 'Zeugnis',
              article: 'das',
              plural: 'die Zeugnisse',
              translations: { en: 'certificate, reference', es: 'el certificado', fr: 'le certificat', it: 'il certificato' },
            },
            {
              term: 'Berufserfahrung',
              article: 'die',
              translations: { en: 'work experience', es: 'la experiencia laboral', fr: 'l’expérience professionnelle', it: 'l’esperienza lavorativa' },
            },
            {
              term: 'unbefristet / befristet',
              translations: { en: 'permanent / fixed-term', es: 'indefinido / temporal', fr: 'à durée indéterminée / déterminée', it: 'a tempo indeterminato / determinato' },
              example: 'Der Vertrag ist auf ein Jahr befristet.',
            },
            {
              term: 'Voraussetzung',
              article: 'die',
              plural: 'die Voraussetzungen',
              translations: { en: 'requirement', es: 'el requisito', fr: 'la condition requise', it: 'il requisito' },
            },
            {
              term: 'von Vorteil sein',
              translations: { en: 'to be an advantage', es: 'ser una ventaja', fr: 'être un atout', it: 'essere un vantaggio' },
            },
            {
              term: 'Eintrittstermin',
              article: 'der',
              translations: { en: 'start date', es: 'la fecha de incorporación', fr: 'la date d’entrée en fonction', it: 'la data di inizio' },
            },
          ],
        },
        {
          id: 'i3-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Anzeige.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Ohne Berufserfahrung kann man sich nicht bewerben.' },
            { id: 'a2', text: 'Man braucht eine kaufmännische Ausbildung.' },
            { id: 'a3', text: 'Man kann an einem Tag pro Woche von zu Hause arbeiten.' },
            { id: 'a4', text: 'Die Stelle ist auf ein Jahr befristet.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Berufserfahrung ist „von Vorteil, aber keine Voraussetzung“. Der Arbeitsvertrag ist unbefristet. Eine abgeschlossene kaufmännische Ausbildung wird verlangt, und es gibt einen Tag Homeoffice pro Woche.',
        },
        {
          id: 'i3-1-info-unterlagen',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Die Bewerbungsmappe',
          text: 'Zu einer vollständigen Bewerbung gehören in Deutschland meist drei Teile: das Anschreiben (eine Seite), der tabellarische Lebenslauf (ein bis zwei Seiten, mit der neuesten Station zuerst) und Kopien der wichtigsten Zeugnisse. Heute schickt man alles meistens als eine PDF-Datei per E-Mail oder über ein Online-Portal. Ein Foto ist erlaubt, aber nicht mehr Pflicht. Auch das Geburtsdatum und der Familienstand müssen nicht mehr angegeben werden.',
        },
        {
          id: 'i3-1-match',
          type: 'MATCHING',
          instruction: 'Was bedeutet das in der Anzeige?',
          left: [
            { id: 'l1', text: '(m/w/d)' },
            { id: 'l2', text: 'in Vollzeit' },
            { id: 'l3', text: 'ab sofort' },
            { id: 'l4', text: 'Jobticket' },
          ],
          right: [
            { id: 'r1', text: 'männlich, weiblich, divers – die Stelle ist für alle offen' },
            { id: 'r2', text: 'etwa 38 bis 40 Stunden pro Woche' },
            { id: 'r3', text: 'so schnell wie möglich' },
            { id: 'r4', text: 'die Firma bezahlt einen Teil der Monatskarte für Bus und Bahn' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i3-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['bewerben', 'Lebenslauf', 'Zeugnisse', 'Voraussetzung', 'unbefristet'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ich möchte mich um eine Stelle als Krankenpfleger ' },
            { kind: 'GAP', gapId: 'c1', solution: ['bewerben'], width: 9 },
            { kind: 'TEXT', text: '. Eine abgeschlossene Ausbildung ist ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Voraussetzung'], width: 13 },
            { kind: 'TEXT', text: ', die habe ich. Den ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Lebenslauf'], width: 11 },
            { kind: 'TEXT', text: ' habe ich schon aktualisiert, jetzt scanne ich noch meine ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Zeugnisse'], width: 10 },
            { kind: 'TEXT', text: '. Das Beste: Der Vertrag ist ' },
            { kind: 'GAP', gapId: 'c5', solution: ['unbefristet'], width: 12 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – das Anschreiben.
  {
    order: 2,
    title: 'Das Anschreiben',
    subtitle: 'Sich schriftlich bewerben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i3-2-h1', type: 'HEADING', level: 1, text: 'Das Anschreiben' },
        {
          id: 'i3-2-intro',
          type: 'TEXT',
          text: 'Elif Demir hat die Anzeige der Grünwerk GmbH gelesen und schreibt ihr Anschreiben. Lesen Sie, wie sie es aufbaut: Wer ist sie, was kann sie, und warum passt sie zu genau dieser Firma?',
        },
        {
          id: 'i3-2-brief',
          type: 'TEXT',
          text: 'Bewerbung als Kauffrau für Büromanagement\n\nSehr geehrte Frau Wagner,\n\nmit großem Interesse habe ich Ihre Stellenanzeige gelesen. Da mir erneuerbare Energien persönlich sehr am Herzen liegen, würde ich gern Teil Ihres Teams werden.\n\nIm vergangenen Sommer habe ich meine Ausbildung zur Kauffrau für Büromanagement bei einer Spedition in Oldenburg erfolgreich abgeschlossen. Dort war ich unter anderem für die Terminplanung der Fahrer und für die Kommunikation mit Kunden zuständig. Dabei habe ich gelernt, auch unter Zeitdruck ruhig und freundlich zu bleiben. Mit MS Office arbeite ich täglich, und durch ein Auslandspraktikum in Irland spreche ich gut Englisch.\n\nBesonders reizen mich an der Stelle bei Ihnen der direkte Kontakt zu den Kunden und die Organisation der Montagetermine.\n\nIch könnte ab dem 1. Juli bei Ihnen anfangen. Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nElif Demir',
        },
        {
          id: 'i3-2-info-aufbau',
          type: 'INFO',
          variant: 'TIP',
          title: 'So ist ein Anschreiben aufgebaut',
          text: 'Das Anschreiben ist keine Wiederholung des Lebenslaufs. Es erklärt, warum Sie gerade diese Stelle wollen und was Sie der Firma bieten. Sprechen Sie, wenn möglich, eine Person mit Namen an, und bleiben Sie bei einer Seite.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Einleitung', 'Mit großem Interesse habe ich Ihre Anzeige gelesen. / Hiermit bewerbe ich mich um …'],
              ['Qualifikation', 'Ich habe meine Ausbildung als … abgeschlossen. / Ich war für … zuständig.'],
              ['Motivation', 'Besonders reizt mich an der Stelle … / Ihr Unternehmen interessiert mich, weil …'],
              ['Eintritt', 'Ich könnte ab dem … bei Ihnen anfangen.'],
              ['Schluss', 'Über eine Einladung zu einem persönlichen Gespräch freue ich mich.'],
            ],
          },
        },
        {
          id: 'i3-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Anschreiben noch einmal.',
          question: 'Warum möchte Elif gerade bei der Grünwerk GmbH arbeiten? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Erneuerbare Energien sind ihr persönlich wichtig.' },
            { id: 'a2', text: 'Die Firma zahlt mehr als ihre alte Spedition.' },
            { id: 'a3', text: 'Sie hat gern direkten Kontakt mit Kunden.' },
            { id: 'a4', text: 'Sie möchte als Monteurin Solaranlagen installieren.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Elif schreibt, dass ihr erneuerbare Energien „am Herzen liegen“ und dass sie „der direkte Kontakt zu den Kunden“ reizt. Über Geld sagt sie nichts, und sie organisiert die Termine der Monteure, statt selbst zu montieren.',
        },
        {
          id: 'i3-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Anschreiben.',
          wordBank: ['Interesse', 'zuständig', 'abgeschlossen', 'reizt', 'Einladung'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sehr geehrter Herr Özkan,\n\nmit großem ' },
            { kind: 'GAP', gapId: 'b1', solution: ['Interesse'], width: 10 },
            { kind: 'TEXT', text: ' habe ich Ihre Anzeige auf der Website gelesen. 2023 habe ich mein Studium der Informatik ' },
            { kind: 'GAP', gapId: 'b2', solution: ['abgeschlossen'], width: 13 },
            { kind: 'TEXT', text: '. In meiner jetzigen Firma bin ich für die Betreuung der Kundendatenbank ' },
            { kind: 'GAP', gapId: 'b3', solution: ['zuständig', 'zustaendig'], width: 10 },
            { kind: 'TEXT', text: '. An der Stelle bei Ihnen ' },
            { kind: 'GAP', gapId: 'b4', solution: ['reizt'], width: 6 },
            { kind: 'TEXT', text: ' mich besonders die Arbeit im internationalen Team. Über eine ' },
            { kind: 'GAP', gapId: 'b5', solution: ['Einladung'], width: 10 },
            { kind: 'TEXT', text: ' zu einem Gespräch freue ich mich sehr.' },
          ],
        },
        {
          id: 'i3-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie den Schlusssatz eines Anschreibens.',
          items: [
            { id: 'o1', text: 'Über' },
            { id: 'o2', text: 'eine Einladung' },
            { id: 'o3', text: 'zu einem' },
            { id: 'o4', text: 'persönlichen Gespräch' },
            { id: 'o5', text: 'freue' },
            { id: 'o6', text: 'ich' },
            { id: 'o7', text: 'mich sehr.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Vorstellungsgespräch.
  {
    order: 3,
    title: 'Das Vorstellungsgespräch',
    subtitle: 'Sich persönlich vorstellen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i3-3-h1', type: 'HEADING', level: 1, text: 'Das Vorstellungsgespräch' },
        {
          id: 'i3-3-dlg',
          type: 'DIALOGUE',
          title: 'Bei der Grünwerk GmbH',
          lines: [
            { speaker: 'Frau Wagner', text: 'Frau Demir, schön, dass Sie da sind. Haben Sie gut zu uns gefunden?' },
            { speaker: 'Elif', text: 'Ja, danke. Ich bin mit der Straßenbahn gekommen, das ging sehr schnell.' },
            { speaker: 'Frau Wagner', text: 'Erzählen Sie doch bitte etwas über sich und Ihren beruflichen Werdegang.' },
            { speaker: 'Elif', text: 'Gern. Nach dem Realschulabschluss habe ich eine Ausbildung bei einer Spedition gemacht. Dort habe ich vor allem Termine koordiniert und Kunden betreut.' },
            { speaker: 'Frau Wagner', text: 'Was sind Ihre Stärken?' },
            { speaker: 'Elif', text: 'Ich bin sehr gut organisiert und bleibe auch unter Druck ruhig. Wenn fünf Fahrer gleichzeitig anrufen, behalte ich den Überblick.' },
            { speaker: 'Frau Wagner', text: 'Und Ihre Schwächen?' },
            { speaker: 'Elif', text: 'Manchmal bin ich ungeduldig, wenn Entscheidungen lange dauern. Ich habe aber gelernt, vorher nachzufragen, wann ich mit einer Antwort rechnen kann.' },
            { speaker: 'Frau Wagner', text: 'Haben Sie noch Fragen an uns?' },
            { speaker: 'Elif', text: 'Ja. Wie würde die Einarbeitung in den ersten Wochen aussehen?' },
          ],
        },
        {
          id: 'i3-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Im Gespräch',
          items: [
            {
              term: 'Werdegang',
              article: 'der',
              translations: { en: 'career path', es: 'la trayectoria', fr: 'le parcours', it: 'il percorso professionale' },
            },
            {
              term: 'Stärke / Schwäche',
              article: 'die',
              plural: 'die Stärken / Schwächen',
              translations: { en: 'strength / weakness', es: 'el punto fuerte / débil', fr: 'le point fort / faible', it: 'il punto di forza / debole' },
            },
            {
              term: 'den Überblick behalten',
              translations: { en: 'to keep track of things', es: 'no perder la visión de conjunto', fr: 'garder une vue d’ensemble', it: 'mantenere il controllo della situazione' },
            },
            {
              term: 'unter Druck',
              translations: { en: 'under pressure', es: 'bajo presión', fr: 'sous pression', it: 'sotto pressione' },
            },
            {
              term: 'Einarbeitung',
              article: 'die',
              translations: { en: 'induction, onboarding', es: 'la formación inicial', fr: 'la période d’intégration', it: 'il periodo di inserimento' },
            },
            {
              term: 'Gehaltsvorstellung',
              article: 'die',
              translations: { en: 'salary expectation', es: 'la expectativa salarial', fr: 'la prétention salariale', it: 'la richiesta salariale' },
            },
            {
              term: 'Probezeit',
              article: 'die',
              translations: { en: 'probation period', es: 'el periodo de prueba', fr: 'la période d’essai', it: 'il periodo di prova' },
            },
          ],
        },
        {
          id: 'i3-3-info-tipps',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Typisch für Gespräche in Deutschland',
          text: 'Pünktlichkeit ist sehr wichtig – kommen Sie lieber zehn Minuten zu früh. Man begrüßt sich mit Handschlag und siezt sich, bis man etwas anderes vereinbart. Die Frage nach Ihren Schwächen ist üblich: Nennen Sie eine echte, aber harmlose Schwäche und sagen Sie, wie Sie damit umgehen. Am Ende sollten Sie selbst Fragen stellen, das zeigt Interesse. Fragen nach Religion, Familienplanung oder Schwangerschaft sind nicht erlaubt.',
        },
        {
          id: 'i3-3-match',
          type: 'MATCHING',
          instruction: 'Welche Antwort passt zu welcher Frage?',
          left: [
            { id: 'l1', text: 'Warum möchten Sie bei uns arbeiten?' },
            { id: 'l2', text: 'Was ist Ihre größte Stärke?' },
            { id: 'l3', text: 'Wann könnten Sie anfangen?' },
            { id: 'l4', text: 'Was ist Ihre Gehaltsvorstellung?' },
          ],
          right: [
            { id: 'r1', text: 'Ihre Produkte gefallen mir, und ich möchte mich weiterentwickeln.' },
            { id: 'r2', text: 'Ich kann gut mit Menschen umgehen, auch wenn sie verärgert sind.' },
            { id: 'r3', text: 'Meine Kündigungsfrist beträgt vier Wochen, also ab dem 1. Juni.' },
            { id: 'r4', text: 'Ich stelle mir ein Bruttojahresgehalt von etwa 38 000 Euro vor.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i3-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Frage darf man im Vorstellungsgespräch nicht stellen?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Welche Programme haben Sie in Ihrer Ausbildung benutzt?' },
            { id: 'a2', text: 'Planen Sie, in den nächsten Jahren Kinder zu bekommen?' },
            { id: 'a3', text: 'Warum haben Sie Ihre letzte Stelle gewechselt?' },
            { id: 'a4', text: 'Wie gehen Sie mit Stress um?' },
          ],
          solution: ['a2'],
          explanation:
            'Fragen zur Familienplanung sind im Vorstellungsgespräch nicht zulässig. Man muss darauf nicht ehrlich antworten.',
        },
        {
          id: 'i3-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie Elifs Antworten.',
          wordBank: ['Werdegang', 'Überblick', 'Druck', 'Einarbeitung', 'Probezeit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Frau Wagner wollte zuerst etwas über meinen beruflichen ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Werdegang'], width: 10 },
            { kind: 'TEXT', text: ' wissen. Ich habe erzählt, dass ich auch unter ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Druck'], width: 6 },
            { kind: 'TEXT', text: ' ruhig bleibe und immer den ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Überblick', 'Ueberblick'], width: 10 },
            { kind: 'TEXT', text: ' behalte. Dann habe ich gefragt, wie die ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Einarbeitung'], width: 12 },
            { kind: 'TEXT', text: ' aussieht. Die ersten sechs Monate sind die ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Probezeit'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – das Passiv, an einem Arbeitsablauf.
  {
    order: 4,
    title: 'Hier wird geplant und gebaut',
    subtitle: 'Das Passiv',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i3-4-h1', type: 'HEADING', level: 1, text: 'Hier wird geplant und gebaut' },
        {
          id: 'i3-4-text',
          type: 'TEXT',
          text: 'Wie kommt die Solaranlage aufs Dach? Auf der Website der Grünwerk GmbH wird der Ablauf erklärt:\n\n1. Zuerst wird ein Beratungstermin vereinbart. Dabei werden das Dach und der Stromverbrauch geprüft.\n2. Danach wird die Anlage am Computer geplant, und der Kunde bekommt ein Angebot.\n3. Nach der Unterschrift werden die Module bestellt. Die Lieferung wird meistens innerhalb von sechs Wochen organisiert.\n4. Am Montagetag wird ein Gerüst aufgestellt. Die Module werden auf dem Dach befestigt und an das Stromnetz angeschlossen.\n5. Zum Schluss wird die Anlage beim Netzbetreiber angemeldet – und dann kann Strom produziert werden.\n\nÜbrigens: Früher wurden die Pläne noch von Hand gezeichnet. Heute werden sie mit einer Software erstellt, und die Dächer werden oft mit einer Drohne vermessen.',
        },
        {
          id: 'i3-4-info-passiv',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Passiv: werden + Partizip II',
          text: 'Im Passiv ist die Handlung wichtiger als die Person, die sie ausführt. Man bildet es mit „werden“ und dem Partizip II am Satzende. Im Präteritum steht „wurde“. Mit Modalverb steht das Modalverb konjugiert auf Position 2, am Ende „Partizip II + werden“. Will man doch sagen, wer handelt, benutzt man „von“ + Dativ: Die Pläne werden von einer Ingenieurin erstellt.',
          table: {
            headers: ['', 'Aktiv', 'Passiv'],
            rows: [
              ['Präsens', 'Man prüft das Dach.', 'Das Dach wird geprüft.'],
              ['Präsens Plural', 'Man bestellt die Module.', 'Die Module werden bestellt.'],
              ['Präteritum', 'Man zeichnete die Pläne.', 'Die Pläne wurden gezeichnet.'],
              ['mit Modalverb', 'Man kann Strom produzieren.', 'Strom kann produziert werden.'],
              ['Perfekt (nur zum Erkennen)', 'Man hat die Anlage angemeldet.', 'Die Anlage ist angemeldet worden.'],
            ],
          },
        },
        {
          id: 'i3-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Ablauf.',
          question: 'Was passiert direkt nach der Unterschrift?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Das Dach wird geprüft.' },
            { id: 'a2', text: 'Die Module werden bestellt.' },
            { id: 'a3', text: 'Ein Gerüst wird aufgestellt.' },
            { id: 'a4', text: 'Die Anlage wird angemeldet.' },
          ],
          solution: ['a2'],
          explanation: 'Schritt 3: „Nach der Unterschrift werden die Module bestellt.“',
        },
        {
          id: 'i3-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Passiv im Präsens.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. In unserer Bäckerei ' },
            { kind: 'GAP', gapId: 'p1', solution: ['wird'], width: 5 },
            { kind: 'TEXT', text: ' der Teig schon um drei Uhr morgens ' },
            { kind: 'GAP', gapId: 'p2', solution: ['gemacht'], hint: 'machen', width: 8 },
            { kind: 'TEXT', text: '.\n2. Die Brötchen ' },
            { kind: 'GAP', gapId: 'p3', solution: ['werden'], width: 7 },
            { kind: 'TEXT', text: ' um fünf Uhr ' },
            { kind: 'GAP', gapId: 'p4', solution: ['gebacken'], hint: 'backen', width: 9 },
            { kind: 'TEXT', text: '.\n3. Um sechs Uhr ' },
            { kind: 'GAP', gapId: 'p5', solution: ['wird'], width: 5 },
            { kind: 'TEXT', text: ' der Laden ' },
            { kind: 'GAP', gapId: 'p6', solution: ['geöffnet', 'geoeffnet'], hint: 'öffnen', width: 9 },
            { kind: 'TEXT', text: '.\n4. Am Abend ' },
            { kind: 'GAP', gapId: 'p7', solution: ['werden'], width: 7 },
            { kind: 'TEXT', text: ' die Reste an eine Tafel ' },
            { kind: 'GAP', gapId: 'p8', solution: ['gespendet'], hint: 'spenden', width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'i3-4-cloze-2',
          type: 'CLOZE',
          instruction: 'Präteritum oder Modalverb? Ergänzen Sie.',
          wordBank: ['wurde', 'wurden', 'werden', 'muss'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Die Firma ' },
            { kind: 'GAP', gapId: 'q1', solution: ['wurde'], width: 6 },
            { kind: 'TEXT', text: ' 2015 in Bremen gegründet.\n2. Früher ' },
            { kind: 'GAP', gapId: 'q2', solution: ['wurden'], width: 7 },
            { kind: 'TEXT', text: ' alle Rechnungen per Post verschickt.\n3. Die Anlage kann in zwei Tagen montiert ' },
            { kind: 'GAP', gapId: 'q3', solution: ['werden'], width: 7 },
            { kind: 'TEXT', text: '.\n4. Das Formular ' },
            { kind: 'GAP', gapId: 'q4', solution: ['muss'], width: 5 },
            { kind: 'TEXT', text: ' bis Freitag unterschrieben werden.' },
          ],
        },
        {
          id: 'i3-4-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Passivsatz.',
          items: [
            { id: 'o1', text: 'Die Dächer' },
            { id: 'o2', text: 'werden' },
            { id: 'o3', text: 'heute' },
            { id: 'o4', text: 'mit einer Drohne' },
            { id: 'o5', text: 'vermessen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'i3-4-choice-2',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Das Angebot wird von Frau Wagner geschrieben.' },
            { id: 'c2', text: 'Das Angebot wird durch Frau Wagner geschreibt.' },
            { id: 'c3', text: 'Die Kunden wurden gestern informiert.' },
            { id: 'c4', text: 'Die Anlage muss werden angemeldet.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Die handelnde Person steht mit „von“ + Dativ, und das Partizip II von „schreiben“ heißt „geschrieben“. Mit Modalverb steht „werden“ ganz am Ende: Die Anlage muss angemeldet werden.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Arbeit der Zukunft, Rückblick.
  {
    order: 5,
    title: 'Arbeiten wir bald alle zu Hause?',
    subtitle: 'Über Veränderungen diskutieren, Rückblick',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'i3-5-h1', type: 'HEADING', level: 1, text: 'Arbeiten wir bald alle zu Hause?' },
        {
          id: 'i3-5-text',
          type: 'TEXT',
          text: 'Im Onlineforum einer Zeitung wurde gefragt: „Wie hat sich Ihre Arbeit in den letzten Jahren verändert?“\n\nMarkus, 44, Versicherungskaufmann: „Seit drei Jahren arbeite ich überwiegend im Homeoffice. Ich spare jeden Tag eine Stunde Fahrzeit und kann mir die Arbeit besser einteilen. Aber mir fehlen die Kollegen. Die kurzen Gespräche in der Kaffeeküche kann keine Videokonferenz ersetzen.“\n\nSvetlana, 31, Pflegerin: „Homeoffice? Das gibt es bei uns nicht. Kranke Menschen können nicht online gepflegt werden. Aber die Dokumentation wird jetzt am Tablet gemacht, das spart Zeit. Ich finde, man sollte mehr über die Berufe reden, die nicht digital werden können.“\n\nJan, 26, Programmierer: „Viele Routineaufgaben werden inzwischen von Software erledigt. Einige finden das bedrohlich. Meiner Meinung nach entstehen dadurch aber auch neue Jobs – man muss nur bereit sein, immer weiter zu lernen.“',
        },
        {
          id: 'i3-5-info-meinung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Die eigene Meinung sagen',
          text: 'In einer Diskussion nennen Sie Ihre Meinung, begründen sie und gehen auf andere Positionen ein.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Meinung', 'Ich finde / glaube / denke, dass … / Meiner Meinung nach …'],
              ['Vorteil', 'Ein großer Vorteil ist, dass … / Positiv finde ich …'],
              ['Nachteil', 'Ein Nachteil ist … / Problematisch finde ich …'],
              ['Einwand', 'Das stimmt zwar, aber … / Einerseits …, andererseits …'],
            ],
          },
        },
        {
          id: 'i3-5-match',
          type: 'MATCHING',
          instruction: 'Wer sagt das?',
          left: [
            { id: 'l1', text: 'Markus' },
            { id: 'l2', text: 'Svetlana' },
            { id: 'l3', text: 'Jan' },
          ],
          right: [
            { id: 'r1', text: 'Im Homeoffice fehlt der persönliche Kontakt.' },
            { id: 'r2', text: 'Nicht jeder Beruf kann digital werden.' },
            { id: 'r3', text: 'Neue Technik schafft auch neue Arbeitsplätze.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i3-5-cloze',
          type: 'CLOZE',
          instruction: 'Rückblick: Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Letzte Woche habe ich mich um eine neue ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Stelle'], width: 7 },
            { kind: 'TEXT', text: ' beworben. Mit dem Anschreiben habe ich auch meinen ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Lebenslauf'], width: 11 },
            { kind: 'TEXT', text: ' geschickt. Gestern ' },
            { kind: 'GAP', gapId: 'r3', solution: ['wurde'], width: 6 },
            { kind: 'TEXT', text: ' ich zu einem Vorstellungsgespräch eingeladen. Dort ' },
            { kind: 'GAP', gapId: 'r4', solution: ['werde'], width: 6 },
            { kind: 'TEXT', text: ' ich bestimmt nach meinen Stärken und Schwächen gefragt. Die Antworten ' },
            { kind: 'GAP', gapId: 'r5', solution: ['müssen'], width: 7 },
            { kind: 'TEXT', text: ' gut vorbereitet werden.' },
          ],
        },
        {
          id: 'i3-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Die Stelle wurde gestern ausgeschrieben.' },
            { id: 'k2', text: 'Im Homeoffice wird viel per Video kommuniziert.' },
            { id: 'k3', text: 'Die Bewerbung muss bis Montag geschickt wird.' },
            { id: 'k4', text: 'Ich bewerbe mich für die Stelle als Pfleger.' },
          ],
          solution: ['k1', 'k2'],
          explanation:
            'Mit Modalverb steht „werden“ im Infinitiv am Ende: …, muss bis Montag geschickt werden. Und man bewirbt sich „um“ eine Stelle, nicht „für“.',
        },
        {
          id: 'i3-5-writing',
          type: 'WRITING',
          instruction: 'Ein Beitrag im Onlineforum',
          prompt:
            'Schreiben Sie selbst einen Beitrag für das Forum: Wie hat sich die Arbeit in Ihrem Beruf (oder in einem Beruf, den Sie kennen) verändert? Nennen Sie Vorteile und Nachteile, sagen Sie Ihre Meinung zum Homeoffice und benutzen Sie mindestens zwei Passivsätze.',
          minWords: 80,
          maxWords: 180,
          aiFeedback: true,
          sampleAnswer:
            'Ich arbeite als Lehrerin an einer Grundschule. In den letzten Jahren hat sich meine Arbeit stark verändert. Früher wurden alle Arbeitsblätter kopiert, heute werden viele Aufgaben am Tablet gemacht. Ein großer Vorteil ist, dass die Kinder in ihrem eigenen Tempo lernen können. Problematisch finde ich aber, dass manche Familien zu Hause keinen Computer haben. Homeoffice ist in meinem Beruf kaum möglich, denn Kinder können nicht nur online unterrichtet werden. Einerseits spare ich keine Fahrzeit, andererseits sehe ich jeden Tag meine Schülerinnen und Schüler – und das ist mir wichtig.',
        },
      ],
    },
  },
];
