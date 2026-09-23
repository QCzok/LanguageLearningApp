import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** A2 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_A2: VocabCategorySeed[] = [
  {
    key: 'a2-shopping',
    level: CefrLevel.A2,
    icon: '🛒',
    titles: {
      en: 'Shopping & Money',
      de: 'Einkaufen & Geld',
      es: 'Compras y dinero',
      fr: 'Achats et argent',
      it: 'Acquisti e denaro',
    },
    words: `
      money | das Geld | el dinero | l'argent | i soldi
      price | der Preis | el precio | le prix | il prezzo
      cash | das Bargeld | el efectivo | les espèces | il contante
      credit card | die Kreditkarte | la tarjeta de crédito | la carte de crédit | la carta di credito
      coin | die Münze | la moneda | la pièce | la moneta
      note | der Geldschein | el billete de banco | le billet de banque | la banconota
      receipt | der Kassenbon | el recibo | le ticket de caisse | lo scontrino
      change | das Wechselgeld | el cambio | la monnaie | il resto
      discount | der Rabatt | el descuento | la réduction | lo sconto
      sale | der Ausverkauf | las rebajas | les soldes | i saldi
      offer | das Angebot | la oferta | l'offre | l'offerta
      customer | der Kunde | el cliente | le client | il cliente
      shop assistant | der Verkäufer | el dependiente | le vendeur | il commesso
      checkout | die Kasse | la caja | la caisse | la cassa
      queue | die Schlange | la cola | la file d'attente | la fila
      shopping bag | die Einkaufstüte | la bolsa | le sac de courses | la busta
      basket | der Korb | la cesta | le panier | il cestino
      trolley | der Einkaufswagen | el carrito | le chariot | il carrello
      bakery | die Bäckerei | la panadería | la boulangerie | il panificio
      butcher's | die Metzgerei | la carnicería | la boucherie | la macelleria
      bookshop | die Buchhandlung | la librería | la librairie | la libreria
      shopping centre | das Einkaufszentrum | el centro comercial | le centre commercial | il centro commerciale
      opening hours | die Öffnungszeiten | el horario | les horaires d'ouverture | l'orario di apertura
      open | geöffnet | abierto | ouvert | aperto
      closed | geschlossen | cerrado | fermé | chiuso
      kilo | das Kilo | el kilo | le kilo | il chilo
      bottle | die Flasche | la botella | la bouteille | la bottiglia
      packet | die Packung | el paquete | le paquet | il pacchetto
      tin | die Dose | la lata | la boîte de conserve | la lattina
      piece | das Stück | el trozo | le morceau | il pezzo
      gift | das Geschenk | el regalo | le cadeau | il regalo
      to cost | kosten | costar | coûter | costare
      to spend | ausgeben | gastar | dépenser | spendere
      to save | sparen | ahorrar | économiser | risparmiare
      to try on | anprobieren | probarse | essayer | provare
      to exchange | umtauschen | cambiar | échanger | cambiare
      to choose | auswählen | elegir | choisir | scegliere
      to order | bestellen | pedir | commander | ordinare
      to deliver | liefern | entregar | livrer | consegnare
      to return | zurückgeben | devolver | rendre | restituire
      free (of charge) | kostenlos | gratis | gratuit | gratis
      cheap | günstig | económico | pas cher | conveniente
      enough | genug | suficiente | assez | abbastanza
      too much | zu viel | demasiado | trop | troppo
      how much is it? | was kostet das? | ¿cuánto cuesta? | combien ça coûte ? | quanto costa?
      euro | der Euro | el euro | l'euro | l'euro
      wallet | der Geldbeutel | la cartera | le portefeuille | il portafoglio
      shopping list | der Einkaufszettel | la lista de la compra | la liste de courses | la lista della spesa
      brand | die Marke | la marca | la marque | la marca
      quality | die Qualität | la calidad | la qualité | la qualità
    `,
  },
  {
    key: 'a2-travel',
    level: CefrLevel.A2,
    icon: '✈️',
    titles: {
      en: 'Travel & Holidays',
      de: 'Reisen & Urlaub',
      es: 'Viajes y vacaciones',
      fr: 'Voyages et vacances',
      it: 'Viaggi e vacanze',
    },
    words: `
      holiday | der Urlaub | las vacaciones | les vacances | le vacanze
      trip | die Reise | el viaje | le voyage | il viaggio
      tourist | der Tourist | el turista | le touriste | il turista
      passport | der Reisepass | el pasaporte | le passeport | il passaporto
      suitcase | der Koffer | la maleta | la valise | la valigia
      luggage | das Gepäck | el equipaje | les bagages | il bagaglio
      backpack | der Rucksack | la mochila | le sac à dos | lo zaino
      booking | die Buchung | la reserva | la réservation | la prenotazione
      room (hotel) | das Hotelzimmer | la habitación de hotel | la chambre d'hôtel | la camera d'albergo
      reception | die Rezeption | la recepción | la réception | la reception
      single room | das Einzelzimmer | la habitación individual | la chambre simple | la camera singola
      double room | das Doppelzimmer | la habitación doble | la chambre double | la camera doppia
      campsite | der Campingplatz | el camping | le camping | il campeggio
      tent | das Zelt | la tienda de campaña | la tente | la tenda
      beach | der Strand | la playa | la plage | la spiaggia
      sea | das Meer | el mar | la mer | il mare
      mountain | der Berg | la montaña | la montagne | la montagna
      island | die Insel | la isla | l'île | l'isola
      lake | der See | el lago | le lac | il lago
      country | das Land | el país | le pays | il paese
      abroad | im Ausland | en el extranjero | à l'étranger | all'estero
      border | die Grenze | la frontera | la frontière | il confine
      flight | der Flug | el vuelo | le vol | il volo
      departure | die Abfahrt | la salida | le départ | la partenza
      arrival | die Ankunft | la llegada | l'arrivée | l'arrivo
      delay | die Verspätung | el retraso | le retard | il ritardo
      platform | das Gleis | el andén | le quai | il binario
      timetable | der Fahrplan | el horario de trenes | l'horaire | l'orario
      return ticket | die Rückfahrkarte | el billete de ida y vuelta | l'aller-retour | il biglietto di andata e ritorno
      guide | der Reiseführer | el guía | le guide | la guida
      sightseeing | die Besichtigung | la visita turística | la visite | la visita turistica
      souvenir | das Souvenir | el recuerdo | le souvenir | il souvenir
      photo | das Foto | la foto | la photo | la foto
      camera | die Kamera | la cámara | l'appareil photo | la macchina fotografica
      sun cream | die Sonnencreme | la crema solar | la crème solaire | la crema solare
      view | die Aussicht | la vista | la vue | la vista
      to book | buchen | reservar | réserver | prenotare
      to pack | packen | hacer la maleta | faire sa valise | fare la valigia
      to fly | fliegen | volar | voler | volare
      to visit | besuchen | visitar | visiter | visitare
      to relax | sich entspannen | relajarse | se détendre | rilassarsi
      to spend the night | übernachten | pasar la noche | passer la nuit | pernottare
      to rent | mieten | alquilar | louer | noleggiare
      to get lost | sich verlaufen | perderse | se perdre | perdersi
      to take a photo | fotografieren | hacer una foto | prendre une photo | fare una foto
      to change (trains) | umsteigen | hacer transbordo | changer de train | cambiare treno
      foreign | fremd | extranjero | étranger | straniero
      sunny | sonnig | soleado | ensoleillé | soleggiato
      famous | berühmt | famoso | célèbre | famoso
      crowded | überfüllt | abarrotado | bondé | affollato
    `,
  },
  {
    key: 'a2-work',
    level: CefrLevel.A2,
    icon: '💼',
    titles: {
      en: 'Work & Jobs',
      de: 'Arbeit & Berufe',
      es: 'Trabajo y profesiones',
      fr: 'Travail et métiers',
      it: 'Lavoro e professioni',
    },
    words: `
      job | der Job | el trabajo | le travail | il lavoro
      profession | der Beruf | la profesión | le métier | la professione
      company | die Firma | la empresa | l'entreprise | l'azienda
      office | das Büro | la oficina | le bureau | l'ufficio
      boss | der Chef | el jefe | le chef | il capo
      colleague | der Kollege | el compañero de trabajo | le collègue | il collega
      employee | der Angestellte | el empleado | l'employé | l'impiegato
      salary | das Gehalt | el sueldo | le salaire | lo stipendio
      meeting | die Besprechung | la reunión | la réunion | la riunione
      appointment | der Termin | la cita | le rendez-vous | l'appuntamento
      break | die Pause | el descanso | la pause | la pausa
      factory | die Fabrik | la fábrica | l'usine | la fabbrica
      shop (workplace) | der Laden | el local | la boutique | la bottega
      nurse | die Krankenschwester | el enfermero | l'infirmier | l'infermiere
      cook | der Koch | el cocinero | le cuisinier | il cuoco
      waiter | der Kellner | el camarero | le serveur | il cameriere
      engineer | der Ingenieur | el ingeniero | l'ingénieur | l'ingegnere
      lawyer | der Anwalt | el abogado | l'avocat | l'avvocato
      police officer | der Polizist | el policía | le policier | il poliziotto
      farmer | der Landwirt | el agricultor | l'agriculteur | l'agricoltore
      driver | der Fahrer | el conductor | le chauffeur | l'autista
      hairdresser | der Friseur | el peluquero | le coiffeur | il parrucchiere
      mechanic | der Mechaniker | el mecánico | le mécanicien | il meccanico
      shop owner | der Ladenbesitzer | el comerciante | le commerçant | il negoziante
      secretary | der Sekretär | el secretario | le secrétaire | il segretario
      journalist | der Journalist | el periodista | le journaliste | il giornalista
      artist | der Künstler | el artista | l'artiste | l'artista
      firefighter | der Feuerwehrmann | el bombero | le pompier | il pompiere
      job interview | das Vorstellungsgespräch | la entrevista de trabajo | l'entretien d'embauche | il colloquio di lavoro
      application | die Bewerbung | la solicitud | la candidature | la candidatura
      CV | der Lebenslauf | el currículum | le CV | il curriculum
      experience | die Erfahrung | la experiencia | l'expérience | l'esperienza
      full-time | Vollzeit | a tiempo completo | à plein temps | a tempo pieno
      part-time | Teilzeit | a media jornada | à temps partiel | part-time
      unemployed | arbeitslos | en paro | au chômage | disoccupato
      busy | beschäftigt | ocupado | occupé | occupato
      email | die E-Mail | el correo electrónico | l'e-mail | l'email
      desk | der Schreibtisch | el escritorio | le bureau (meuble) | la scrivania
      printer | der Drucker | la impresora | l'imprimante | la stampante
      task | die Aufgabe | la tarea | la tâche | il compito
      to earn | verdienen | ganar | gagner | guadagnare
      to apply | sich bewerben | solicitar | postuler | candidarsi
      to employ | einstellen | contratar | embaucher | assumere
      to fire | entlassen | despedir | licencier | licenziare
      to help | helfen | ayudar | aider | aiutare
      to organise | organisieren | organizar | organiser | organizzare
      to print | drucken | imprimir | imprimer | stampare
      to send | schicken | enviar | envoyer | inviare
      hard-working | fleißig | trabajador | travailleur | laborioso
      tired | müde | cansado | fatigué | stanco
    `,
  },
  {
    key: 'a2-body',
    level: CefrLevel.A2,
    icon: '🩺',
    titles: {
      en: 'Body & Health',
      de: 'Körper & Gesundheit',
      es: 'Cuerpo y salud',
      fr: 'Corps et santé',
      it: 'Corpo e salute',
    },
    words: `
      body | der Körper | el cuerpo | le corps | il corpo
      head | der Kopf | la cabeza | la tête | la testa
      face | das Gesicht | la cara | le visage | la faccia
      eye | das Auge | el ojo | l'œil | l'occhio
      ear | das Ohr | la oreja | l'oreille | l'orecchio
      nose | die Nase | la nariz | le nez | il naso
      mouth | der Mund | la boca | la bouche | la bocca
      tooth | der Zahn | el diente | la dent | il dente
      hair | das Haar | el pelo | les cheveux | i capelli
      neck | der Hals | el cuello | le cou | il collo
      shoulder | die Schulter | el hombro | l'épaule | la spalla
      arm | der Arm | el brazo | le bras | il braccio
      hand | die Hand | la mano | la main | la mano
      finger | der Finger | el dedo | le doigt | il dito
      back | der Rücken | la espalda | le dos | la schiena
      stomach | der Bauch | el estómago | le ventre | la pancia
      leg | das Bein | la pierna | la jambe | la gamba
      knee | das Knie | la rodilla | le genou | il ginocchio
      foot | der Fuß | el pie | le pied | il piede
      heart | das Herz | el corazón | le cœur | il cuore
      skin | die Haut | la piel | la peau | la pelle
      blood | das Blut | la sangre | le sang | il sangue
      health | die Gesundheit | la salud | la santé | la salute
      illness | die Krankheit | la enfermedad | la maladie | la malattia
      pain | der Schmerz | el dolor | la douleur | il dolore
      headache | die Kopfschmerzen | el dolor de cabeza | le mal de tête | il mal di testa
      cold (illness) | die Erkältung | el resfriado | le rhume | il raffreddore
      fever | das Fieber | la fiebre | la fièvre | la febbre
      cough | der Husten | la tos | la toux | la tosse
      flu | die Grippe | la gripe | la grippe | l'influenza
      medicine | das Medikament | el medicamento | le médicament | la medicina
      tablet | die Tablette | la pastilla | le comprimé | la pastiglia
      prescription | das Rezept | la receta médica | l'ordonnance | la ricetta medica
      dentist | der Zahnarzt | el dentista | le dentiste | il dentista
      patient | der Patient | el paciente | le patient | il paziente
      appointment (doctor) | der Arzttermin | la cita médica | le rendez-vous médical | la visita medica
      ambulance | der Krankenwagen | la ambulancia | l'ambulance | l'ambulanza
      emergency | der Notfall | la emergencia | l'urgence | l'emergenza
      accident | der Unfall | el accidente | l'accident | l'incidente
      sick | krank | enfermo | malade | malato
      healthy | gesund | sano | en bonne santé | sano
      fit | fit | en forma | en forme | in forma
      to hurt | wehtun | doler | faire mal | fare male
      to feel | sich fühlen | sentirse | se sentir | sentirsi
      to rest | sich ausruhen | descansar | se reposer | riposarsi
      to take (medicine) | einnehmen | tomarse | prendre (un médicament) | prendere (una medicina)
      to break (a bone) | sich brechen | romperse | se casser | rompersi
      to breathe | atmen | respirar | respirer | respirare
      to cough | husten | toser | tousser | tossire
      Get well soon! | Gute Besserung! | ¡Que te mejores! | Bon rétablissement ! | Guarisci presto!
    `,
  },
  {
    key: 'a2-nature',
    level: CefrLevel.A2,
    icon: '🌦️',
    titles: {
      en: 'Weather & Nature',
      de: 'Wetter & Natur',
      es: 'Tiempo y naturaleza',
      fr: 'Météo et nature',
      it: 'Tempo e natura',
    },
    words: `
      weather | das Wetter | el tiempo (clima) | le temps (météo) | il tempo (meteo)
      sun | die Sonne | el sol | le soleil | il sole
      rain | der Regen | la lluvia | la pluie | la pioggia
      snow | der Schnee | la nieve | la neige | la neve
      wind | der Wind | el viento | le vent | il vento
      cloud | die Wolke | la nube | le nuage | la nuvola
      storm | der Sturm | la tormenta | la tempête | la tempesta
      thunder | der Donner | el trueno | le tonnerre | il tuono
      lightning | der Blitz | el rayo | l'éclair | il fulmine
      fog | der Nebel | la niebla | le brouillard | la nebbia
      ice | das Eis (gefroren) | el hielo | la glace (gelée) | il ghiaccio
      temperature | die Temperatur | la temperatura | la température | la temperatura
      degree | das Grad | el grado | le degré | il grado
      sky | der Himmel | el cielo | le ciel | il cielo
      star | der Stern | la estrella | l'étoile | la stella
      moon | der Mond | la luna | la lune | la luna
      nature | die Natur | la naturaleza | la nature | la natura
      tree | der Baum | el árbol | l'arbre | l'albero
      flower | die Blume | la flor | la fleur | il fiore
      grass | das Gras | la hierba | l'herbe | l'erba
      forest | der Wald | el bosque | la forêt | il bosco
      river | der Fluss | el río | la rivière | il fiume
      field | das Feld | el campo | le champ | il campo
      hill | der Hügel | la colina | la colline | la collina
      stone | der Stein | la piedra | la pierre | la pietra
      earth | die Erde | la tierra | la terre | la terra
      air | die Luft | el aire | l'air | l'aria
      leaf | das Blatt | la hoja | la feuille | la foglia
      plant | die Pflanze | la planta | la plante | la pianta
      coast | die Küste | la costa | la côte | la costa
      desert | die Wüste | el desierto | le désert | il deserto
      countryside | das Land (ländlich) | el campo (rural) | la campagne | la campagna
      sunny day | der Sonnentag | el día soleado | la journée ensoleillée | la giornata di sole
      warm | warm | cálido | doux | tiepido
      cool | kühl | fresco | frais | fresco
      wet | nass | mojado | mouillé | bagnato
      dry | trocken | seco | sec | secco
      cloudy | bewölkt | nublado | nuageux | nuvoloso
      windy | windig | ventoso | venteux | ventoso
      rainy | regnerisch | lluvioso | pluvieux | piovoso
      foggy | neblig | con niebla | brumeux | nebbioso
      to rain | regnen | llover | pleuvoir | piovere
      to snow | schneien | nevar | neiger | nevicare
      to shine | scheinen | brillar | briller | splendere
      to grow | wachsen | crecer | pousser | crescere
      to freeze | frieren | congelarse | geler | gelare
      weather forecast | die Wettervorhersage | el pronóstico del tiempo | la météo | le previsioni del tempo
      rainbow | der Regenbogen | el arcoíris | l'arc-en-ciel | l'arcobaleno
      umbrella | der Regenschirm | el paraguas | le parapluie | l'ombrello
      heat | die Hitze | el calor | la chaleur | il caldo
    `,
  },
  {
    key: 'a2-hobbies',
    level: CefrLevel.A2,
    icon: '🎨',
    titles: {
      en: 'Free Time & Hobbies',
      de: 'Freizeit & Hobbys',
      es: 'Tiempo libre y aficiones',
      fr: 'Loisirs et passe-temps',
      it: 'Tempo libero e hobby',
    },
    words: `
      free time | die Freizeit | el tiempo libre | le temps libre | il tempo libero
      hobby | das Hobby | la afición | le passe-temps | l'hobby
      sport | der Sport | el deporte | le sport | lo sport
      football | der Fußball | el fútbol | le football | il calcio
      tennis | das Tennis | el tenis | le tennis | il tennis
      game | das Spiel | el juego | le jeu | il gioco
      team | die Mannschaft | el equipo | l'équipe | la squadra
      match | das Spiel (Wettkampf) | el partido | le match | la partita
      music | die Musik | la música | la musique | la musica
      song | das Lied | la canción | la chanson | la canzone
      guitar | die Gitarre | la guitarra | la guitare | la chitarra
      piano | das Klavier | el piano | le piano | il pianoforte
      concert | das Konzert | el concierto | le concert | il concerto
      film | der Film | la película | le film | il film
      series | die Serie | la serie | la série | la serie
      book | das Buch | el libro | le livre | il libro
      newspaper | die Zeitung | el periódico | le journal | il giornale
      magazine | die Zeitschrift | la revista | le magazine | la rivista
      painting | die Malerei | la pintura | la peinture | la pittura
      photography | die Fotografie | la fotografía | la photographie | la fotografia
      party | die Party | la fiesta | la fête | la festa
      club | der Verein | el club | le club | il circolo
      gym | das Fitnessstudio | el gimnasio | la salle de sport | la palestra
      swimming pool | das Schwimmbad | la piscina | la piscine | la piscina
      walk | der Spaziergang | el paseo | la promenade | la passeggiata
      trip (outing) | der Ausflug | la excursión | l'excursion | la gita
      theatre | das Theater | el teatro | le théâtre | il teatro
      exhibition | die Ausstellung | la exposición | l'exposition | la mostra
      ticket (event) | die Eintrittskarte | la entrada | le billet d'entrée | il biglietto d'ingresso
      computer game | das Computerspiel | el videojuego | le jeu vidéo | il videogioco
      cards | die Spielkarten | las cartas | les cartes | le carte
      chess | das Schach | el ajedrez | les échecs | gli scacchi
      garden work | die Gartenarbeit | la jardinería | le jardinage | il giardinaggio
      to paint | malen | pintar | peindre | dipingere
      to draw | zeichnen | dibujar | dessiner | disegnare
      to sing | singen | cantar | chanter | cantare
      to go out | ausgehen | salir de fiesta | sortir | uscire
      to cycle | Rad fahren | ir en bici | faire du vélo | andare in bici
      to hike | wandern | hacer senderismo | faire de la randonnée | fare escursionismo
      to ski | Ski fahren | esquiar | skier | sciare
      to jog | joggen | hacer footing | faire du jogging | fare jogging
      to collect | sammeln | coleccionar | collectionner | collezionare
      to watch TV | fernsehen | ver la tele | regarder la télé | guardare la TV
      to win | gewinnen | ganar un partido | gagner (un match) | vincere
      to lose | verlieren | perder | perdre | perdere
      to practise | üben | practicar | s'entraîner | esercitarsi
      boring | langweilig | aburrido | ennuyeux | noioso
      interesting | interessant | interesante | intéressant | interessante
      fun | der Spaß | la diversión | l'amusement | il divertimento
      favourite | Lieblings- | favorito | préféré | preferito
    `,
  },
  {
    key: 'a2-animals',
    level: CefrLevel.A2,
    icon: '🐾',
    titles: {
      en: 'Animals',
      de: 'Tiere',
      es: 'Animales',
      fr: 'Animaux',
      it: 'Animali',
    },
    words: `
      animal | das Tier | el animal | l'animal | l'animale
      dog | der Hund | el perro | le chien | il cane
      cat | die Katze | el gato | le chat | il gatto
      bird | der Vogel | el pájaro | l'oiseau | l'uccello
      horse | das Pferd | el caballo | le cheval | il cavallo
      cow | die Kuh | la vaca | la vache | la mucca
      pig | das Schwein | el cerdo | le cochon | il maiale
      sheep | das Schaf | la oveja | le mouton | la pecora
      goat | die Ziege | la cabra | la chèvre | la capra
      hen | das Huhn | la gallina | la poule | la gallina
      duck | die Ente | el pato | le canard | l'anatra
      rabbit | das Kaninchen | el conejo | le lapin | il coniglio
      mouse | die Maus | el ratón | la souris | il topo
      fish (animal) | der Fisch (Tier) | el pez | le poisson (animal) | il pesce (animale)
      lion | der Löwe | el león | le lion | il leone
      tiger | der Tiger | el tigre | le tigre | la tigre
      elephant | der Elefant | el elefante | l'éléphant | l'elefante
      monkey | der Affe | el mono | le singe | la scimmia
      bear | der Bär | el oso | l'ours | l'orso
      wolf | der Wolf | el lobo | le loup | il lupo
      fox | der Fuchs | el zorro | le renard | la volpe
      deer | das Reh | el ciervo | le cerf | il cervo
      snake | die Schlange (Tier) | la serpiente | le serpent | il serpente
      frog | der Frosch | la rana | la grenouille | la rana
      bee | die Biene | la abeja | l'abeille | l'ape
      butterfly | der Schmetterling | la mariposa | le papillon | la farfalla
      spider | die Spinne | la araña | l'araignée | il ragno
      fly | die Fliege | la mosca | la mouche | la mosca
      ant | die Ameise | la hormiga | la fourmi | la formica
      whale | der Wal | la ballena | la baleine | la balena
      dolphin | der Delfin | el delfín | le dauphin | il delfino
      shark | der Hai | el tiburón | le requin | lo squalo
      turtle | die Schildkröte | la tortuga | la tortue | la tartaruga
      giraffe | die Giraffe | la jirafa | la girafe | la giraffa
      zebra | das Zebra | la cebra | le zèbre | la zebra
      camel | das Kamel | el camello | le chameau | il cammello
      owl | die Eule | el búho | le hibou | il gufo
      eagle | der Adler | el águila | l'aigle | l'aquila
      zoo | der Zoo | el zoo | le zoo | lo zoo
      farm | der Bauernhof | la granja | la ferme | la fattoria
      tail | der Schwanz | la cola (de animal) | la queue | la coda
      wing | der Flügel | el ala | l'aile | l'ala
      fur | das Fell | el pelaje | la fourrure | il pelo
      nest | das Nest | el nido | le nid | il nido
      wild | wild | salvaje | sauvage | selvatico
      dangerous | gefährlich | peligroso | dangereux | pericoloso
      cute | süß (niedlich) | mono | mignon | carino (tenero)
      to feed | füttern | dar de comer | nourrir | dare da mangiare
      to bark | bellen | ladrar | aboyer | abbaiare
      to bite | beißen | morder | mordre | mordere
    `,
  },
  {
    key: 'a2-feelings',
    level: CefrLevel.A2,
    icon: '😊',
    titles: {
      en: 'Feelings & Describing',
      de: 'Gefühle & Beschreiben',
      es: 'Sentimientos y descripciones',
      fr: 'Sentiments et descriptions',
      it: 'Sentimenti e descrizioni',
    },
    words: `
      feeling | das Gefühl | el sentimiento | le sentiment | il sentimento
      joy | die Freude | la alegría | la joie | la gioia
      fear | die Angst | el miedo | la peur | la paura
      anger | die Wut | la rabia | la colère | la rabbia
      love | die Liebe | el amor | l'amour | l'amore
      hope | die Hoffnung | la esperanza | l'espoir | la speranza
      surprise | die Überraschung | la sorpresa | la surprise | la sorpresa
      angry | wütend | enfadado | en colère | arrabbiato
      afraid | ängstlich | asustado | effrayé | spaventato
      worried | besorgt | preocupado | inquiet | preoccupato
      nervous | nervös | nervioso | nerveux | nervoso
      calm | ruhig | tranquilo | calme | calmo
      bored | gelangweilt | aburrido (persona) | ennuyé | annoiato
      excited | aufgeregt | emocionado | excité | emozionato
      surprised | überrascht | sorprendido | surpris | sorpreso
      proud | stolz | orgulloso | fier | orgoglioso
      lonely | einsam | solo | seul | solo
      friendly | freundlich | amable | aimable | gentile
      funny | lustig | divertido | drôle | divertente
      serious | ernst | serio | sérieux | serio
      shy | schüchtern | tímido | timide | timido
      polite | höflich | educado | poli | educato
      rude | unhöflich | maleducado | impoli | maleducato
      lazy | faul | perezoso | paresseux | pigro
      clever | klug | listo | intelligent | intelligente
      stupid | dumm | tonto | bête | stupido
      strong | stark | fuerte | fort | forte
      weak | schwach | débil | faible | debole
      fast | schnell | rápido | rapide | veloce
      slow | langsam | lento | lent | lento
      easy | leicht | fácil | facile | facile
      difficult | schwierig | difícil | difficile | difficile
      important | wichtig | importante | important | importante
      possible | möglich | posible | possible | possibile
      true | wahr | verdadero | vrai | vero
      wrong | falsch | incorrecto | faux | sbagliato
      right (correct) | richtig | correcto | correct | giusto
      full | voll | lleno | plein | pieno
      empty | leer | vacío | vide | vuoto
      quiet | leise | silencioso | silencieux | silenzioso
      loud | laut | ruidoso | bruyant | rumoroso
      heavy | schwer | pesado | lourd | pesante
      light (weight) | leicht (Gewicht) | ligero | léger | leggero
      soft | weich | blando | mou | morbido
      hard | hart | duro | dur | duro
      different | anders | diferente | différent | diverso
      same | gleich | igual | pareil | uguale
      to cry | weinen | llorar | pleurer | piangere
      to smile | lächeln | sonreír | sourire | sorridere
      to hate | hassen | odiar | détester | odiare
    `,
  },
];
