import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** B1 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_B1: VocabCategorySeed[] = [
  {
    key: 'b1-education',
    level: CefrLevel.B1,
    icon: '🎓',
    titles: {
      en: 'Education & Learning',
      de: 'Bildung & Lernen',
      es: 'Educación y aprendizaje',
      fr: 'Éducation et apprentissage',
      it: 'Istruzione e apprendimento',
    },
    words: `
      education | die Bildung | la educación | l'éducation | l'istruzione
      university | die Universität | la universidad | l'université | l'università
      course | der Kurs | el curso | le cours | il corso
      lesson | die Unterrichtsstunde | la clase | la leçon | la lezione
      subject | das Schulfach | la asignatura | la matière | la materia
      exam | die Prüfung | el examen | l'examen | l'esame
      grade | die Note | la nota | la note | il voto
      homework | die Hausaufgaben | los deberes | les devoirs | i compiti
      degree | der Abschluss | el título | le diplôme | la laurea
      certificate | das Zeugnis | el certificado | le certificat | il certificato
      knowledge | das Wissen | el conocimiento | la connaissance | la conoscenza
      skill | die Fähigkeit | la habilidad | la compétence | l'abilità
      mistake | der Fehler | el error | l'erreur | l'errore
      question | die Frage | la pregunta | la question | la domanda
      answer | die Antwort | la respuesta | la réponse | la risposta
      example | das Beispiel | el ejemplo | l'exemple | l'esempio
      exercise | die Übung | el ejercicio | l'exercice | l'esercizio
      dictionary | das Wörterbuch | el diccionario | le dictionnaire | il dizionario
      grammar | die Grammatik | la gramática | la grammaire | la grammatica
      vocabulary | der Wortschatz | el vocabulario | le vocabulaire | il vocabolario
      pronunciation | die Aussprache | la pronunciación | la prononciation | la pronuncia
      library | die Bibliothek | la biblioteca | la bibliothèque | la biblioteca
      classroom | das Klassenzimmer | el aula | la salle de classe | l'aula
      pupil | der Schüler | el alumno | l'élève | l'alunno
      term | das Semester | el semestre | le semestre | il semestre
      timetable (school) | der Stundenplan | el horario escolar | l'emploi du temps | l'orario scolastico
      notebook | das Heft | el cuaderno | le cahier | il quaderno
      pen | der Kugelschreiber | el bolígrafo | le stylo | la penna
      pencil | der Bleistift | el lápiz | le crayon | la matita
      board | die Tafel | la pizarra | le tableau (noir) | la lavagna
      scholarship | das Stipendium | la beca | la bourse | la borsa di studio
      lecture | die Vorlesung | la conferencia | le cours magistral | la lezione universitaria
      research | die Forschung | la investigación | la recherche | la ricerca
      to study | studieren | estudiar | étudier | studiare
      to teach | unterrichten | enseñar | enseigner | insegnare
      to explain | erklären | explicar | expliquer | spiegare
      to pass (an exam) | bestehen | aprobar | réussir | superare
      to fail (an exam) | durchfallen | suspender | échouer | essere bocciato
      to repeat | wiederholen | repetir | répéter | ripetere
      to improve | verbessern | mejorar | améliorer | migliorare
      to correct | korrigieren | corregir | corriger | correggere
      to translate | übersetzen | traducir | traduire | tradurre
      to memorise | auswendig lernen | memorizar | apprendre par cœur | imparare a memoria
      to pay attention | aufpassen | prestar atención | faire attention | fare attenzione
      to practise (a skill) | trainieren | entrenar | pratiquer | allenarsi
      to discuss | diskutieren | discutir | discuter | discutere
      correct | korrekt | exacto | exact | esatto
      clear | klar | claro (evidente) | clair (évident) | chiaro
      curious | neugierig | curioso | curieux | curioso
      fluent | fließend | con fluidez | couramment | fluente
    `,
  },
  {
    key: 'b1-tech',
    level: CefrLevel.B1,
    icon: '💻',
    titles: {
      en: 'Technology & Internet',
      de: 'Technik & Internet',
      es: 'Tecnología e internet',
      fr: 'Technologie et internet',
      it: 'Tecnologia e internet',
    },
    words: `
      technology | die Technik | la tecnología | la technologie | la tecnologia
      internet | das Internet | internet | internet | internet
      website | die Webseite | la página web | le site web | il sito web
      app | die App | la aplicación | l'application | l'app
      smartphone | das Smartphone | el móvil | le smartphone | lo smartphone
      laptop | der Laptop | el portátil | l'ordinateur portable | il portatile
      screen | der Bildschirm | la pantalla | l'écran | lo schermo
      keyboard | die Tastatur | el teclado | le clavier | la tastiera
      mouse (computer) | die Maus (Computer) | el ratón (ordenador) | la souris (ordinateur) | il mouse
      password | das Passwort | la contraseña | le mot de passe | la password
      account | das Konto | la cuenta | le compte | l'account
      user | der Nutzer | el usuario | l'utilisateur | l'utente
      file | die Datei | el archivo | le fichier | il file
      folder | der Ordner | la carpeta | le dossier | la cartella
      message | die Nachricht | el mensaje | le message | il messaggio
      social media | die sozialen Medien | las redes sociales | les réseaux sociaux | i social network
      search engine | die Suchmaschine | el buscador | le moteur de recherche | il motore di ricerca
      link | der Link | el enlace | le lien | il link
      battery | der Akku | la batería | la batterie | la batteria
      charger | das Ladegerät | el cargador | le chargeur | il caricabatterie
      network | das Netzwerk | la red | le réseau | la rete
      Wi-Fi | das WLAN | el wifi | le wifi | il wi-fi
      data | die Daten | los datos | les données | i dati
      software | die Software | el software | le logiciel | il software
      update | das Update | la actualización | la mise à jour | l'aggiornamento
      device | das Gerät | el dispositivo | l'appareil | il dispositivo
      camera (phone) | die Handykamera | la cámara del móvil | l'appareil photo du téléphone | la fotocamera del telefono
      video | das Video | el vídeo | la vidéo | il video
      online | online | en línea | en ligne | online
      offline | offline | sin conexión | hors ligne | offline
      digital | digital | digital | numérique | digitale
      wireless | kabellos | inalámbrico | sans fil | senza fili
      to download | herunterladen | descargar | télécharger | scaricare
      to upload | hochladen | subir | mettre en ligne | caricare
      to click | klicken | hacer clic | cliquer | cliccare
      to save (a file) | speichern | guardar | enregistrer | salvare
      to delete | löschen | borrar | supprimer | cancellare
      to install | installieren | instalar | installer | installare
      to log in | sich anmelden | iniciar sesión | se connecter | accedere
      to log out | sich abmelden | cerrar sesión | se déconnecter | disconnettersi
      to search | suchen (online) | buscar en internet | rechercher | cercare online
      to share | teilen | compartir | partager | condividere
      to charge | aufladen | cargar | recharger | ricaricare
      to type | tippen | teclear | taper | digitare
      to print out | ausdrucken | imprimir (un documento) | imprimer (un document) | stampare (un documento)
      to switch on | einschalten | encender | allumer | accendere
      to switch off | ausschalten | apagar | éteindre | spegnere
      to stream | streamen | ver en streaming | regarder en streaming | guardare in streaming
      to post | posten | publicar | publier | pubblicare
      privacy | der Datenschutz | la privacidad | la vie privée | la privacy
    `,
  },
  {
    key: 'b1-environment',
    level: CefrLevel.B1,
    icon: '🌍',
    titles: {
      en: 'Environment & Climate',
      de: 'Umwelt & Klima',
      es: 'Medio ambiente y clima',
      fr: 'Environnement et climat',
      it: 'Ambiente e clima',
    },
    words: `
      environment | die Umwelt | el medio ambiente | l'environnement | l'ambiente
      climate | das Klima | el clima | le climat | il clima
      climate change | der Klimawandel | el cambio climático | le changement climatique | il cambiamento climatico
      pollution | die Verschmutzung | la contaminación | la pollution | l'inquinamento
      waste | der Abfall | los residuos | les déchets | i rifiuti
      recycling | das Recycling | el reciclaje | le recyclage | il riciclaggio
      plastic | das Plastik | el plástico | le plastique | la plastica
      energy | die Energie | la energía | l'énergie | l'energia
      electricity | der Strom | la electricidad | l'électricité | l'elettricità
      solar energy | die Solarenergie | la energía solar | l'énergie solaire | l'energia solare
      wind power | die Windkraft | la energía eólica | l'énergie éolienne | l'energia eolica
      oil | das Öl | el petróleo | le pétrole | il petrolio
      gas | das Gas | el gas | le gaz | il gas
      coal | die Kohle | el carbón | le charbon | il carbone
      fuel | der Kraftstoff | el combustible | le carburant | il carburante
      emissions | die Emissionen | las emisiones | les émissions | le emissioni
      greenhouse effect | der Treibhauseffekt | el efecto invernadero | l'effet de serre | l'effetto serra
      global warming | die Erderwärmung | el calentamiento global | le réchauffement climatique | il riscaldamento globale
      drought | die Dürre | la sequía | la sécheresse | la siccità
      flood | die Überschwemmung | la inundación | l'inondation | l'alluvione
      natural disaster | die Naturkatastrophe | el desastre natural | la catastrophe naturelle | la catastrofe naturale
      species | die Art | la especie | l'espèce | la specie
      protection | der Schutz | la protección | la protection | la protezione
      resources | die Ressourcen | los recursos | les ressources | le risorse
      ocean | der Ozean | el océano | l'océan | l'oceano
      rainforest | der Regenwald | la selva tropical | la forêt tropicale | la foresta pluviale
      glacier | der Gletscher | el glaciar | le glacier | il ghiacciaio
      planet | der Planet | el planeta | la planète | il pianeta
      future | die Zukunft | el futuro | l'avenir | il futuro
      bottle bank | der Glascontainer | el contenedor de vidrio | le conteneur à verre | la campana del vetro
      organic | biologisch | ecológico | bio | biologico
      sustainable | nachhaltig | sostenible | durable | sostenibile
      renewable | erneuerbar | renovable | renouvelable | rinnovabile
      harmful | schädlich | dañino | nocif | dannoso
      polluted | verschmutzt | contaminado | pollué | inquinato
      environmentally friendly | umweltfreundlich | respetuoso con el medio ambiente | écologique | ecologico
      to protect | schützen | proteger | protéger | proteggere
      to pollute | verschmutzen | contaminar | polluer | inquinare
      to recycle | recyceln | reciclar | recycler | riciclare
      to waste | verschwenden | desperdiciar | gaspiller | sprecare
      to reduce | reduzieren | reducir | réduire | ridurre
      to throw away | wegwerfen | tirar | jeter | buttare via
      to destroy | zerstören | destruir | détruire | distruggere
      to consume | verbrauchen | consumir | consommer | consumare
      to separate (waste) | Müll trennen | separar la basura | trier les déchets | fare la raccolta differenziata
      to die out | aussterben | extinguirse | disparaître | estinguersi
      to rise | steigen | subir (nivel) | monter | salire
      to melt | schmelzen | derretirse | fondre | sciogliersi
      to save energy | Energie sparen | ahorrar energía | économiser l'énergie | risparmiare energia
      to warn | warnen | advertir | avertir | avvertire
    `,
  },
  {
    key: 'b1-relationships',
    level: CefrLevel.B1,
    icon: '❤️',
    titles: {
      en: 'Relationships',
      de: 'Beziehungen',
      es: 'Relaciones',
      fr: 'Relations',
      it: 'Relazioni',
    },
    words: `
      relationship | die Beziehung | la relación | la relation | la relazione
      friendship | die Freundschaft | la amistad | l'amitié | l'amicizia
      partner | der Partner | la pareja | le partenaire | il partner
      couple | das Paar | la pareja (dos personas) | le couple | la coppia
      wedding | die Hochzeit | la boda | le mariage | il matrimonio
      marriage | die Ehe | el matrimonio | le mariage (union) | il matrimonio (unione)
      divorce | die Scheidung | el divorcio | le divorce | il divorzio
      engagement | die Verlobung | el compromiso | les fiançailles | il fidanzamento
      date | das Date | la cita (romántica) | le rendez-vous amoureux | l'appuntamento romantico
      trust | das Vertrauen | la confianza | la confiance | la fiducia
      respect | der Respekt | el respeto | le respect | il rispetto
      argument | der Streit | la discusión | la dispute | la lite
      jealousy | die Eifersucht | los celos | la jalousie | la gelosia
      loyalty | die Treue | la lealtad | la loyauté | la lealtà
      support | die Unterstützung | el apoyo | le soutien | il sostegno
      advice | der Rat | el consejo | le conseil | il consiglio
      secret | das Geheimnis | el secreto | le secret | il segreto
      promise | das Versprechen | la promesa | la promesse | la promessa
      kiss | der Kuss | el beso | le baiser | il bacio
      hug | die Umarmung | el abrazo | le câlin | l'abbraccio
      acquaintance | der Bekannte | el conocido | la connaissance (personne) | il conoscente
      stranger | der Fremde | el desconocido | l'inconnu | lo sconosciuto
      generation | die Generation | la generación | la génération | la generazione
      childhood | die Kindheit | la infancia | l'enfance | l'infanzia
      memory | die Erinnerung | el recuerdo (memoria) | le souvenir (mémoire) | il ricordo
      jealous | eifersüchtig | celoso | jaloux | geloso
      honest | ehrlich | honesto | honnête | onesto
      reliable | zuverlässig | fiable | fiable | affidabile
      patient | geduldig | paciente | patient | paziente
      generous | großzügig | generoso | généreux | generoso
      selfish | egoistisch | egoísta | égoïste | egoista
      close | eng (vertraut) | cercano | proche | vicino (intimo)
      in love | verliebt | enamorado | amoureux | innamorato
      divorced | geschieden | divorciado | divorcé | divorziato
      to fall in love | sich verlieben | enamorarse | tomber amoureux | innamorarsi
      to get married | heiraten | casarse | se marier | sposarsi
      to break up | sich trennen | romper (una relación) | rompre | lasciarsi
      to argue | sich streiten | discutir (pelear) | se disputer | litigare
      to make up | sich versöhnen | reconciliarse | se réconcilier | fare pace
      to trust | vertrauen | confiar | faire confiance | fidarsi
      to miss (someone) | vermissen | echar de menos | manquer à | mancare
      to get to know | kennenlernen | conocer | faire connaissance | conoscere
      to get on well | sich gut verstehen | llevarse bien | bien s'entendre | andare d'accordo
      to forgive | verzeihen | perdonar | pardonner | perdonare
      to lie | lügen | mentir | mentir | mentire
      to hug | umarmen | abrazar | serrer dans ses bras | abbracciare
      to kiss | küssen | besar | embrasser | baciare
      to care about | sich kümmern um | preocuparse por | prendre soin de | prendersi cura di
      to invite | einladen | invitar | inviter | invitare
      to celebrate | feiern | celebrar | fêter | festeggiare
    `,
  },
  {
    key: 'b1-cooking',
    level: CefrLevel.B1,
    icon: '🍽️',
    titles: {
      en: 'Cooking & Restaurant',
      de: 'Kochen & Restaurant',
      es: 'Cocina y restaurante',
      fr: 'Cuisine et restaurant',
      it: 'Cucina e ristorante',
    },
    words: `
      recipe | das Rezept (Kochen) | la receta | la recette | la ricetta
      ingredient | die Zutat | el ingrediente | l'ingrédient | l'ingrediente
      menu | die Speisekarte | la carta | le menu | il menù
      starter | die Vorspeise | el entrante | l'entrée | l'antipasto
      main course | das Hauptgericht | el plato principal | le plat principal | il piatto principale
      dessert | der Nachtisch | el postre | le dessert | il dolce
      bill | die Rechnung | la cuenta (restaurante) | l'addition | il conto
      tip | das Trinkgeld | la propina | le pourboire | la mancia
      table reservation | die Tischreservierung | la reserva de mesa | la réservation de table | la prenotazione del tavolo
      pan | die Pfanne | la sartén | la poêle | la padella
      pot | der Topf | la olla | la casserole | la pentola
      bowl | die Schüssel | el cuenco | le bol | la ciotola
      flour | das Mehl | la harina | la farine | la farina
      oil (cooking) | das Speiseöl | el aceite | l'huile | l'olio
      pepper | der Pfeffer | la pimienta | le poivre | il pepe
      garlic | der Knoblauch | el ajo | l'ail | l'aglio
      onion | die Zwiebel | la cebolla | l'oignon | la cipolla
      carrot | die Karotte | la zanahoria | la carotte | la carota
      mushroom | der Pilz | el champiñón | le champignon | il fungo
      beef | das Rindfleisch | la carne de ternera | le bœuf | il manzo
      pork | das Schweinefleisch | la carne de cerdo | le porc | la carne di maiale
      seafood | die Meeresfrüchte | el marisco | les fruits de mer | i frutti di mare
      herbs | die Kräuter | las hierbas | les herbes | le erbe aromatiche
      sauce | die Soße | la salsa | la sauce | la salsa
      vegetarian | vegetarisch | vegetariano | végétarien | vegetariano
      vegan | vegan | vegano | végan | vegano
      fresh | frisch | fresco (alimento) | frais (aliment) | fresco (alimento)
      raw | roh | crudo | cru | crudo
      spicy | scharf | picante | épicé | piccante
      sour | sauer | ácido | acide | aspro
      bitter | bitter | amargo | amer | amaro
      salty | salzig | salado | salé | salato
      tasty | schmackhaft | sabroso | savoureux | gustoso
      well done | durchgebraten | muy hecho | bien cuit | ben cotto
      to fry | braten | freír | frire | friggere
      to boil | kochen (sieden) | hervir | bouillir | bollire
      to bake | backen | hornear | cuire au four | cuocere al forno
      to cut | schneiden | cortar | couper | tagliare
      to peel | schälen | pelar | éplucher | sbucciare
      to mix | mischen | mezclar | mélanger | mescolare
      to stir | umrühren | remover | remuer | girare (mescolare)
      to taste | probieren | probar (comida) | goûter | assaggiare
      to add | hinzufügen | añadir | ajouter | aggiungere
      to heat | erhitzen | calentar | chauffer | scaldare
      to serve | servieren | servir | servir | servire
      to recommend | empfehlen | recomendar | recommander | consigliare
      to reserve | reservieren | reservar mesa | réserver une table | prenotare un tavolo
      to set the table | den Tisch decken | poner la mesa | mettre la table | apparecchiare
      portion | die Portion | la ración | la portion | la porzione
      Enjoy your meal! | Guten Appetit! | ¡Buen provecho! | Bon appétit ! | Buon appetito!
    `,
  },
  {
    key: 'b1-housing',
    level: CefrLevel.B1,
    icon: '🏘️',
    titles: {
      en: 'Housing & Neighbourhood',
      de: 'Wohnen & Nachbarschaft',
      es: 'Vivienda y barrio',
      fr: 'Logement et quartier',
      it: 'Abitazione e quartiere',
    },
    words: `
      neighbourhood | die Nachbarschaft | el barrio | le quartier | il quartiere
      rent | die Miete | el alquiler | le loyer | l'affitto
      landlord | der Vermieter | el casero | le propriétaire | il padrone di casa
      tenant | der Mieter | el inquilino | le locataire | l'inquilino
      contract | der Vertrag | el contrato | le contrat | il contratto
      deposit | die Kaution | la fianza | la caution | la caparra
      floor (storey) | das Stockwerk | la planta | l'étage | il piano
      lift | der Aufzug | el ascensor | l'ascenseur | l'ascensore
      balcony | der Balkon | el balcón | le balcon | il balcone
      basement | der Keller | el sótano | la cave | la cantina
      attic | der Dachboden | el ático | le grenier | la soffitta
      garage | die Garage | el garaje | le garage | il garage
      heating | die Heizung | la calefacción | le chauffage | il riscaldamento
      furniture | die Möbel | los muebles | les meubles | i mobili
      detached house | das Einfamilienhaus | la casa unifamiliar | la maison individuelle | la villetta
      block of flats | das Mehrfamilienhaus | el bloque de pisos | l'immeuble | il condominio
      shared flat | die WG | el piso compartido | la colocation | l'appartamento condiviso
      advert | die Anzeige | el anuncio | l'annonce | l'annuncio
      square metre | der Quadratmeter | el metro cuadrado | le mètre carré | il metro quadrato
      bills (utilities) | die Nebenkosten | los gastos | les charges | le spese condominiali
      noise | der Lärm | el ruido | le bruit | il rumore
      doorbell | die Klingel | el timbre | la sonnette | il campanello
      letterbox | der Briefkasten | el buzón | la boîte aux lettres | la cassetta delle lettere
      caretaker | der Hausmeister | el conserje | le gardien | il portinaio
      suburb | der Vorort | las afueras | la banlieue | la periferia
      city centre | die Innenstadt | el centro de la ciudad | le centre-ville | il centro città
      area | die Gegend | la zona | la région | la zona
      removal | der Umzug | la mudanza | le déménagement | il trasloco
      repair | die Reparatur | la reparación | la réparation | la riparazione
      tool | das Werkzeug | la herramienta | l'outil | l'attrezzo
      furnished | möbliert | amueblado | meublé | arredato
      spacious | geräumig | espacioso | spacieux | spazioso
      bright | hell (Raum) | luminoso | lumineux | luminoso
      noisy | laut (Umgebung) | ruidoso (barrio) | bruyant (quartier) | rumoroso (quartiere)
      central | zentral | céntrico | central | centrale
      quiet (area) | ruhig (Wohnlage) | tranquilo (zona) | calme (quartier) | tranquillo
      modern | modern | moderno | moderne | moderno
      comfortable (home) | gemütlich | acogedor | confortable (maison) | accogliente
      to move (house) | umziehen | mudarse | déménager | traslocare
      to rent (a flat) | mieten (Wohnung) | alquilar (piso) | louer (un logement) | affittare
      to let | vermieten | alquilar a alguien | louer à quelqu'un | dare in affitto
      to repair | reparieren | reparar | réparer | riparare
      to decorate | einrichten | decorar | décorer | arredare
      to paint (walls) | streichen | pintar (paredes) | peindre (les murs) | tinteggiare
      to ring | klingeln | llamar al timbre | sonner | suonare il campanello
      to complain | sich beschweren | quejarse | se plaindre | lamentarsi
      to share | sich teilen | compartir (piso) | partager (un logement) | condividere (un alloggio)
      to tidy up | aufräumen | ordenar | ranger | mettere in ordine
      to heat | heizen | calentar (casa) | chauffer (la maison) | riscaldare
      to sign | unterschreiben | firmar | signer | firmare
    `,
  },
  {
    key: 'b1-worklife',
    level: CefrLevel.B1,
    icon: '🗂️',
    titles: {
      en: 'Working Life',
      de: 'Berufsleben',
      es: 'Vida laboral',
      fr: 'Vie professionnelle',
      it: 'Vita lavorativa',
    },
    words: `
      career | die Karriere | la carrera profesional | la carrière | la carriera
      position | die Stelle | el puesto | le poste | il posto di lavoro
      department | die Abteilung | el departamento | le service | il reparto
      manager | der Manager | el gerente | le responsable | il responsabile
      team leader | der Teamleiter | el jefe de equipo | le chef d'équipe | il caposquadra
      staff | das Personal | el personal | le personnel | il personale
      trainee | der Praktikant | el becario | le stagiaire | il tirocinante
      internship | das Praktikum | las prácticas | le stage | il tirocinio
      apprenticeship | die Ausbildung | el aprendizaje (oficio) | l'apprentissage | l'apprendistato
      contract (work) | der Arbeitsvertrag | el contrato de trabajo | le contrat de travail | il contratto di lavoro
      working hours | die Arbeitszeit | el horario laboral | les horaires de travail | l'orario di lavoro
      overtime | die Überstunden | las horas extra | les heures supplémentaires | gli straordinari
      holiday entitlement | der Urlaubsanspruch | los días de vacaciones | les congés payés | le ferie
      sick leave | die Krankschreibung | la baja médica | l'arrêt maladie | il congedo per malattia
      pay rise | die Gehaltserhöhung | el aumento de sueldo | l'augmentation | l'aumento di stipendio
      promotion | die Beförderung | el ascenso | la promotion | la promozione
      deadline | die Frist | el plazo | la date limite | la scadenza
      project | das Projekt | el proyecto | le projet | il progetto
      goal | das Ziel | el objetivo | l'objectif | l'obiettivo
      result | das Ergebnis | el resultado | le résultat | il risultato
      presentation | die Präsentation | la presentación | la présentation | la presentazione
      report | der Bericht | el informe | le rapport | la relazione
      customer service | der Kundendienst | el servicio de atención al cliente | le service client | il servizio clienti
      trade fair | die Messe | la feria | le salon professionnel | la fiera
      business trip | die Geschäftsreise | el viaje de negocios | le voyage d'affaires | il viaggio d'affari
      conference | die Konferenz | el congreso | la conférence | la conferenza
      responsibility | die Verantwortung | la responsabilidad | la responsabilité | la responsabilità
      teamwork | die Teamarbeit | el trabajo en equipo | le travail d'équipe | il lavoro di squadra
      stress | der Stress | el estrés | le stress | lo stress
      success | der Erfolg | el éxito | le succès | il successo
      self-employed | selbstständig | autónomo | indépendant | lavoratore autonomo
      responsible | verantwortlich | responsable | responsable | responsabile
      flexible | flexibel | flexible | flexible | flessibile
      stressful | stressig | estresante | stressant | stressante
      successful | erfolgreich | exitoso | réussi | di successo
      to manage | leiten | dirigir | diriger | dirigere
      to hire | anstellen | emplear | recruter | assumere personale
      to resign | kündigen | dimitir | démissionner | dimettersi
      to retire | in Rente gehen | jubilarse | prendre sa retraite | andare in pensione
      to negotiate | verhandeln | negociar | négocier | negoziare
      to agree | zustimmen | estar de acuerdo | être d'accord | essere d'accordo
      to plan | planen | planificar | planifier | pianificare
      to present | präsentieren | presentar | présenter | presentare
      to achieve | erreichen | lograr | atteindre | raggiungere
      to succeed | Erfolg haben | tener éxito | réussir (dans la vie) | avere successo
      to cooperate | zusammenarbeiten | colaborar | collaborer | collaborare
      to be responsible for | zuständig sein für | encargarse de | être chargé de | occuparsi di
      to set up (a business) | gründen | fundar | fonder | fondare
      to reply | beantworten | contestar | répondre à | replicare
      to attach | anhängen | adjuntar | joindre | allegare
    `,
  },
  {
    key: 'b1-sports',
    level: CefrLevel.B1,
    icon: '⚽',
    titles: {
      en: 'Sports & Fitness',
      de: 'Sport & Fitness',
      es: 'Deporte y forma física',
      fr: 'Sport et forme',
      it: 'Sport e fitness',
    },
    words: `
      fitness | die Fitness | la forma física | la forme physique | la forma fisica
      training | das Training | el entrenamiento | l'entraînement | l'allenamento
      coach | der Trainer | el entrenador | l'entraîneur | l'allenatore
      player | der Spieler | el jugador | le joueur | il giocatore
      athlete | der Sportler | el deportista | le sportif | l'atleta
      competition | der Wettbewerb | la competición | la compétition | la gara
      championship | die Meisterschaft | el campeonato | le championnat | il campionato
      tournament | das Turnier | el torneo | le tournoi | il torneo
      goal (sport) | das Tor | el gol | le but | il gol
      score | der Spielstand | el marcador | le score | il punteggio
      referee | der Schiedsrichter | el árbitro | l'arbitre | l'arbitro
      stadium | das Stadion | el estadio | le stade | lo stadio
      fan | der Fan | el aficionado | le supporter | il tifoso
      victory | der Sieg | la victoria | la victoire | la vittoria
      defeat | die Niederlage | la derrota | la défaite | la sconfitta
      draw | das Unentschieden | el empate | le match nul | il pareggio
      medal | die Medaille | la medalla | la médaille | la medaglia
      record | der Rekord | el récord | le record | il record
      ball | der Ball | la pelota | le ballon | la palla
      racket | der Schläger | la raqueta | la raquette | la racchetta
      basketball | der Basketball | el baloncesto | le basket | la pallacanestro
      volleyball | der Volleyball | el voleibol | le volley | la pallavolo
      athletics | die Leichtathletik | el atletismo | l'athlétisme | l'atletica
      cycling | der Radsport | el ciclismo | le cyclisme | il ciclismo
      marathon | der Marathon | el maratón | le marathon | la maratona
      muscle | der Muskel | el músculo | le muscle | il muscolo
      injury | die Verletzung | la lesión | la blessure | l'infortunio
      warm-up | das Aufwärmen | el calentamiento | l'échauffement | il riscaldamento (sport)
      diet | die Ernährung | la dieta | le régime | la dieta
      weight | das Gewicht | el peso | le poids | il peso
      sweat | der Schweiß | el sudor | la sueur | il sudore
      energy (physical) | die Kraft | la fuerza | la force | la forza
      healthy (lifestyle) | gesund (Lebensstil) | saludable | sain | salutare
      sporty | sportlich | deportista | sportif | sportivo
      active | aktiv | activo | actif | attivo
      exhausted | erschöpft | agotado | épuisé | esausto
      professional | professionell | profesional | professionnel | professionista
      to train | trainieren (Sport) | entrenarse | s'entraîner (sport) | allenarsi (sport)
      to score (a goal) | ein Tor schießen | marcar un gol | marquer un but | segnare un gol
      to kick | schießen | chutar | tirer | calciare
      to throw | werfen | lanzar | lancer | lanciare
      to catch | fangen | atrapar | attraper | prendere al volo
      to jump | springen | saltar | sauter | saltare
      to climb | klettern | escalar | grimper | arrampicarsi
      to stretch | sich dehnen | estirarse | s'étirer | fare stretching
      to beat | schlagen (besiegen) | vencer | battre | battere
      to take part | teilnehmen | participar | participer | partecipare
      to lose weight | abnehmen | adelgazar | maigrir | dimagrire
      to injure oneself | sich verletzen | lesionarse | se blesser | farsi male
      to cheer | anfeuern | animar | encourager | fare il tifo
    `,
  },
];
