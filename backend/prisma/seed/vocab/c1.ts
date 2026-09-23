import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** C1 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_C1: VocabCategorySeed[] = [
  {
    key: 'c1-law',
    level: CefrLevel.C1,
    icon: '⚖️',
    titles: {
      en: 'Law & Justice',
      de: 'Recht & Justiz',
      es: 'Derecho y justicia',
      fr: 'Droit et justice',
      it: 'Diritto e giustizia',
    },
    words: `
      justice | die Gerechtigkeit | la justicia | la justice | la giustizia
      court | das Gericht | el tribunal | le tribunal | il tribunale
      judge | der Richter | el juez | le juge | il giudice
      lawyer (court) | der Rechtsanwalt | el letrado | l'avocat (plaidant) | il legale
      prosecutor | der Staatsanwalt | el fiscal | le procureur | il pubblico ministero
      defendant | der Angeklagte | el acusado | l'accusé | l'imputato
      witness | der Zeuge | el testigo | le témoin | il testimone
      trial | der Prozess | el juicio | le procès | il processo
      verdict | das Urteil | el veredicto | le verdict | il verdetto
      sentence | die Strafe | la condena | la peine | la condanna
      crime | das Verbrechen | el delito | le crime | il reato
      criminal | der Verbrecher | el delincuente | le criminel | il criminale
      victim | das Opfer | la víctima | la victime | la vittima
      suspect | der Verdächtige | el sospechoso | le suspect | il sospettato
      prison | das Gefängnis | la cárcel | la prison | il carcere
      fine (penalty) | die Geldstrafe | la multa | l'amende | la multa
      theft | der Diebstahl | el robo | le vol (délit) | il furto
      fraud | der Betrug | el fraude | la fraude | la frode
      murder | der Mord | el asesinato | le meurtre | l'omicidio
      investigation | die Ermittlung | la investigación policial | l'enquête | l'indagine
      lawsuit | die Klage | la demanda judicial | le procès civil | la causa civile
      appeal | die Berufung | la apelación | l'appel | il ricorso
      constitution | die Verfassung | la constitución | la constitution | la costituzione
      regulation | die Vorschrift | la normativa | la réglementation | la normativa
      liability | die Haftung | la responsabilidad legal | la responsabilité civile | la responsabilità civile
      evidence (court) | das Beweismittel | las pruebas | les pièces à conviction | le prove
      alibi | das Alibi | la coartada | l'alibi | l'alibi
      guilty | schuldig | culpable | coupable | colpevole
      innocent | unschuldig | inocente | innocent | innocente
      legal | legal | legal | légal | legale
      illegal | illegal | ilegal | illégal | illegale
      binding | verbindlich | vinculante | contraignant | vincolante
      to accuse | beschuldigen | acusar | accuser | accusare
      to sue | verklagen | demandar | poursuivre en justice | fare causa
      to arrest | verhaften | detener | arrêter | arrestare
      to convict | verurteilen | condenar | condamner | condannare
      to acquit | freisprechen | absolver | acquitter | assolvere
      to commit (a crime) | begehen | cometer | commettre | commettere
      to steal | stehlen | robar | voler (dérober) | rubare
      to testify | aussagen | testificar | témoigner | testimoniare
      to investigate | ermitteln | investigar (delito) | enquêter | indagare
      to punish | bestrafen | castigar | punir | punire
      to violate | verstoßen gegen | infringir | enfreindre | violare
      to comply with | einhalten | cumplir | respecter | rispettare
      to appeal | Berufung einlegen | apelar | faire appel | ricorrere in appello
      to release | freilassen | liberar | libérer | rilasciare
      to bribe | bestechen | sobornar | corrompre | corrompere
      to plead guilty | sich schuldig bekennen | declararse culpable | plaider coupable | dichiararsi colpevole
      to enforce | durchsetzen | hacer cumplir | faire appliquer | far rispettare
      to rule (court) | entscheiden (Gericht) | fallar | statuer | sentenziare
    `,
  },
  {
    key: 'c1-globalisation',
    level: CefrLevel.C1,
    icon: '🌐',
    titles: {
      en: 'Migration & Globalisation',
      de: 'Migration & Globalisierung',
      es: 'Migración y globalización',
      fr: 'Migration et mondialisation',
      it: 'Migrazione e globalizzazione',
    },
    words: `
      globalisation | die Globalisierung | la globalización | la mondialisation | la globalizzazione
      migration | die Migration | la migración | la migration | la migrazione
      emigration | die Auswanderung | la emigración | l'émigration | l'emigrazione
      asylum | das Asyl | el asilo | l'asile | l'asilo politico
      residence permit | die Aufenthaltsgenehmigung | el permiso de residencia | le titre de séjour | il permesso di soggiorno
      citizenship | die Staatsbürgerschaft | la ciudadanía | la citoyenneté | la cittadinanza
      nationality | die Staatsangehörigkeit | la nacionalidad | la nationalité | la nazionalità
      homeland | die Heimat | la patria | la patrie | la patria
      diversity | die Vielfalt | la diversidad | la diversité | la diversità
      identity | die Identität | la identidad | l'identité | l'identità
      prejudice | das Vorurteil | el prejuicio | le préjugé | il pregiudizio
      racism | der Rassismus | el racismo | le racisme | il razzismo
      tolerance | die Toleranz | la tolerancia | la tolérance | la tolleranza
      multiculturalism | der Multikulturalismus | el multiculturalismo | le multiculturalisme | il multiculturalismo
      host country | das Aufnahmeland | el país de acogida | le pays d'accueil | il paese ospitante
      country of origin | das Herkunftsland | el país de origen | le pays d'origine | il paese d'origine
      labour market | der Arbeitsmarkt | el mercado laboral | le marché du travail | il mercato del lavoro
      skilled worker | die Fachkraft | el trabajador cualificado | le travailleur qualifié | il lavoratore qualificato
      brain drain | die Abwanderung von Fachkräften | la fuga de cerebros | la fuite des cerveaux | la fuga di cervelli
      inequality | die Ungleichheit | la desigualdad | l'inégalité | la disuguaglianza
      developing country | das Entwicklungsland | el país en vías de desarrollo | le pays en développement | il paese in via di sviluppo
      development aid | die Entwicklungshilfe | la ayuda al desarrollo | l'aide au développement | l'aiuto allo sviluppo
      supply chain | die Lieferkette | la cadena de suministro | la chaîne d'approvisionnement | la catena di approvvigionamento
      multinational | der Konzern | la multinacional | la multinationale | la multinazionale
      free trade | der Freihandel | el libre comercio | le libre-échange | il libero scambio
      tariff | der Zoll | el arancel | le droit de douane | il dazio
      exploitation | die Ausbeutung | la explotación | l'exploitation | lo sfruttamento
      interdependence | die gegenseitige Abhängigkeit | la interdependencia | l'interdépendance | l'interdipendenza
      xenophobia | die Fremdenfeindlichkeit | la xenofobia | la xénophobie | la xenofobia
      assimilation | die Assimilation | la asimilación | l'assimilation | l'assimilazione
      cross-border | grenzüberschreitend | transfronterizo | transfrontalier | transfrontaliero
      undocumented | ohne Papiere | indocumentado | sans papiers | senza documenti
      cosmopolitan | weltoffen | cosmopolita | cosmopolite | cosmopolita
      indigenous | indigen | indígena | autochtone | indigeno
      multilingual | mehrsprachig | plurilingüe | multilingue | multilingue
      to emigrate | auswandern | emigrar | émigrer | emigrare
      to immigrate | einwandern | inmigrar | immigrer | immigrare
      to flee | fliehen | huir | fuir | fuggire
      to seek asylum | Asyl beantragen | solicitar asilo | demander l'asile | chiedere asilo
      to integrate | integrieren | integrar | intégrer | integrare
      to deport | abschieben | deportar | expulser | espellere
      to exploit | ausbeuten | explotar | exploiter | sfruttare
      to outsource | auslagern | externalizar | externaliser | esternalizzare
      to relocate | verlagern | trasladar | délocaliser | delocalizzare
      to settle | sich niederlassen | establecerse | s'installer | stabilirsi
      to adapt (culture) | sich eingewöhnen | aclimatarse | s'acclimater | ambientarsi
      to naturalise | einbürgern | naturalizar | naturaliser | naturalizzare
      to welcome | aufnehmen | acoger | accueillir | accogliere
      to overcome | überwinden | superar | surmonter | superare (ostacoli)
      to belong | dazugehören | pertenecer | appartenir | appartenere
    `,
  },
  {
    key: 'c1-mind',
    level: CefrLevel.C1,
    icon: '🧩',
    titles: {
      en: 'Mind & Psychology',
      de: 'Geist & Psychologie',
      es: 'Mente y psicología',
      fr: 'Esprit et psychologie',
      it: 'Mente e psicologia',
    },
    words: `
      mind | der Verstand | la mente | l'esprit | la mente
      consciousness | das Bewusstsein | la conciencia | la conscience | la coscienza
      subconscious | das Unterbewusstsein | el subconsciente | le subconscient | il subconscio
      perception | die Wahrnehmung | la percepción | la perception | la percezione
      emotion | die Emotion | la emoción | l'émotion | l'emozione
      motivation | die Motivation | la motivación | la motivation | la motivazione
      anxiety | die Angststörung | la ansiedad | l'anxiété | l'ansia
      trauma | das Trauma | el trauma | le traumatisme | il trauma
      self-esteem | das Selbstwertgefühl | la autoestima | l'estime de soi | l'autostima
      habit | die Gewohnheit | el hábito | l'habitude | l'abitudine
      instinct | der Instinkt | el instinto | l'instinct | l'istinto
      intuition | die Intuition | la intuición | l'intuition | l'intuizione
      memory (ability) | das Gedächtnis | la memoria | la mémoire | la memoria
      concentration | die Konzentration | la concentración | la concentration | la concentrazione
      burnout | das Burn-out | el agotamiento profesional | l'épuisement professionnel | il burnout
      resilience | die Resilienz | la resiliencia | la résilience | la resilienza
      empathy | die Empathie | la empatía | l'empathie | l'empatia
      frustration | die Frustration | la frustración | la frustration | la frustrazione
      guilt | die Schuld (Gefühl) | la culpa | la culpabilité | il senso di colpa
      shame | die Scham | la vergüenza | la honte | la vergogna
      grief | die Trauer | el duelo | le deuil | il lutto
      relief | die Erleichterung | el alivio | le soulagement | il sollievo
      envy | der Neid | la envidia | l'envie | l'invidia
      curiosity | die Neugier | la curiosidad | la curiosité | la curiosità
      willpower | die Willenskraft | la fuerza de voluntad | la volonté | la forza di volontà
      coping strategy | die Bewältigungsstrategie | la estrategia de afrontamiento | la stratégie d'adaptation | la strategia di coping
      psychologist | der Psychologe | el psicólogo | le psychologue | lo psicologo
      counselling | die Beratung | el asesoramiento | l'accompagnement psychologique | la consulenza psicologica
      overwhelmed | überfordert | abrumado | débordé | sopraffatto
      anxious | ängstlich (besorgt) | ansioso | anxieux | ansioso
      irritable | reizbar | irritable | irritable | irritabile
      insecure | unsicher | inseguro | peu sûr de soi | insicuro
      balanced | ausgeglichen | equilibrado | équilibré | equilibrato
      aware | bewusst | consciente | conscient | consapevole
      unconscious (mind) | unbewusst | inconsciente (mente) | inconscient (psychique) | inconscio
      irrational | irrational | irracional | irrationnel | irrazionale
      to perceive | wahrnehmen | percibir | percevoir | percepire
      to cope with | bewältigen | afrontar | faire face à | affrontare
      to suppress | unterdrücken | reprimir | réprimer | reprimere
      to overcome (fear) | überwinden (Angst) | vencer (el miedo) | vaincre (la peur) | vincere (la paura)
      to motivate | motivieren | motivar | motiver | motivare
      to concentrate | sich konzentrieren | concentrarse | se concentrer | concentrarsi
      to worry | sich Sorgen machen | preocuparse | s'inquiéter | preoccuparsi
      to regret | bereuen | arrepentirse | regretter | pentirsi
      to envy | beneiden | envidiar | envier | invidiare
      to calm down | sich beruhigen | calmarse | se calmer | calmarsi
      to reflect | nachdenken | reflexionar | réfléchir | riflettere
      to be aware of | sich bewusst sein | ser consciente de | être conscient de | essere consapevole di
      to trigger | auslösen | desencadenar | déclencher | scatenare
      to relieve | lindern | aliviar | soulager | alleviare
    `,
  },
  {
    key: 'c1-management',
    level: CefrLevel.C1,
    icon: '📊',
    titles: {
      en: 'Management & Careers',
      de: 'Management & Karriere',
      es: 'Gestión y carrera',
      fr: 'Management et carrière',
      it: 'Management e carriera',
    },
    words: `
      management | die Unternehmensführung | la gestión | la gestion | la gestione
      leadership | die Führung | el liderazgo | le leadership | la leadership
      strategy | die Strategie | la estrategia | la stratégie | la strategia
      executive | die Führungskraft | el directivo | le cadre dirigeant | il dirigente
      board of directors | der Vorstand | el consejo de administración | le conseil d'administration | il consiglio di amministrazione
      headquarters | die Zentrale | la sede central | le siège social | la sede centrale
      branch | die Filiale | la sucursal | la succursale | la filiale
      merger | die Fusion | la fusión | la fusion | la fusione
      acquisition | die Übernahme | la adquisición | l'acquisition | l'acquisizione
      restructuring | die Umstrukturierung | la reestructuración | la restructuration | la ristrutturazione
      efficiency | die Effizienz | la eficiencia | l'efficacité | l'efficienza
      productivity | die Produktivität | la productividad | la productivité | la produttività
      performance (work) | die Leistung | el rendimiento | la performance | il rendimento
      feedback | die Rückmeldung | la retroalimentación | le retour | il feedback
      appraisal | die Leistungsbeurteilung | la evaluación del desempeño | l'entretien d'évaluation | la valutazione delle prestazioni
      benefits | die Zusatzleistungen | los beneficios sociales | les avantages sociaux | i benefit aziendali
      workforce | die Belegschaft | la plantilla | les effectifs | la forza lavoro
      recruitment | die Personalbeschaffung | la contratación | le recrutement | il reclutamento
      human resources | die Personalabteilung | los recursos humanos | les ressources humaines | le risorse umane
      networking | das Netzwerken | el networking | le réseautage | il networking
      milestone | der Meilenstein | el hito | l'étape clé | la pietra miliare
      priority | die Priorität | la prioridad | la priorité | la priorità
      risk | das Risiko | el riesgo | le risque | il rischio
      opportunity | die Chance | la oportunidad | l'occasion | l'opportunità
      challenge | die Herausforderung | el desafío | le défi | la sfida
      workload | die Arbeitsbelastung | la carga de trabajo | la charge de travail | il carico di lavoro
      work-life balance | die Work-Life-Balance | la conciliación laboral | l'équilibre vie pro-vie perso | l'equilibrio vita-lavoro
      remote work | die Telearbeit | el teletrabajo | le télétravail | il telelavoro
      qualified | qualifiziert | cualificado | qualifié | qualificato
      efficient | effizient | eficiente | efficace | efficiente
      competent | kompetent | competente | compétent | competente
      strategic | strategisch | estratégico | stratégique | strategico
      long-term | langfristig | a largo plazo | à long terme | a lungo termine
      short-term | kurzfristig | a corto plazo | à court terme | a breve termine
      to delegate | delegieren | delegar | déléguer | delegare
      to implement | umsetzen | implementar | mettre en œuvre | attuare
      to prioritise | priorisieren | priorizar | prioriser | dare priorità
      to lead (a team) | führen | liderar | mener | guidare (un team)
      to coordinate | koordinieren | coordinar | coordonner | coordinare
      to evaluate | bewerten | evaluar | évaluer | valutare
      to optimise | optimieren | optimizar | optimiser | ottimizzare
      to expand | expandieren | expandirse | se développer | espandersi
      to meet a deadline | eine Frist einhalten | cumplir un plazo | respecter un délai | rispettare una scadenza
      to take on | übernehmen | asumir | assumer | assumersi
      to make redundant | entlassen (betriebsbedingt) | despedir por reestructuración | licencier économiquement | licenziare per esubero
      to head | leiten (Abteilung) | encabezar | être à la tête de | essere a capo di
      to outperform | übertreffen | superar (rendimiento) | surpasser | superare (le prestazioni)
      to launch | auf den Markt bringen | lanzar al mercado | lancer | lanciare sul mercato
      to monitor | überwachen | supervisar | surveiller | monitorare
      to streamline | verschlanken | agilizar | rationaliser | snellire
    `,
  },
  {
    key: 'c1-ethics',
    level: CefrLevel.C1,
    icon: '🤔',
    titles: {
      en: 'Ethics & Philosophy',
      de: 'Ethik & Philosophie',
      es: 'Ética y filosofía',
      fr: 'Éthique et philosophie',
      it: 'Etica e filosofia',
    },
    words: `
      ethics | die Ethik | la ética | l'éthique | l'etica
      philosophy | die Philosophie | la filosofía | la philosophie | la filosofia
      morality | die Moral | la moralidad | la morale | la moralità
      value | der Wert | el valor | la valeur | il valore
      principle | das Prinzip | el principio | le principe | il principio
      belief | die Überzeugung | la creencia | la croyance | la convinzione
      conscience | das Gewissen | la conciencia moral | la conscience morale | la coscienza morale
      dignity | die Würde | la dignidad | la dignité | la dignità
      virtue | die Tugend | la virtud | la vertu | la virtù
      truth | die Wahrheit | la verdad | la vérité | la verità
      reality | die Wirklichkeit | la realidad | la réalité | la realtà
      existence | die Existenz | la existencia | l'existence | l'esistenza
      meaning | der Sinn | el sentido | le sens | il senso
      reason (faculty) | die Vernunft | la razón (facultad) | la raison (faculté) | la ragione (facoltà)
      free will | der freie Wille | el libre albedrío | le libre arbitre | il libero arbitrio
      responsibility (moral) | die moralische Verantwortung | la responsabilidad moral | la responsabilité morale | la responsabilità morale
      dilemma | das Dilemma | el dilema | le dilemme | il dilemma
      justice (moral) | die Fairness | la equidad | l'équité | l'equità
      happiness | das Glück | la felicidad | le bonheur | la felicità
      wisdom | die Weisheit | la sabiduría | la sagesse | la saggezza
      doubt | der Zweifel | la duda | le doute | il dubbio
      knowledge (philosophy) | die Erkenntnis | el saber | le savoir | il sapere
      thought | der Gedanke | el pensamiento | la pensée | il pensiero
      concept | der Begriff | el concepto | le concept | il concetto
      paradox | das Paradoxon | la paradoja | le paradoxe | il paradosso
      religion | die Religion | la religión | la religion | la religione
      faith | der Glaube | la fe | la foi | la fede
      soul | die Seele | el alma | l'âme | l'anima
      moral | moralisch | moral | moral | morale
      ethical | ethisch | ético | éthique | etico
      fair (ethical) | fair | ecuánime | équitable | imparziale
      absolute | absolut | absoluto | absolu | assoluto
      relative | relativ | relativo | relatif | relativo
      rational | rational | racional | rationnel | razionale
      abstract | abstrakt | abstracto | abstrait | astratto
      universal | universell | universal | universel | universale
      questionable (ethically) | bedenklich | dudoso | douteux | dubbio
      to believe | glauben | creer | croire | credere
      to question | hinterfragen | cuestionar | remettre en question | mettere in discussione
      to reason | schlussfolgern | razonar | raisonner | ragionare
      to judge | urteilen | juzgar | juger | giudicare
      to reflect on | reflektieren | reflexionar sobre | réfléchir à | riflettere su
      to exist | existieren | existir | exister | esistere
      to define | definieren | definir | définir | definire
      to distinguish | unterscheiden | distinguir | distinguer | distinguere
      to respect | respektieren | respetar | respecter (quelqu'un) | rispettare (qualcuno)
      to deserve | verdienen (zustehen) | merecer | mériter | meritare
      to condemn | verurteilen (moralisch) | condenar (moralmente) | condamner (moralement) | condannare (moralmente)
      to tolerate | tolerieren | tolerar | tolérer | tollerare
      to value | wertschätzen | valorar | valoriser | valorizzare
    `,
  },
  {
    key: 'c1-verbs',
    level: CefrLevel.C1,
    icon: '✍️',
    titles: {
      en: 'Precise Verbs',
      de: 'Präzise Verben',
      es: 'Verbos precisos',
      fr: 'Verbes précis',
      it: 'Verbi precisi',
    },
    words: `
      to acknowledge | anerkennen | reconocer | reconnaître | riconoscere
      to address (an issue) | ansprechen | abordar | aborder | affrontare (un tema)
      to anticipate | vorwegnehmen | anticipar | anticiper | anticipare
      to clarify | klarstellen | aclarar | clarifier | chiarire
      to contribute | beitragen | contribuir | contribuer | contribuire
      to convey | vermitteln | transmitir | transmettre | trasmettere (un messaggio)
      to derive | ableiten | derivar | dériver | derivare
      to determine | bestimmen | determinar | déterminer | determinare
      to diminish | verringern | disminuir (reducir) | amoindrir | ridurre
      to emerge | hervorgehen | surgir | émerger | emergere
      to encounter | begegnen | toparse con | rencontrer (par hasard) | imbattersi in
      to enhance | verbessern (steigern) | potenciar | renforcer | potenziare
      to ensure | sicherstellen | garantizar | garantir | garantire
      to establish | etablieren | establecer | établir | stabilire
      to evoke | hervorrufen | evocar | évoquer | evocare
      to exaggerate | übertreiben | exagerar | exagérer | esagerare
      to facilitate | erleichtern | facilitar | faciliter | facilitare
      to highlight | hervorheben | destacar | mettre en évidence | evidenziare
      to imply | andeuten | implicar | impliquer | implicare
      to indicate | hinweisen auf | indicar | indiquer | indicare
      to maintain | aufrechterhalten | mantener | maintenir | mantenere
      to neglect | vernachlässigen | descuidar | négliger | trascurare
      to obtain | erlangen | obtener | obtenir | ottenere
      to overlook | übersehen | pasar por alto | négliger (un détail) | trascurare (un dettaglio)
      to pursue | verfolgen | perseguir | poursuivre | perseguire
      to reinforce | verstärken | reforzar | consolider | rafforzare
      to reject | ablehnen | rechazar | rejeter | respingere
      to resolve | lösen (Konflikt) | resolver | résoudre | risolvere
      to restrict | einschränken | restringir | restreindre | limitare
      to reveal (show) | offenlegen | poner de manifiesto | dévoiler | svelare
      to strive | streben | esforzarse | s'efforcer | sforzarsi
      to undermine | untergraben | socavar | saper | minare
      to undertake | unternehmen | emprender | entreprendre | intraprendere
      to withdraw | zurückziehen | retirar | retirer | ritirare
      to yield | hervorbringen | producir (resultados) | produire (des résultats) | produrre (risultati)
      to accomplish | vollbringen | llevar a cabo | accomplir | portare a termine
      to allocate | zuweisen | asignar | attribuer | assegnare
      to assess | einschätzen | valorar (evaluar) | estimer | stimare
      to cease | aufhören | cesar | cesser | cessare
      to comprise | umfassen | comprender (abarcar) | comprendre (inclure) | comprendere
      to constitute | darstellen | constituir | constituer | costituire
      to deteriorate | sich verschlechtern | empeorar | se détériorer | peggiorare
      to embrace | begrüßen (annehmen) | acoger (una idea) | adopter (une idée) | abbracciare (un'idea)
      to foster | fördern | fomentar | favoriser | favorire
      to hinder | behindern | obstaculizar | entraver | ostacolare
      to justify (explain) | begründen | fundamentar | motiver (une décision) | motivare (una decisione)
      to outline | umreißen | esbozar | esquisser | delineare
      to prevail | sich durchsetzen | prevalecer | prévaloir | prevalere
      to refrain from | unterlassen | abstenerse de | s'abstenir de | astenersi da
      to underestimate | unterschätzen | subestimar | sous-estimer | sottovalutare
    `,
  },
  {
    key: 'c1-adjectives',
    level: CefrLevel.C1,
    icon: '🎯',
    titles: {
      en: 'Precise Adjectives',
      de: 'Präzise Adjektive',
      es: 'Adjetivos precisos',
      fr: 'Adjectifs précis',
      it: 'Aggettivi precisi',
    },
    words: `
      ambiguous | mehrdeutig | ambiguo | ambigu | ambiguo
      appropriate | angemessen | apropiado | approprié | appropriato
      arbitrary | willkürlich | arbitrario | arbitraire | arbitrario
      comprehensive | umfassend | exhaustivo | complet | esauriente
      considerable | beträchtlich | considerable | considérable | considerevole
      consistent | beständig | coherente | cohérent | coerente
      crucial | entscheidend | crucial | crucial | cruciale
      decisive | ausschlaggebend | decisivo | décisif | decisivo
      deliberate | absichtlich | deliberado | délibéré | deliberato
      distinct | deutlich | distinto | distinct | distinto
      elaborate | ausgefeilt | elaborado | élaboré | elaborato
      essential | wesentlich | esencial | essentiel | essenziale
      evident | offenkundig | evidente | manifeste | evidente
      explicit | ausdrücklich | explícito | explicite | esplicito
      feasible | machbar | factible | faisable | fattibile
      inevitable | unvermeidlich | inevitable | inévitable | inevitabile
      inherent | innewohnend | inherente | inhérent | intrinseco
      legitimate | berechtigt | legítimo | légitime | legittimo
      marginal | geringfügig | marginal | marginal | marginale
      notable | bemerkenswert | notable | notable | notevole
      obsolete | veraltet | obsoleto | obsolète | obsoleto
      plausible | plausibel | plausible | plausible | plausibile
      precise | präzise | preciso (exacto) | précis (exact) | preciso
      predominant | vorherrschend | predominante | prédominant | predominante
      profound | tiefgreifend | profundo | profond | profondo
      prominent | prominent | destacado | éminent | prominente
      reluctant | widerwillig | reacio | réticent | riluttante
      remarkable | außergewöhnlich | extraordinario | remarquable | straordinario
      rigorous | streng | riguroso | rigoureux | rigoroso
      significant | bedeutend | significativo | significatif | significativo
      subtle | subtil | sutil | subtil | sottile
      sufficient | ausreichend | suficiente (bastante) | suffisant | sufficiente
      superficial | oberflächlich | superficial | superficiel | superficiale
      tentative | vorläufig | provisional | provisoire | provvisorio
      thorough | gründlich | minucioso | minutieux | accurato (minuzioso)
      transparent | transparent | transparente | transparent | trasparente
      trivial | belanglos | trivial | insignifiant | banale
      unprecedented | beispiellos | sin precedentes | sans précédent | senza precedenti
      valid | gültig | válido | valable | valido
      vague | vage | vago | vague | vago
      vulnerable | verletzlich | vulnerable | vulnérable | vulnerabile
      adequate | hinreichend | adecuado | adéquat | adeguato
      coherent | schlüssig | coherente (lógico) | logique (cohérent) | logico
      comparable | vergleichbar | comparable | comparable | paragonabile
      controversial (issue) | kontrovers | controvertido | polémique | polemico
      diverse | vielfältig | diverso | varié | vario
      flawed | fehlerhaft | defectuoso | défectueux | difettoso
      genuine | echt | auténtico | authentique | autentico
      implicit | implizit | implícito | implicite | implicito
      sophisticated | anspruchsvoll | sofisticado | sophistiqué | sofisticato
    `,
  },
  {
    key: 'c1-concepts',
    level: CefrLevel.C1,
    icon: '💡',
    titles: {
      en: 'Abstract Concepts',
      de: 'Abstrakte Begriffe',
      es: 'Conceptos abstractos',
      fr: 'Concepts abstraits',
      it: 'Concetti astratti',
    },
    words: `
      approach | der Ansatz | el enfoque | l'approche | l'approccio
      assumption | die Annahme | la suposición | l'hypothèse (supposition) | il presupposto
      awareness | das Bewusstsein (Kenntnis) | la concienciación | la prise de conscience | la consapevolezza
      circumstance | der Umstand | la circunstancia | la circonstance | la circostanza
      coherence | der Zusammenhang | la coherencia | la cohérence | la coerenza
      commitment | das Engagement | el compromiso (dedicación) | l'engagement | l'impegno
      context | der Kontext | el contexto | le contexte | il contesto
      criterion | das Kriterium | el criterio | le critère | il criterio
      dimension | die Dimension | la dimensión | la dimension | la dimensione
      emphasis | der Schwerpunkt | el énfasis | l'accent (insistance) | l'enfasi
      extent | das Ausmaß | el alcance | l'ampleur | la portata
      framework | der Rahmen | el marco | le cadre | il quadro (di riferimento)
      implication | die Auswirkung | la implicación | l'implication | l'implicazione
      incentive | der Anreiz | el incentivo | l'incitation | l'incentivo
      insight | die Einsicht | la percepción profunda | l'aperçu | l'intuizione profonda
      intention | die Absicht | la intención | l'intention | l'intenzione
      notion | die Vorstellung | la noción | la notion | la nozione
      obstacle | das Hindernis | el obstáculo | l'obstacle | l'ostacolo
      outcome | der Ausgang | el desenlace | l'issue | l'esito
      perspective | die Perspektive | la perspectiva | la perspective | la prospettiva
      phenomenon | das Phänomen | el fenómeno | le phénomène | il fenomeno
      potential | das Potenzial | el potencial | le potentiel | il potenziale
      premise | die Prämisse | la premisa | la prémisse | la premessa
      requirement | die Anforderung | el requisito | l'exigence | il requisito
      scope | der Umfang | el ámbito | la portée | l'ambito
      shift | die Verschiebung | el cambio (giro) | le changement (glissement) | lo spostamento
      stability | die Stabilität | la estabilidad | la stabilité | la stabilità
      tendency | die Tendenz | la tendencia | la tendance | la tendenza
      tension | die Spannung | la tensión | la tension | la tensione
      threshold | die Schwelle | el umbral | le seuil | la soglia
      transition | der Übergang | la transición | la transition | la transizione
      uncertainty | die Ungewissheit | la incertidumbre | l'incertitude | l'incertezza
      validity | die Gültigkeit | la validez | la validité | la validità
      variety | die Vielfalt (Auswahl) | la variedad | la variété | la varietà
      nuance | die Nuance | el matiz | la nuance | la sfumatura
      priority (concept) | der Vorrang | la primacía | la primauté | il primato
      trend | der Trend | la moda (tendencia) | la mode (tendance) | la moda
      balance | das Gleichgewicht | el equilibrio | l'équilibre | l'equilibrio
      contradiction | der Widerspruch | la contradicción | la contradiction | la contraddizione
      correlation | die Korrelation | la correlación | la corrélation | la correlazione
      distinction | die Unterscheidung | la distinción | la distinction | la distinzione
      element | das Element | el elemento | l'élément | l'elemento
      essence | das Wesen | la esencia | l'essence | l'essenza
      factor | der Faktor | el factor | le facteur | il fattore
      function | die Funktion | la función | la fonction | la funzione
      impact | die Wirkung | el impacto | l'impact | l'impatto
      interaction | die Wechselwirkung | la interacción | l'interaction | l'interazione
      objective (aim) | die Zielsetzung | la meta | le but (objectif) | lo scopo
      process | der Prozess (Ablauf) | el proceso | le processus | il processo (sviluppo)
      structure | die Struktur | la estructura | la structure | la struttura
    `,
  },
];
