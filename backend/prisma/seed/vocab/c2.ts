import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** C2 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_C2: VocabCategorySeed[] = [
  {
    key: 'c2-academic',
    level: CefrLevel.C2,
    icon: '📚',
    titles: {
      en: 'Academic Language',
      de: 'Wissenschaftssprache',
      es: 'Lenguaje académico',
      fr: 'Langue académique',
      it: 'Linguaggio accademico',
    },
    words: `
      thesis | die Abschlussarbeit | la tesis | la thèse | la tesi
      dissertation | die Dissertation | la tesis doctoral | la thèse de doctorat | la tesi di dottorato
      abstract (summary) | die Zusammenfassung (Abstract) | el resumen | le résumé | l'abstract
      bibliography | das Literaturverzeichnis | la bibliografía | la bibliographie | la bibliografia
      citation | das Zitat | la cita (textual) | la citation | la citazione
      footnote | die Fußnote | la nota a pie de página | la note de bas de page | la nota a piè di pagina
      methodology | die Methodik | la metodología | la méthodologie | la metodologia
      empirical study | die empirische Studie | el estudio empírico | l'étude empirique | lo studio empirico
      peer review | die Begutachtung | la revisión por pares | l'évaluation par les pairs | la revisione paritaria
      argumentation | die Argumentation | la argumentación | l'argumentation | l'argomentazione
      discourse | der Diskurs | el discurso | le discours | il discorso
      paradigm | das Paradigma | el paradigma | le paradigme | il paradigma
      terminology | die Terminologie | la terminología | la terminologie | la terminologia
      definition | die Definition | la definición | la définition | la definizione
      synthesis | die Synthese | la síntesis | la synthèse | la sintesi
      variable | die Variable | la variable | la variable | la variabile
      sample size | die Stichprobengröße | el tamaño de la muestra | la taille de l'échantillon | la dimensione del campione
      finding | der Befund | el hallazgo científico | la constatation | la constatazione
      limitation | die Einschränkung | la limitación | la limite | il limite
      plagiarism | das Plagiat | el plagio | le plagiat | il plagio
      supervisor | der Betreuer | el director de tesis | le directeur de thèse | il relatore
      lecturer | der Dozent | el profesor universitario | le maître de conférences | il docente universitario
      seminar | das Seminar | el seminario | le séminaire | il seminario
      faculty | die Fakultät | la facultad | la faculté | la facoltà
      doctorate | die Promotion | el doctorado | le doctorat | il dottorato
      academic | akademisch | académico | universitaire | accademico
      empirical | empirisch | empírico | empirique | empirico
      theoretical | theoretisch | teórico | théorique | teorico
      interdisciplinary | interdisziplinär | interdisciplinario | interdisciplinaire | interdisciplinare
      qualitative | qualitativ | cualitativo | qualitatif | qualitativo
      quantitative | quantitativ | cuantitativo | quantitatif | quantitativo
      representative | repräsentativ | representativo | représentatif | rappresentativo
      preliminary | vorläufig (Vorab-) | preliminar | préliminaire | preliminare
      subsequent | nachfolgend | posterior | ultérieur | successivo
      aforementioned | oben genannt | anteriormente mencionado | susmentionné | summenzionato
      hence | folglich | por consiguiente | par conséquent | pertanto
      whereas | wohingegen | mientras que | tandis que | mentre invece
      thereby | dadurch | con ello | ainsi | in tal modo
      notwithstanding | ungeachtet | pese a | nonobstant | malgrado
      to hypothesise | eine Hypothese aufstellen | plantear una hipótesis | émettre une hypothèse | formulare un'ipotesi
      to substantiate | untermauern | corroborar | étayer | suffragare
      to cite | zitieren (Quelle) | citar (fuente) | citer (une source) | citare (una fonte)
      to elaborate | ausführen | desarrollar (una idea) | développer (une idée) | approfondire
      to infer | folgern | inferir | inférer | inferire
      to postulate | postulieren | postular | postuler | postulare
      to refute | widerlegen | refutar | réfuter | confutare
      to scrutinise | genau prüfen | escudriñar | scruter | scrutare
      to conceptualise | konzipieren | conceptualizar | conceptualiser | concettualizzare
      to generalise | verallgemeinern | generalizar | généraliser | generalizzare
      to corroborate | bekräftigen | ratificar | corroborer | corroborare
    `,
  },
  {
    key: 'c2-literature',
    level: CefrLevel.C2,
    icon: '🖋️',
    titles: {
      en: 'Literature & Rhetoric',
      de: 'Literatur & Rhetorik',
      es: 'Literatura y retórica',
      fr: 'Littérature et rhétorique',
      it: 'Letteratura e retorica',
    },
    words: `
      rhetoric | die Rhetorik | la retórica | la rhétorique | la retorica
      metaphor | die Metapher | la metáfora | la métaphore | la metafora
      irony | die Ironie | la ironía | l'ironie | l'ironia
      allegory | die Allegorie | la alegoría | l'allégorie | l'allegoria
      narrator | der Erzähler | el narrador | le narrateur | il narratore
      protagonist | der Protagonist | el protagonista | le protagoniste | il protagonista
      genre | die Gattung | el género | le genre | il genere
      prose | die Prosa | la prosa | la prose | la prosa
      verse | der Vers | el verso | le vers | il verso
      stanza | die Strophe | la estrofa | la strophe | la strofa
      rhyme | der Reim | la rima | la rime | la rima
      tragedy | die Tragödie | la tragedia | la tragédie | la tragedia
      comedy | die Komödie | la comedia | la comédie | la commedia
      satire | die Satire | la sátira | la satire | la satira
      myth | der Mythos | el mito | le mythe | il mito
      fable | die Fabel | la fábula | la fable | la favola
      anthology | die Anthologie | la antología | l'anthologie | l'antologia
      manuscript | das Manuskript | el manuscrito | le manuscrit | il manoscritto
      epilogue | der Epilog | el epílogo | l'épilogue | l'epilogo
      climax | der Höhepunkt | el clímax | le point culminant | il culmine
      tone | der Ton | el tono | le ton | il tono
      imagery | die Bildsprache | las imágenes literarias | l'imagerie | le immagini letterarie
      symbolism | die Symbolik | el simbolismo | le symbolisme | il simbolismo
      eloquence | die Beredsamkeit | la elocuencia | l'éloquence | l'eloquenza
      pathos | das Pathos | el patetismo | le pathos | il pathos
      nuance (style) | die Feinheit | la sutileza | la finesse | la finezza
      digression | der Exkurs | la digresión | la digression | la digressione
      euphemism | der Euphemismus | el eufemismo | l'euphémisme | l'eufemismo
      cliché | das Klischee | el tópico | le cliché | il cliché
      pseudonym | das Pseudonym | el seudónimo | le pseudonyme | lo pseudonimo
      eloquent | wortgewandt | elocuente | éloquent | eloquente
      poetic | poetisch | poético | poétique | poetico
      lyrical | lyrisch | lírico | lyrique | lirico
      ironic | ironisch | irónico | ironique | ironico
      metaphorical | bildlich | metafórico | métaphorique | metaforico
      verbose | weitschweifig | verboso | verbeux | prolisso
      concise | prägnant | conciso | concis | conciso
      evocative | eindrucksvoll | evocador | évocateur | evocativo
      melancholic | melancholisch | melancólico | mélancolique | malinconico
      grotesque | grotesk | grotesco | grotesque | grottesco
      to narrate | erzählen | narrar | narrer | narrare
      to depict | darstellen (schildern) | retratar | dépeindre | raffigurare
      to allude to | anspielen auf | aludir a | faire allusion à | alludere a
      to paraphrase | umschreiben | parafrasear | paraphraser | parafrasare
      to recite | vortragen | recitar | réciter | recitare
      to foreshadow | vorausdeuten | presagiar | préfigurer | prefigurare
      to embellish | ausschmücken | adornar | embellir | abbellire
      to captivate | fesseln | cautivar | captiver | affascinare
      to satirise | verspotten | satirizar | satiriser | satireggiare
      to rhyme | sich reimen | rimar | rimer | rimare
    `,
  },
  {
    key: 'c2-diplomacy',
    level: CefrLevel.C2,
    icon: '🕊️',
    titles: {
      en: 'Diplomacy & Geopolitics',
      de: 'Diplomatie & Geopolitik',
      es: 'Diplomacia y geopolítica',
      fr: 'Diplomatie et géopolitique',
      it: 'Diplomazia e geopolitica',
    },
    words: `
      diplomacy | die Diplomatie | la diplomacia | la diplomatie | la diplomazia
      diplomat | der Diplomat | el diplomático | le diplomate | il diplomatico
      embassy | die Botschaft | la embajada | l'ambassade | l'ambasciata
      ambassador | der Botschafter | el embajador | l'ambassadeur | l'ambasciatore
      treaty | der Vertrag (Staaten) | el tratado | le traité | il trattato
      alliance | das Bündnis | la alianza | l'alliance | l'alleanza
      sovereignty | die Souveränität | la soberanía | la souveraineté | la sovranità
      summit | der Gipfel | la cumbre | le sommet | il vertice
      negotiations | die Verhandlungen | las negociaciones | les négociations | i negoziati
      sanctions | die Sanktionen | las sanciones | les sanctions | le sanzioni
      ceasefire | der Waffenstillstand | el alto el fuego | le cessez-le-feu | il cessate il fuoco
      conflict | der Konflikt | el conflicto | le conflit | il conflitto
      territory | das Hoheitsgebiet | el territorio | le territoire | il territorio
      superpower | die Supermacht | la superpotencia | la superpuissance | la superpotenza
      balance of power | das Machtgleichgewicht | el equilibrio de poder | l'équilibre des pouvoirs | l'equilibrio di potere
      foreign policy | die Außenpolitik | la política exterior | la politique étrangère | la politica estera
      security council | der Sicherheitsrat | el consejo de seguridad | le conseil de sécurité | il consiglio di sicurezza
      delegation | die Delegation | la delegación | la délégation | la delegazione
      mediation | die Vermittlung | la mediación | la médiation | la mediazione
      annexation | die Annexion | la anexión | l'annexion | l'annessione
      coup | der Putsch | el golpe de Estado | le coup d'État | il colpo di Stato
      regime | das Regime | el régimen | le régime | il regime
      dictatorship | die Diktatur | la dictadura | la dictature | la dittatura
      intelligence service | der Geheimdienst | el servicio de inteligencia | les services de renseignement | i servizi segreti
      propaganda | die Propaganda | la propaganda | la propagande | la propaganda
      disarmament | die Abrüstung | el desarme | le désarmement | il disarmo
      humanitarian aid | die humanitäre Hilfe | la ayuda humanitaria | l'aide humanitaire | gli aiuti umanitari
      stalemate | die Pattsituation | el punto muerto | l'impasse | lo stallo
      bilateral | bilateral | bilateral | bilatéral | bilaterale
      multilateral | multilateral | multilateral | multilatéral | multilaterale
      sovereign | souverän | soberano | souverain | sovrano
      authoritarian | autoritär | autoritario | autoritaire | autoritario
      diplomatic | diplomatisch | diplomático (adj.) | diplomatique | diplomatico (adj.)
      geopolitical | geopolitisch | geopolítico | géopolitique | geopolitico
      hostile | feindselig | hostil | hostile | ostile
      neutral | neutral | neutral | neutre | neutrale
      to negotiate (treaty) | aushandeln | negociar (un tratado) | négocier (un traité) | negoziare (un trattato)
      to mediate | vermitteln (Konflikt) | mediar | servir de médiateur | fare da mediatore
      to ratify | ratifizieren | ratificar | ratifier | ratificare
      to impose | verhängen | imponer | imposer | imporre
      to escalate | eskalieren | intensificarse | s'intensifier | intensificarsi
      to de-escalate | deeskalieren | rebajar la tensión | désamorcer | allentare la tensione
      to annex | annektieren | anexionar | annexer | annettere
      to condemn (officially) | verurteilen (offiziell) | condenar (oficialmente) | condamner (officiellement) | condannare (ufficialmente)
      to intervene | eingreifen | intervenir | intervenir | intervenire
      to overthrow | stürzen | derrocar | renverser | rovesciare
      to sign (a treaty) | unterzeichnen | suscribir | signer (un traité) | sottoscrivere
      to recognise (a state) | anerkennen (Staat) | reconocer (un Estado) | reconnaître (un État) | riconoscere (uno Stato)
      to expel | ausweisen | expulsar | expulser (un diplomate) | espellere (un diplomatico)
      to deter | abschrecken | disuadir | dissuader | dissuadere
    `,
  },
  {
    key: 'c2-finance',
    level: CefrLevel.C2,
    icon: '💹',
    titles: {
      en: 'Finance & Markets',
      de: 'Finanzen & Märkte',
      es: 'Finanzas y mercados',
      fr: 'Finance et marchés',
      it: 'Finanza e mercati',
    },
    words: `
      asset | der Vermögenswert | el activo | l'actif | l'attivo
      liability (finance) | die Verbindlichkeit | el pasivo | le passif | il passivo
      equity | das Eigenkapital | el patrimonio neto | les capitaux propres | il patrimonio netto
      bond | die Anleihe | el bono | l'obligation | l'obbligazione
      dividend | die Dividende | el dividendo | le dividende | il dividendo
      portfolio | das Portfolio | la cartera de valores | le portefeuille (titres) | il portafoglio titoli
      yield | die Rendite | la rentabilidad | le rendement | il rendimento (finanziario)
      liquidity | die Liquidität | la liquidez | la liquidité | la liquidità
      volatility | die Volatilität | la volatilidad | la volatilité | la volatilità
      recession | die Rezession | la recesión | la récession | la recessione
      speculation | die Spekulation | la especulación | la spéculation | la speculazione
      bubble | die Blase | la burbuja | la bulle | la bolla
      interest rate | der Zinssatz | el tipo de interés | le taux d'intérêt | il tasso d'interesse
      central bank | die Zentralbank | el banco central | la banque centrale | la banca centrale
      mortgage | die Hypothek | la hipoteca | le prêt immobilier | il mutuo
      collateral | die Sicherheit (Kredit) | la garantía | la garantie | la garanzia
      bankruptcy | der Konkurs | la bancarrota | la faillite | il fallimento
      insolvency | die Zahlungsunfähigkeit | la insolvencia | l'insolvabilité | l'insolvenza
      audit | die Rechnungsprüfung | la auditoría | l'audit | la revisione contabile
      balance sheet | die Bilanz | el balance | le bilan | lo stato patrimoniale
      revenue | die Einnahmen | los ingresos | les recettes | le entrate
      expenditure | die Ausgaben | el gasto | les dépenses | la spesa
      fiscal year | das Geschäftsjahr | el ejercicio fiscal | l'exercice fiscal | l'esercizio finanziario
      tax evasion | die Steuerhinterziehung | la evasión fiscal | la fraude fiscale | l'evasione fiscale
      hedge fund | der Hedgefonds | el fondo de cobertura | le fonds spéculatif | il fondo speculativo
      exchange rate | der Wechselkurs | el tipo de cambio | le taux de change | il tasso di cambio
      currency | die Währung | la moneda (divisa) | la monnaie (devise) | la valuta
      commodity | der Rohstoff | la materia prima | la matière première | la materia prima
      bear market | der Bärenmarkt | el mercado bajista | le marché baissier | il mercato ribassista
      bull market | der Bullenmarkt | el mercado alcista | le marché haussier | il mercato rialzista
      solvent | zahlungsfähig | solvente | solvable | solvibile
      volatile | volatil | volátil | volatil | volatile
      lucrative | lukrativ | lucrativo | lucratif | lucrativo
      fiscal | steuerlich | fiscal | fiscal | fiscale
      monetary | monetär | monetario | monétaire | monetario
      speculative | spekulativ | especulativo | spéculatif | speculativo
      to speculate | spekulieren | especular | spéculer | speculare
      to diversify | diversifizieren | diversificar | diversifier | diversificare
      to depreciate | an Wert verlieren | depreciarse | se déprécier | deprezzarsi
      to appreciate (value) | an Wert gewinnen | revalorizarse | s'apprécier | rivalutarsi
      to default | in Verzug geraten | incumplir los pagos | faire défaut | essere inadempiente
      to hedge | absichern | cubrirse (riesgo) | se couvrir (risque) | coprirsi (dal rischio)
      to audit | prüfen (Bücher) | auditar | auditer | revisionare i conti
      to fluctuate | schwanken | fluctuar | fluctuer | oscillare
      to plummet | einbrechen | desplomarse | chuter | crollare
      to soar | in die Höhe schnellen | dispararse | s'envoler | schizzare in alto
      to liquidate | liquidieren | liquidar | liquider | liquidare
      to underwrite | zeichnen (Emission) | suscribir (emisión) | garantir (une émission) | sottoscrivere (un'emissione)
      to levy (a tax) | erheben (Steuer) | gravar | prélever (un impôt) | imporre (una tassa)
      to embezzle | veruntreuen | malversar | détourner des fonds | appropriarsi indebitamente
    `,
  },
  {
    key: 'c2-biology',
    level: CefrLevel.C2,
    icon: '🧬',
    titles: {
      en: 'Life Sciences',
      de: 'Biowissenschaften',
      es: 'Ciencias de la vida',
      fr: 'Sciences du vivant',
      it: 'Scienze della vita',
    },
    words: `
      organism | der Organismus | el organismo | l'organisme | l'organismo
      tissue | das Gewebe | el tejido | le tissu | il tessuto
      organ | das Organ | el órgano | l'organe | l'organo
      metabolism | der Stoffwechsel | el metabolismo | le métabolisme | il metabolismo
      immune system | das Immunsystem | el sistema inmunitario | le système immunitaire | il sistema immunitario
      antibody | der Antikörper | el anticuerpo | l'anticorps | l'anticorpo
      bacterium | das Bakterium | la bacteria | la bactérie | il batterio
      pathogen | der Krankheitserreger | el patógeno | l'agent pathogène | l'agente patogeno
      mutation | die Mutation | la mutación | la mutation | la mutazione
      heredity | die Vererbung | la herencia genética | l'hérédité | l'ereditarietà
      genome | das Genom | el genoma | le génome | il genoma
      protein | das Eiweiß | la proteína | la protéine | la proteina
      enzyme | das Enzym | la enzima | l'enzyme | l'enzima
      hormone | das Hormon | la hormona | l'hormone | l'ormone
      nervous system | das Nervensystem | el sistema nervioso | le système nerveux | il sistema nervoso
      neuron | das Neuron | la neurona | le neurone | il neurone
      ecosystem | das Ökosystem | el ecosistema | l'écosystème | l'ecosistema
      biodiversity | die Artenvielfalt | la biodiversidad | la biodiversité | la biodiversità
      habitat | der Lebensraum | el hábitat | l'habitat | l'habitat
      photosynthesis | die Photosynthese | la fotosíntesis | la photosynthèse | la fotosintesi
      predator | das Raubtier | el depredador | le prédateur | il predatore
      prey | die Beute | la presa | la proie | la preda
      symbiosis | die Symbiose | la simbiosis | la symbiose | la simbiosi
      epidemic | die Epidemie | la epidemia | l'épidémie | l'epidemia
      pandemic | die Pandemie | la pandemia | la pandémie | la pandemia
      immunity | die Immunität | la inmunidad | l'immunité | l'immunità
      clinical trial | die klinische Studie | el ensayo clínico | l'essai clinique | la sperimentazione clinica
      placebo | das Placebo | el placebo | le placebo | il placebo
      prognosis | die Prognose | el pronóstico | le pronostic | la prognosi
      anaesthesia | die Narkose | la anestesia | l'anesthésie | l'anestesia
      benign | gutartig | benigno | bénin | benigno
      malignant | bösartig | maligno | malin | maligno
      hereditary | erblich | hereditario | héréditaire | ereditario
      contagious | übertragbar | transmisible | transmissible | trasmissibile
      invasive | invasiv | invasivo | invasif | invasivo
      sterile | steril | estéril | stérile | sterile
      endangered | vom Aussterben bedroht | en peligro de extinción | menacé d'extinction | a rischio di estinzione
      genetic | genetisch | genético | génétique | genetico
      to mutate | mutieren | mutar | muter | mutare
      to inherit | erben | heredar | hériter | ereditare
      to evolve | sich entwickeln (evolutionär) | evolucionar | évoluer | evolversi
      to reproduce | sich fortpflanzen | reproducirse | se reproduire | riprodursi
      to digest | verdauen | digerir | digérer | digerire
      to absorb | aufnehmen (absorbieren) | absorber | absorber | assorbire
      to secrete | absondern | segregar | sécréter | secernere
      to diagnose | diagnostizieren | diagnosticar | diagnostiquer | diagnosticare
      to transmit | übertragen | transmitir (enfermedad) | transmettre (une maladie) | trasmettere (una malattia)
      to immunise | immunisieren | inmunizar | immuniser | immunizzare
      to regenerate | sich regenerieren | regenerarse | se régénérer | rigenerarsi
      to adapt (species) | sich anpassen (Art) | adaptarse (especie) | s'adapter (espèce) | adattarsi (specie)
    `,
  },
  {
    key: 'c2-innovation',
    level: CefrLevel.C2,
    icon: '🚀',
    titles: {
      en: 'Innovation & Digital Society',
      de: 'Innovation & digitale Gesellschaft',
      es: 'Innovación y sociedad digital',
      fr: 'Innovation et société numérique',
      it: 'Innovazione e società digitale',
    },
    words: `
      innovation | die Innovation | la innovación | l'innovation | l'innovazione
      artificial intelligence | die künstliche Intelligenz | la inteligencia artificial | l'intelligence artificielle | l'intelligenza artificiale
      algorithm | der Algorithmus | el algoritmo | l'algorithme | l'algoritmo
      automation | die Automatisierung | la automatización | l'automatisation | l'automazione
      digitalisation | die Digitalisierung | la digitalización | la numérisation | la digitalizzazione
      surveillance | die Überwachung | la vigilancia | la surveillance | la sorveglianza
      cybersecurity | die Cybersicherheit | la ciberseguridad | la cybersécurité | la sicurezza informatica
      encryption | die Verschlüsselung | el cifrado | le chiffrement | la crittografia
      data protection | der Datenschutz (Recht) | la protección de datos | la protection des données | la protezione dei dati
      infrastructure | die Infrastruktur | la infraestructura | l'infrastructure | l'infrastruttura
      breakthrough | der Durchbruch | el gran avance | la percée | la svolta
      prototype | der Prototyp | el prototipo | le prototype | il prototipo
      patent | das Patent | la patente | le brevet | il brevetto
      intellectual property | das geistige Eigentum | la propiedad intelectual | la propriété intellectuelle | la proprietà intellettuale
      disruption | die Umwälzung | la disrupción | la rupture | la dirompenza
      obsolescence | die Veralterung | la obsolescencia | l'obsolescence | l'obsolescenza
      platform | die Plattform | la plataforma | la plateforme | la piattaforma
      interface | die Schnittstelle | la interfaz | l'interface | l'interfaccia
      bandwidth | die Bandbreite | el ancho de banda | la bande passante | la larghezza di banda
      cloud computing | das Cloud-Computing | la computación en la nube | l'informatique en nuage | il cloud computing
      virtual reality | die virtuelle Realität | la realidad virtual | la réalité virtuelle | la realtà virtuale
      robotics | die Robotik | la robótica | la robotique | la robotica
      digital divide | die digitale Kluft | la brecha digital | la fracture numérique | il divario digitale
      misinformation | die Desinformation | la desinformación | la désinformation | la disinformazione
      echo chamber | die Echokammer | la cámara de eco | la chambre d'écho | la camera dell'eco
      transparency | die Transparenz | la transparencia | la transparence | la trasparenza
      accountability | die Rechenschaftspflicht | la rendición de cuentas | la redevabilité | l'obbligo di rendiconto
      scalability | die Skalierbarkeit | la escalabilidad | l'évolutivité | la scalabilità
      venture capital | das Risikokapital | el capital riesgo | le capital-risque | il capitale di rischio
      ecosystem (tech) | das digitale Ökosystem | el ecosistema digital | l'écosystème numérique | l'ecosistema digitale
      cutting-edge | hochmodern | de vanguardia | de pointe | all'avanguardia
      groundbreaking | bahnbrechend | pionero | révolutionnaire | rivoluzionario
      disruptive | disruptiv | disruptivo | perturbateur | dirompente
      autonomous | autonom | autónomo | autonome | autonomo
      interconnected | vernetzt | interconectado | interconnecté | interconnesso
      data-driven | datengetrieben | basado en datos | fondé sur les données | basato sui dati
      user-friendly | benutzerfreundlich | fácil de usar | convivial | facile da usare
      to automate | automatisieren | automatizar | automatiser | automatizzare
      to encrypt | verschlüsseln | cifrar | chiffrer | crittografare
      to hack | hacken | hackear | pirater | hackerare
      to innovate | innovieren | innovar | innover | innovare
      to patent | patentieren | patentar | breveter | brevettare
      to disrupt | umwälzen | revolucionar | bouleverser | stravolgere
      to scale up | hochskalieren | escalar | passer à l'échelle | scalare
      to monitor (data) | überwachen (Daten) | monitorizar | surveiller (des données) | monitorare (dati)
      to leak | durchsickern lassen | filtrar | divulguer | far trapelare
      to track | verfolgen (Daten) | rastrear | pister | tracciare
      to digitise | digitalisieren | digitalizar | numériser | digitalizzare
      to integrate (systems) | einbinden | integrar (sistemas) | intégrer (des systèmes) | integrare (sistemi)
      to replace | ersetzen | reemplazar | remplacer | sostituire
    `,
  },
  {
    key: 'c2-verbs',
    level: CefrLevel.C2,
    icon: '🗣️',
    titles: {
      en: 'Sophisticated Verbs',
      de: 'Gehobene Verben',
      es: 'Verbos cultos',
      fr: 'Verbes soutenus',
      it: 'Verbi ricercati',
    },
    words: `
      to alleviate | mildern | paliar | atténuer | lenire
      to ascertain | ermitteln (feststellen) | averiguar | établir (vérifier) | accertare
      to attribute | zuschreiben | atribuir | attribuer (à) | attribuire
      to circumvent | umgehen | eludir | contourner | aggirare
      to coerce | nötigen | coaccionar | contraindre | costringere
      to concede | einräumen | conceder | concéder | concedere
      to condone | billigen | consentir | cautionner | avallare
      to contemplate | erwägen | contemplar (considerar) | envisager | contemplare
      to curtail | beschneiden | recortar | restreindre (réduire) | ridimensionare
      to debunk | entlarven | desmentir | démystifier | sfatare
      to deplore | beklagen | deplorar | déplorer | deplorare
      to discern | erkennen (unterscheiden) | discernir | discerner | discernere
      to dissuade | abbringen | disuadir de | dissuader de | distogliere
      to elicit | entlocken | suscitar | susciter | suscitare
      to endorse | befürworten | respaldar | approuver | appoggiare
      to entail | mit sich bringen | conllevar | entraîner | comportare
      to exacerbate | verschärfen | agravar | aggraver | aggravare
      to exemplify | veranschaulichen | ejemplificar | illustrer | esemplificare
      to impede | hemmen | impedir | empêcher | impedire
      to instigate | anstiften | instigar | instiguer | istigare
      to jeopardise | gefährden | poner en peligro | compromettre | mettere a rischio
      to mitigate | abmildern | mitigar | atténuer (les effets) | mitigare
      to negate | aufheben | anular | annuler | annullare
      to perpetuate | aufrechterhalten (fortsetzen) | perpetuar | perpétuer | perpetuare
      to procrastinate | aufschieben | procrastinar | procrastiner | procrastinare
      to proliferate | sich stark verbreiten | proliferar | proliférer | proliferare
      to reconcile | in Einklang bringen | conciliar | concilier | conciliare
      to relinquish | aufgeben (abtreten) | renunciar a | renoncer à | rinunciare a
      to repudiate | zurückweisen | repudiar | répudier | ripudiare
      to rectify | berichtigen | rectificar | rectifier | rettificare
      to reiterate | bekräftigen (wiederholen) | reiterar | réitérer | ribadire
      to supersede | ablösen | sustituir | supplanter | soppiantare
      to surmise | vermuten | conjeturar | conjecturer | congetturare
      to transcend | überschreiten | trascender | transcender | trascendere
      to vindicate | rehabilitieren | reivindicar | justifier (disculper) | rivendicare
      to waive | verzichten auf | eximir | renoncer (à un droit) | rinunciare (a un diritto)
      to ameliorate | verbessern (lindern) | mejorar (paliar) | améliorer (adoucir) | migliorare (alleviare)
      to bolster | stützen | apuntalar | étayer (renforcer) | rafforzare (sostenere)
      to capitulate | kapitulieren | capitular | capituler | capitolare
      to delineate | abgrenzen | delimitar | délimiter | delimitare
      to disseminate | verbreiten (Wissen) | difundir (conocimiento) | diffuser (des connaissances) | divulgare
      to emulate | nacheifern | emular | imiter | emulare
      to encompass | umschließen | abarcar | englober | racchiudere
      to galvanise | aufrütteln | galvanizar | galvaniser | galvanizzare
      to insinuate | unterstellen | insinuar | insinuer | insinuare
      to juxtapose | gegenüberstellen | yuxtaponer | juxtaposer | giustapporre
      to ostracise | ausgrenzen | marginar | ostraciser | ostracizzare
      to placate | beschwichtigen | aplacar | apaiser | placare
      to rebuke | tadeln | reprender | réprimander | rimproverare
      to scrutinise (closely) | unter die Lupe nehmen | examinar con lupa | examiner à la loupe | esaminare con attenzione
    `,
  },
  {
    key: 'c2-adjectives',
    level: CefrLevel.C2,
    icon: '✨',
    titles: {
      en: 'Sophisticated Adjectives',
      de: 'Gehobene Adjektive',
      es: 'Adjetivos cultos',
      fr: 'Adjectifs soutenus',
      it: 'Aggettivi ricercati',
    },
    words: `
      ubiquitous | allgegenwärtig | omnipresente | omniprésent | onnipresente
      meticulous | akribisch | meticuloso | méticuleux | meticoloso
      pragmatic | pragmatisch | pragmático | pragmatique | pragmatico
      ambivalent | ambivalent | ambivalente | ambivalent | ambivalente
      tenacious | hartnäckig | tenaz | tenace | tenace
      indispensable | unentbehrlich | imprescindible | indispensable | indispensabile
      eloquent (speaker) | redegewandt | facundo | disert | facondo
      candid | offenherzig | franco | franc | schietto
      conspicuous | auffällig | llamativo | voyant | vistoso
      elusive | schwer fassbar | escurridizo | insaisissable | sfuggente
      ephemeral | vergänglich | efímero | éphémère | effimero
      exemplary | vorbildlich | ejemplar | exemplaire | esemplare
      fastidious | pingelig | quisquilloso | pointilleux | pignolo
      frivolous | leichtfertig | frívolo | frivole | frivolo
      gregarious | kontaktfreudig | gregario | grégaire | gregario
      impeccable | tadellos | impecable | impeccable | impeccabile
      incessant | unaufhörlich | incesante | incessant | incessante
      indifferent | gleichgültig | indiferente | indifférent | indifferente
      intricate | verwickelt | intrincado | complexe (enchevêtré) | intricato
      lucid | klar (scharfsinnig) | lúcido | lucide | lucido
      magnanimous | großmütig | magnánimo | magnanime | magnanimo
      mundane | alltäglich | mundano | banal (quotidien) | ordinario
      nonchalant | lässig | despreocupado | nonchalant | disinvolto
      obstinate | halsstarrig | obstinado | obstiné | ostinato
      paramount | von höchster Bedeutung | primordial | primordial | fondamentale
      pervasive | durchdringend | generalizado | omniprésent (diffus) | pervasivo
      precarious | prekär | precario | précaire | precario
      prolific | produktiv (fruchtbar) | prolífico | prolifique | prolifico
      prudent | umsichtig | prudente | prudent (avisé) | assennato
      resilient | widerstandsfähig | resiliente | résilient | resiliente
      scrupulous | gewissenhaft | escrupuloso | scrupuleux | scrupoloso
      spurious | unecht | espurio | fallacieux | spurio
      succinct | knapp | sucinto | succinct | succinto
      tangible | greifbar | tangible | tangible | tangibile
      unequivocal | unmissverständlich | inequívoco | sans équivoque | inequivocabile
      venerable | ehrwürdig | venerable | vénérable | venerabile
      whimsical | verschroben | caprichoso | fantasque | stravagante
      zealous | eifrig | celoso (entusiasta) | zélé | zelante
      austere | streng (schlicht) | austero | austère | austero
      benevolent | wohlwollend | benévolo | bienveillant (généreux) | benevolo
      cynical | zynisch | cínico | cynique | cinico
      discreet | diskret | discreto | discret | discreto
      erratic | sprunghaft | errático | imprévisible | incostante
      futile | vergeblich | inútil | futile (vain) | futile
      imminent | unmittelbar bevorstehend | inminente | imminent | imminente
      inconspicuous | unauffällig | discreto (poco visible) | discret (peu visible) | poco appariscente
      ostentatious | protzig | ostentoso | ostentatoire | ostentato
      pertinent | treffend | atinado | pertinent (judicieux) | pertinente
      sceptical | skeptisch | escéptico | sceptique | scettico
      volatile (person) | unberechenbar | voluble | versatile | volubile
    `,
  },
];
