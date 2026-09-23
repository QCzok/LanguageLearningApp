import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** B2 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_B2: VocabCategorySeed[] = [
  {
    key: 'b2-politics',
    level: CefrLevel.B2,
    icon: '🏛️',
    titles: {
      en: 'Politics & Society',
      de: 'Politik & Gesellschaft',
      es: 'Política y sociedad',
      fr: 'Politique et société',
      it: 'Politica e società',
    },
    words: `
      society | die Gesellschaft | la sociedad | la société | la società
      government | die Regierung | el gobierno | le gouvernement | il governo
      election | die Wahl | las elecciones | l'élection | le elezioni
      vote | die Stimme | el voto | la voix | il voto
      party (political) | die Partei | el partido político | le parti | il partito
      parliament | das Parlament | el parlamento | le parlement | il parlamento
      democracy | die Demokratie | la democracia | la démocratie | la democrazia
      law | das Gesetz | la ley | la loi | la legge
      citizen | der Bürger | el ciudadano | le citoyen | il cittadino
      rights | die Rechte | los derechos | les droits | i diritti
      freedom | die Freiheit | la libertad | la liberté | la libertà
      equality | die Gleichberechtigung | la igualdad | l'égalité | l'uguaglianza
      minister | der Minister | el ministro | le ministre | il ministro
      president | der Präsident | el presidente | le président | il presidente
      mayor | der Bürgermeister | el alcalde | le maire | il sindaco
      state | der Staat | el estado | l'État | lo Stato
      tax | die Steuer | el impuesto | l'impôt | la tassa
      opposition | die Opposition | la oposición | l'opposition | l'opposizione
      campaign | der Wahlkampf | la campaña electoral | la campagne électorale | la campagna elettorale
      demonstration | die Demonstration | la manifestación | la manifestation | la manifestazione
      protest | der Protest | la protesta | la protestation | la protesta
      poverty | die Armut | la pobreza | la pauvreté | la povertà
      wealth | der Reichtum | la riqueza | la richesse | la ricchezza
      unemployment | die Arbeitslosigkeit | el desempleo | le chômage | la disoccupazione
      immigration | die Einwanderung | la inmigración | l'immigration | l'immigrazione
      refugee | der Flüchtling | el refugiado | le réfugié | il rifugiato
      integration | die Integration | la integración | l'intégration | l'integrazione
      discrimination | die Diskriminierung | la discriminación | la discrimination | la discriminazione
      reform | die Reform | la reforma | la réforme | la riforma
      debate | die Debatte | el debate | le débat | il dibattito
      majority | die Mehrheit | la mayoría | la majorité | la maggioranza
      minority | die Minderheit | la minoría | la minorité | la minoranza
      public | öffentlich | público | public | pubblico
      political | politisch | político | politique | politico
      social | sozial | social | social | sociale
      fair | gerecht | justo | juste | equo
      conservative | konservativ | conservador | conservateur | conservatore
      progressive | fortschrittlich | progresista | progressiste | progressista
      to vote | wählen | votar | voter | votare
      to govern | regieren | gobernar | gouverner | governare
      to elect | wählen (jemanden) | elegir (en elecciones) | élire | eleggere
      to demonstrate | demonstrieren | manifestarse | manifester | manifestare
      to support (a cause) | unterstützen | apoyar | soutenir | sostenere
      to oppose | sich widersetzen | oponerse | s'opposer | opporsi
      to decide | entscheiden | decidir | décider | decidere
      to abolish | abschaffen | abolir | abolir | abolire
      to introduce (a law) | einführen | introducir | introduire | introdurre
      to represent | vertreten | representar | représenter | rappresentare
      to influence | beeinflussen | influir | influencer | influenzare
      to criticise | kritisieren | criticar | critiquer | criticare
    `,
  },
  {
    key: 'b2-economy',
    level: CefrLevel.B2,
    icon: '📈',
    titles: {
      en: 'Economy & Business',
      de: 'Wirtschaft & Handel',
      es: 'Economía y negocios',
      fr: 'Économie et affaires',
      it: 'Economia e affari',
    },
    words: `
      economy | die Wirtschaft | la economía | l'économie | l'economia
      market (economy) | der Markt (Wirtschaft) | el mercado económico | le marché économique | il mercato economico
      trade | der Handel | el comercio | le commerce | il commercio
      business | das Geschäft (Handel) | el negocio | les affaires | gli affari
      industry | die Industrie | la industria | l'industrie | l'industria
      product | das Produkt | el producto | le produit | il prodotto
      service | die Dienstleistung | el servicio | le service (prestation) | il servizio
      demand | die Nachfrage | la demanda | la demande | la domanda (economica)
      supply | das Angebot (Wirtschaft) | la oferta (economía) | l'offre (économie) | l'offerta (economia)
      profit | der Gewinn | el beneficio | le bénéfice | il profitto
      loss | der Verlust | la pérdida | la perte | la perdita
      turnover | der Umsatz | la facturación | le chiffre d'affaires | il fatturato
      costs | die Kosten | los costes | les coûts | i costi
      investment | die Investition | la inversión | l'investissement | l'investimento
      loan | der Kredit | el préstamo | le prêt | il prestito
      debt | die Schulden | la deuda | la dette | il debito
      interest | die Zinsen | los intereses | les intérêts | gli interessi
      inflation | die Inflation | la inflación | l'inflation | l'inflazione
      growth | das Wachstum | el crecimiento | la croissance | la crescita
      crisis | die Krise | la crisis | la crise | la crisi
      competition (market) | die Konkurrenz | la competencia | la concurrence | la concorrenza
      competitor | der Konkurrent | el competidor | le concurrent | il concorrente
      consumer | der Verbraucher | el consumidor | le consommateur | il consumatore
      supplier | der Lieferant | el proveedor | le fournisseur | il fornitore
      shareholder | der Aktionär | el accionista | l'actionnaire | l'azionista
      share | die Aktie | la acción | l'action | l'azione
      stock exchange | die Börse | la bolsa de valores | la Bourse | la Borsa
      export | der Export | la exportación | l'exportation | l'esportazione
      import | der Import | la importación | l'importation | l'importazione
      budget | das Budget | el presupuesto | le budget | il bilancio
      contract (business) | der Geschäftsvertrag | el contrato comercial | le contrat commercial | il contratto commerciale
      advertising | die Werbung | la publicidad | la publicité | la pubblicità
      brand (business) | die Handelsmarke | la marca comercial | la marque commerciale | il marchio
      start-up | das Start-up | la empresa emergente | la start-up | la start-up
      economic | wirtschaftlich | económico (de economía) | économique | economico (dell'economia)
      profitable | rentabel | rentable | rentable | redditizio
      financial | finanziell | financiero | financier | finanziario
      global | global | global | mondial | globale
      to invest | investieren | invertir | investir | investire
      to produce | herstellen | producir | produire | produrre
      to export | exportieren | exportar | exporter | esportare
      to import | importieren | importar | importer | importare
      to grow (economy) | wachsen (Wirtschaft) | crecer (economía) | croître | crescere (economia)
      to increase | steigern | aumentar | augmenter | aumentare
      to decrease | sinken | disminuir | diminuer | diminuire
      to borrow | leihen (sich) | pedir prestado | emprunter | prendere in prestito
      to lend | verleihen | prestar | prêter | prestare
      to afford | sich leisten | permitirse | se permettre | permettersi
      to go bankrupt | pleitegehen | quebrar | faire faillite | fallire
      to compete | konkurrieren | competir | concurrencer | competere
    `,
  },
  {
    key: 'b2-science',
    level: CefrLevel.B2,
    icon: '🔬',
    titles: {
      en: 'Science & Research',
      de: 'Wissenschaft & Forschung',
      es: 'Ciencia e investigación',
      fr: 'Science et recherche',
      it: 'Scienza e ricerca',
    },
    words: `
      science | die Wissenschaft | la ciencia | la science | la scienza
      scientist | der Wissenschaftler | el científico | le scientifique | lo scienziato
      research (field) | die Forschung (Gebiet) | la investigación científica | la recherche scientifique | la ricerca scientifica
      experiment | das Experiment | el experimento | l'expérience | l'esperimento
      laboratory | das Labor | el laboratorio | le laboratoire | il laboratorio
      theory | die Theorie | la teoría | la théorie | la teoria
      hypothesis | die Hypothese | la hipótesis | l'hypothèse | l'ipotesi
      evidence | der Beweis | la prueba | la preuve | la prova
      discovery | die Entdeckung | el descubrimiento | la découverte | la scoperta
      invention | die Erfindung | el invento | l'invention | l'invenzione
      study | die Studie | el estudio | l'étude | lo studio
      analysis | die Analyse | el análisis | l'analyse | l'analisi
      method | die Methode | el método | la méthode | il metodo
      data (research) | die Messdaten | los datos científicos | les données scientifiques | i dati scientifici
      measurement | die Messung | la medición | la mesure | la misurazione
      result (research) | das Forschungsergebnis | el hallazgo | le résultat de recherche | il risultato della ricerca
      conclusion | die Schlussfolgerung | la conclusión | la conclusion | la conclusione
      physics | die Physik | la física | la physique | la fisica
      chemistry | die Chemie | la química | la chimie | la chimica
      biology | die Biologie | la biología | la biologie | la biologia
      mathematics | die Mathematik | las matemáticas | les mathématiques | la matematica
      cell | die Zelle | la célula | la cellule | la cellula
      atom | das Atom | el átomo | l'atome | l'atomo
      molecule | das Molekül | la molécula | la molécule | la molecola
      gene | das Gen | el gen | le gène | il gene
      evolution | die Evolution | la evolución | l'évolution | l'evoluzione
      universe | das Universum | el universo | l'univers | l'universo
      space | der Weltraum | el espacio | l'espace | lo spazio
      gravity | die Schwerkraft | la gravedad | la gravité | la gravità
      microscope | das Mikroskop | el microscopio | le microscope | il microscopio
      sample | die Probe | la muestra | l'échantillon | il campione
      progress | der Fortschritt | el progreso | le progrès | il progresso
      scientific | wissenschaftlich | científico (adj.) | scientifique (adj.) | scientifico
      accurate | genau | preciso | précis | accurato
      reliable (data) | verlässlich | fiable (datos) | fiable (données) | attendibile
      complex | komplex | complejo | complexe | complesso
      to research | forschen | investigar | faire des recherches | fare ricerca
      to discover | entdecken | descubrir | découvrir | scoprire
      to invent | erfinden | inventar | inventer | inventare
      to prove | beweisen | demostrar | prouver | dimostrare
      to test | testen | probar (experimento) | tester | testare
      to measure | messen | medir | mesurer | misurare
      to observe | beobachten | observar | observer | osservare
      to analyse | analysieren | analizar | analyser | analizzare
      to calculate | berechnen | calcular | calculer | calcolare
      to develop | entwickeln | desarrollar | développer | sviluppare
      to publish | veröffentlichen | publicar (estudio) | publier (une étude) | pubblicare (uno studio)
      to predict | vorhersagen | predecir | prédire | prevedere
      to examine | untersuchen | examinar | examiner | esaminare
      to confirm | bestätigen | confirmar | confirmer | confermare
    `,
  },
  {
    key: 'b2-media',
    level: CefrLevel.B2,
    icon: '📰',
    titles: {
      en: 'News & Media',
      de: 'Nachrichten & Medien',
      es: 'Noticias y medios',
      fr: 'Actualités et médias',
      it: 'Notizie e media',
    },
    words: `
      media | die Medien | los medios de comunicación | les médias | i media
      news | die Nachrichten | las noticias | les informations | le notizie
      article | der Artikel | el artículo | l'article | l'articolo
      headline | die Schlagzeile | el titular | le gros titre | il titolo (di giornale)
      press | die Presse | la prensa | la presse | la stampa
      reporter | der Reporter | el reportero | le reporter | il cronista
      editor | der Redakteur | el redactor | le rédacteur | il redattore
      interview | das Interview | la entrevista | l'interview | l'intervista
      source | die Quelle | la fuente | la source | la fonte
      broadcast | die Sendung | la emisión | l'émission | la trasmissione
      channel | der Sender | el canal | la chaîne | il canale
      radio | das Radio | la radio | la radio | la radio
      documentary | der Dokumentarfilm | el documental | le documentaire | il documentario
      advertisement | die Werbeanzeige | el anuncio publicitario | la publicité (annonce) | l'inserzione pubblicitaria
      audience | das Publikum | el público | le public | il pubblico
      viewer | der Zuschauer | el espectador | le téléspectateur | lo spettatore
      reader | der Leser | el lector | le lecteur | il lettore
      opinion | die Meinung | la opinión | l'opinion | l'opinione
      comment | der Kommentar | el comentario | le commentaire | il commento
      fake news | die Falschmeldung | la noticia falsa | les fausses informations | la notizia falsa
      censorship | die Zensur | la censura | la censure | la censura
      freedom of the press | die Pressefreiheit | la libertad de prensa | la liberté de la presse | la libertà di stampa
      influencer | der Influencer | el influencer | l'influenceur | l'influencer
      podcast | der Podcast | el pódcast | le podcast | il podcast
      subscription | das Abonnement | la suscripción | l'abonnement | l'abbonamento
      issue (edition) | die Ausgabe | el número (revista) | le numéro | il numero (rivista)
      front page | die Titelseite | la portada | la une | la prima pagina
      scandal | der Skandal | el escándalo | le scandale | lo scandalo
      event | das Ereignis | el acontecimiento | l'événement | l'evento
      report (news) | die Reportage | el reportaje | le reportage | il servizio
      current | aktuell | actual | actuel | attuale
      live | live | en directo | en direct | in diretta
      objective | objektiv | objetivo | objectif | oggettivo
      biased | voreingenommen | parcial | partial | di parte
      reliable (source) | seriös | fiable (fuente) | fiable (source) | affidabile (fonte)
      popular | beliebt | popular | populaire | popolare
      controversial | umstritten | polémico | controversé | controverso
      to report | berichten | informar | rapporter | riferire
      to broadcast | senden | emitir | diffuser | trasmettere
      to inform | informieren | informar (a alguien) | informer | informare
      to interview | interviewen | entrevistar | interviewer | intervistare
      to comment | kommentieren | comentar | commenter | commentare
      to subscribe | abonnieren | suscribirse | s'abonner | abbonarsi
      to spread | verbreiten | difundir | répandre | diffondere
      to check (facts) | überprüfen | verificar | vérifier | verificare
      to claim | behaupten | afirmar | affirmer | affermare
      to reveal | enthüllen | revelar | révéler | rivelare
      to announce | ankündigen | anunciar | annoncer | annunciare
      to quote | zitieren | citar | citer | citare
      to go viral | viral gehen | hacerse viral | devenir viral | diventare virale
    `,
  },
  {
    key: 'b2-culture',
    level: CefrLevel.B2,
    icon: '🎭',
    titles: {
      en: 'Art & Culture',
      de: 'Kunst & Kultur',
      es: 'Arte y cultura',
      fr: 'Art et culture',
      it: 'Arte e cultura',
    },
    words: `
      art | die Kunst | el arte | l'art | l'arte
      culture | die Kultur | la cultura | la culture | la cultura
      work of art | das Kunstwerk | la obra de arte | l'œuvre d'art | l'opera d'arte
      painter | der Maler | el pintor | le peintre | il pittore
      sculpture | die Skulptur | la escultura | la sculpture | la scultura
      gallery | die Galerie | la galería | la galerie | la galleria
      exhibition (art) | die Kunstausstellung | la exposición de arte | l'exposition d'art | la mostra d'arte
      literature | die Literatur | la literatura | la littérature | la letteratura
      novel | der Roman | la novela | le roman | il romanzo
      poem | das Gedicht | el poema | le poème | la poesia
      poet | der Dichter | el poeta | le poète | il poeta
      author | der Autor | el autor | l'auteur | l'autore
      character | die Figur | el personaje | le personnage | il personaggio
      plot | die Handlung | la trama | l'intrigue | la trama
      stage | die Bühne | el escenario | la scène | il palcoscenico
      actor | der Schauspieler | el actor | l'acteur | l'attore
      director | der Regisseur | el director | le réalisateur | il regista
      performance | die Aufführung | la actuación | la représentation | lo spettacolo
      audience (theatre) | die Zuschauer | los espectadores | les spectateurs | gli spettatori
      applause | der Beifall | el aplauso | les applaudissements | l'applauso
      orchestra | das Orchester | la orquesta | l'orchestre | l'orchestra
      opera | die Oper | la ópera | l'opéra | l'opera lirica
      musician | der Musiker | el músico | le musicien | il musicista
      composer | der Komponist | el compositor | le compositeur | il compositore
      festival | das Festival | el festival | le festival | il festival
      tradition | die Tradition | la tradición | la tradition | la tradizione
      custom | der Brauch | la costumbre | la coutume | l'usanza
      heritage | das Erbe | el patrimonio | le patrimoine | il patrimonio
      architecture | die Architektur | la arquitectura | l'architecture | l'architettura
      masterpiece | das Meisterwerk | la obra maestra | le chef-d'œuvre | il capolavoro
      style | der Stil | el estilo | le style | lo stile
      creativity | die Kreativität | la creatividad | la créativité | la creatività
      artistic | künstlerisch | artístico | artistique | artistico
      creative | kreativ | creativo | créatif | creativo
      classical | klassisch | clásico | classique | classico
      contemporary | zeitgenössisch | contemporáneo | contemporain | contemporaneo
      impressive | beeindruckend | impresionante | impressionnant | impressionante
      moving | bewegend | conmovedor | émouvant | commovente
      to perform | aufführen | representar (obra) | jouer (une pièce) | esibirsi
      to create | erschaffen | crear | créer | creare
      to compose | komponieren | componer | composer | comporre
      to exhibit | ausstellen | exponer | exposer | esporre
      to admire | bewundern | admirar | admirer | ammirare
      to interpret | interpretieren | interpretar | interpréter | interpretare
      to express | ausdrücken | expresar | exprimer | esprimere
      to inspire | inspirieren | inspirar | inspirer | ispirare
      to review | rezensieren | reseñar | faire la critique | recensire
      to rehearse | proben | ensayar | répéter (théâtre) | provare (a teatro)
      to preserve | bewahren | conservar | préserver | preservare
      to appreciate | schätzen | apreciar | apprécier | apprezzare
    `,
  },
  {
    key: 'b2-personality',
    level: CefrLevel.B2,
    icon: '🧠',
    titles: {
      en: 'Personality & Character',
      de: 'Persönlichkeit & Charakter',
      es: 'Personalidad y carácter',
      fr: 'Personnalité et caractère',
      it: 'Personalità e carattere',
    },
    words: `
      personality | die Persönlichkeit | la personalidad | la personnalité | la personalità
      character (personality) | der Charakter | el carácter | le caractère | il carattere
      trait | die Eigenschaft | el rasgo | le trait | il tratto
      strength | die Stärke | el punto fuerte | le point fort | il punto di forza
      weakness | die Schwäche | la debilidad | la faiblesse | la debolezza
      confidence | das Selbstvertrauen | la confianza en uno mismo | la confiance en soi | la fiducia in se stessi
      ambition | der Ehrgeiz | la ambición | l'ambition | l'ambizione
      humour | der Humor | el humor | l'humour | l'umorismo
      patience | die Geduld | la paciencia | la patience | la pazienza
      behaviour | das Verhalten | el comportamiento | le comportement | il comportamento
      attitude | die Einstellung | la actitud | l'attitude | l'atteggiamento
      mood | die Stimmung | el estado de ánimo | l'humeur | l'umore
      self-confident | selbstbewusst | seguro de sí mismo | sûr de soi | sicuro di sé
      ambitious | ehrgeizig | ambicioso | ambitieux | ambizioso
      sensitive | sensibel | sensible | sensible | sensibile
      stubborn | stur | terco | têtu | testardo
      open-minded | aufgeschlossen | de mente abierta | ouvert d'esprit | di mentalità aperta
      tolerant | tolerant | tolerante | tolérant | tollerante
      optimistic | optimistisch | optimista | optimiste | ottimista
      pessimistic | pessimistisch | pesimista | pessimiste | pessimista
      cheerful | fröhlich | alegre | joyeux | allegro
      moody | launisch | temperamental | lunatique | lunatico
      arrogant | arrogant | arrogante | arrogant | arrogante
      modest | bescheiden | modesto | modeste | modesto
      thoughtful | rücksichtsvoll | considerado | attentionné | premuroso
      careless | leichtsinnig | descuidado | négligent | sbadato
      careful | vorsichtig | cuidadoso | prudent | prudente
      brave | mutig | valiente | courageux | coraggioso
      cowardly | feige | cobarde | lâche | codardo
      sincere | aufrichtig | sincero | sincère | sincero
      mean | gemein | mezquino | méchant | cattivo
      kind | gütig | bondadoso | bienveillant | gentile (d'animo)
      sociable | gesellig | sociable | sociable | socievole
      introverted | introvertiert | introvertido | introverti | introverso
      extroverted | extrovertiert | extrovertido | extraverti | estroverso
      determined | entschlossen | decidido | déterminé | determinato
      reserved | zurückhaltend | reservado | réservé | riservato
      spontaneous | spontan | espontáneo | spontané | spontaneo
      trustworthy | vertrauenswürdig | digno de confianza | digne de confiance | degno di fiducia
      independent | unabhängig | independiente | indépendant (caractère) | indipendente
      mature | reif | maduro | mûr | maturo
      naive | naiv | ingenuo | naïf | ingenuo
      to behave | sich benehmen | comportarse | se comporter | comportarsi
      to boast | prahlen | presumir | se vanter | vantarsi
      to hesitate | zögern | dudar | hésiter | esitare
      to adapt | sich anpassen | adaptarse | s'adapter | adattarsi
      to tend to | neigen zu | tender a | avoir tendance à | tendere a
      to lose one's temper | die Beherrschung verlieren | perder los estribos | s'emporter | perdere la pazienza
      to show off | angeben | fardar | frimer | mettersi in mostra
      to take after | nach jemandem kommen | parecerse a | tenir de | assomigliare a
    `,
  },
  {
    key: 'b2-debate',
    level: CefrLevel.B2,
    icon: '💬',
    titles: {
      en: 'Discussing & Arguing',
      de: 'Diskutieren & Argumentieren',
      es: 'Debatir y argumentar',
      fr: 'Discuter et argumenter',
      it: 'Discutere e argomentare',
    },
    words: `
      argument (reason) | das Argument | el argumento | l'argument | l'argomento
      point of view | der Standpunkt | el punto de vista | le point de vue | il punto di vista
      advantage | der Vorteil | la ventaja | l'avantage | il vantaggio
      disadvantage | der Nachteil | la desventaja | l'inconvénient | lo svantaggio
      reason | der Grund | la razón | la raison | la ragione
      consequence | die Folge | la consecuencia | la conséquence | la conseguenza
      cause | die Ursache | la causa | la cause | la causa
      solution | die Lösung | la solución | la solution | la soluzione
      problem | das Problem | el problema | le problème | il problema
      compromise | der Kompromiss | el compromiso (acuerdo) | le compromis | il compromesso
      agreement | die Einigung | el acuerdo | l'accord | l'accordo
      disagreement | die Meinungsverschiedenheit | el desacuerdo | le désaccord | il disaccordo
      aspect | der Aspekt | el aspecto | l'aspect | l'aspetto
      fact | die Tatsache | el hecho | le fait | il fatto
      claim | die Behauptung | la afirmación | l'affirmation | l'affermazione
      in my opinion | meiner Meinung nach | en mi opinión | à mon avis | secondo me
      on the one hand | einerseits | por un lado | d'un côté | da un lato
      on the other hand | andererseits | por otro lado | d'un autre côté | dall'altro lato
      however | jedoch | sin embargo | cependant | tuttavia
      therefore | deshalb | por lo tanto | donc | quindi
      although | obwohl | aunque | bien que | sebbene
      nevertheless | trotzdem | no obstante | néanmoins | nonostante ciò
      furthermore | außerdem | además | de plus | inoltre
      for example | zum Beispiel | por ejemplo | par exemple | per esempio
      in conclusion | abschließend | en conclusión | pour conclure | in conclusione
      in fact | tatsächlich | de hecho | en fait | infatti
      obviously | offensichtlich | obviamente | évidemment | ovviamente
      probably | wahrscheinlich | probablemente | probablement | probabilmente
      of course (in debate) | selbstverständlich | por supuesto | naturellement | naturalmente
      convincing | überzeugend | convincente | convaincant | convincente
      logical | logisch | lógico | logique | logico
      relevant | relevant | pertinente | pertinent | pertinente
      questionable | fragwürdig | cuestionable | discutable | discutibile
      to argue (reason) | argumentieren | argumentar | argumenter | argomentare
      to convince | überzeugen | convencer | convaincre | convincere
      to disagree | widersprechen | no estar de acuerdo | ne pas être d'accord | non essere d'accordo
      to admit | zugeben | admitir | admettre | ammettere
      to doubt | bezweifeln | dudar de | douter | dubitare
      to emphasise | betonen | subrayar | souligner | sottolineare
      to justify | rechtfertigen | justificar | justifier | giustificare
      to compare | vergleichen | comparar | comparer | confrontare
      to consider | berücksichtigen | tener en cuenta | prendre en compte | tenere conto di
      to assume | annehmen | suponer | supposer | supporre
      to point out | hinweisen | señalar | faire remarquer | far notare
      to deny | leugnen | negar | nier | negare
      to persuade | überreden | persuadir | persuader | persuadere
      to refer to | sich beziehen auf | referirse a | faire référence à | riferirsi a
      to summarise | zusammenfassen | resumir | résumer | riassumere
      to weigh up | abwägen | sopesar | peser le pour et le contre | soppesare
      to object | einwenden | objetar | objecter | obiettare
    `,
  },
  {
    key: 'b2-medicine',
    level: CefrLevel.B2,
    icon: '💊',
    titles: {
      en: 'Medicine & Health',
      de: 'Medizin & Gesundheit',
      es: 'Medicina y salud',
      fr: 'Médecine et santé',
      it: 'Medicina e salute',
    },
    words: `
      treatment | die Behandlung | el tratamiento | le traitement | il trattamento
      diagnosis | die Diagnose | el diagnóstico | le diagnostic | la diagnosi
      symptom | das Symptom | el síntoma | le symptôme | il sintomo
      disease | die Erkrankung | la dolencia | l'affection | la patologia
      infection | die Infektion | la infección | l'infection | l'infezione
      virus | das Virus | el virus | le virus | il virus
      vaccine | der Impfstoff | la vacuna | le vaccin | il vaccino
      vaccination | die Impfung | la vacunación | la vaccination | la vaccinazione
      surgery | die Operation | la operación | l'opération | l'operazione
      surgeon | der Chirurg | el cirujano | le chirurgien | il chirurgo
      specialist | der Facharzt | el especialista | le spécialiste | lo specialista
      therapy | die Therapie | la terapia | la thérapie | la terapia
      recovery | die Genesung | la recuperación | la guérison | la guarigione
      side effect | die Nebenwirkung | el efecto secundario | l'effet secondaire | l'effetto collaterale
      allergy | die Allergie | la alergia | l'allergie | l'allergia
      blood pressure | der Blutdruck | la presión arterial | la tension artérielle | la pressione sanguigna
      heart attack | der Herzinfarkt | el infarto | la crise cardiaque | l'infarto
      stroke | der Schlaganfall | el derrame cerebral | l'AVC | l'ictus
      cancer | der Krebs | el cáncer | le cancer | il cancro
      diabetes | die Diabetes | la diabetes | le diabète | il diabete
      wound | die Wunde | la herida | la plaie | la ferita
      bandage | der Verband | la venda | le pansement | la benda
      injection | die Spritze | la inyección | la piqûre | l'iniezione
      X-ray | das Röntgenbild | la radiografía | la radiographie | la radiografia
      check-up | die Vorsorgeuntersuchung | el chequeo | le bilan de santé | il check-up
      health insurance | die Krankenversicherung | el seguro médico | l'assurance maladie | l'assicurazione sanitaria
      waiting room | das Wartezimmer | la sala de espera | la salle d'attente | la sala d'attesa
      pregnancy | die Schwangerschaft | el embarazo | la grossesse | la gravidanza
      mental health | die psychische Gesundheit | la salud mental | la santé mentale | la salute mentale
      depression | die Depression | la depresión | la dépression | la depressione
      addiction | die Sucht | la adicción | la dépendance | la dipendenza
      chronic | chronisch | crónico | chronique | cronico
      infectious | ansteckend | contagioso | contagieux | contagioso
      pregnant | schwanger | embarazada | enceinte | incinta
      painful | schmerzhaft | doloroso | douloureux | doloroso
      serious (illness) | ernsthaft | grave | grave | grave
      unconscious | bewusstlos | inconsciente | inconscient | privo di sensi
      to treat | behandeln | tratar | traiter | curare
      to heal | heilen | curar | guérir | guarire
      to recover | sich erholen | recuperarse | se rétablir | riprendersi
      to prescribe | verschreiben | recetar | prescrire | prescrivere
      to operate | operieren | operar | opérer | operare
      to vaccinate | impfen | vacunar | vacciner | vaccinare
      to suffer from | leiden an | sufrir de | souffrir de | soffrire di
      to prevent | vorbeugen | prevenir | prévenir | prevenire
      to faint | ohnmächtig werden | desmayarse | s'évanouir | svenire
      to bleed | bluten | sangrar | saigner | sanguinare
      to swell | anschwellen | hincharse | enfler | gonfiarsi
      to examine (patient) | untersuchen (Patient) | reconocer (a un paciente) | ausculter | visitare (un paziente)
      to infect | anstecken | contagiar | contaminer | contagiare
    `,
  },
];
