import { CefrLevel } from '@prisma/client';
import type { VocabCategorySeed } from './types';

/** A1 – acht Kategorien zu je 50 Begriffen. Spalten: en | de | es | fr | it */
export const VOCAB_A1: VocabCategorySeed[] = [
  {
    key: 'a1-basics',
    level: CefrLevel.A1,
    icon: '👋',
    titles: {
      en: 'Greetings & Basics',
      de: 'Begrüßung & Grundwörter',
      es: 'Saludos y lo básico',
      fr: 'Salutations et bases',
      it: 'Saluti e parole base',
    },
    words: `
      hello | hallo | hola | salut | ciao
      goodbye | auf Wiedersehen | adiós | au revoir | arrivederci
      please | bitte | por favor | s'il te plaît | per favore
      thank you | danke | gracias | merci | grazie
      yes | ja | sí | oui | sì
      no | nein | no | non | no
      sorry | Entschuldigung | perdón | pardon | scusa
      good morning | guten Morgen | buenos días | bonjour | buongiorno
      good night | gute Nacht | buenas noches | bonne nuit | buonanotte
      see you soon | bis bald | hasta pronto | à bientôt | a presto
      welcome | willkommen | bienvenido | bienvenue | benvenuto
      excuse me | entschuldigen Sie | disculpe | excusez-moi | mi scusi
      how are you? | wie geht's? | ¿qué tal? | ça va ? | come stai?
      fine | gut | bien | bien | bene
      name | der Name | el nombre | le nom | il nome
      to be called | heißen | llamarse | s'appeler | chiamarsi
      my name is | ich heiße | me llamo | je m'appelle | mi chiamo
      I | ich | yo | je | io
      you | du | tú | tu | tu
      he | er | él | il | lui
      she | sie | ella | elle | lei
      we | wir | nosotros | nous | noi
      they | sie (Plural) | ellos | ils | loro
      here | hier | aquí | ici | qui
      there | dort | allí | là-bas | lì
      and | und | y | et | e
      or | oder | o | ou | o
      but | aber | pero | mais | ma
      with | mit | con | avec | con
      without | ohne | sin | sans | senza
      what | was | qué | quoi | che cosa
      who | wer | quién | qui | chi
      where | wo | dónde | où | dove
      when | wann | cuándo | quand | quando
      why | warum | por qué | pourquoi | perché
      how | wie | cómo | comment | come
      how much | wie viel | cuánto | combien | quanto
      very | sehr | muy | très | molto
      also | auch | también | aussi | anche
      always | immer | siempre | toujours | sempre
      never | nie | nunca | jamais | mai
      today | heute | hoy | aujourd'hui | oggi
      tomorrow | morgen | mañana | demain | domani
      yesterday | gestern | ayer | hier | ieri
      now | jetzt | ahora | maintenant | adesso
      later | später | más tarde | plus tard | più tardi
      friend | der Freund | el amigo | l'ami | l'amico
      of course | natürlich | claro | bien sûr | certo
      maybe | vielleicht | quizás | peut-être | forse
      okay | okay | vale | d'accord | va bene
    `,
  },
  {
    key: 'a1-people',
    level: CefrLevel.A1,
    icon: '👪',
    titles: {
      en: 'Family & People',
      de: 'Familie & Menschen',
      es: 'Familia y personas',
      fr: 'Famille et personnes',
      it: 'Famiglia e persone',
    },
    words: `
      man | der Mann | el hombre | l'homme | l'uomo
      woman | die Frau | la mujer | la femme | la donna
      child | das Kind | el niño | l'enfant | il bambino
      boy | der Junge | el chico | le garçon | il ragazzo
      girl | das Mädchen | la chica | la fille | la ragazza
      baby | das Baby | el bebé | le bébé | il neonato
      family | die Familie | la familia | la famille | la famiglia
      mother | die Mutter | la madre | la mère | la madre
      father | der Vater | el padre | le père | il padre
      parents | die Eltern | los padres | les parents | i genitori
      brother | der Bruder | el hermano | le frère | il fratello
      sister | die Schwester | la hermana | la sœur | la sorella
      son | der Sohn | el hijo | le fils | il figlio
      daughter | die Tochter | la hija | la fille (enfant) | la figlia
      grandmother | die Großmutter | la abuela | la grand-mère | la nonna
      grandfather | der Großvater | el abuelo | le grand-père | il nonno
      grandparents | die Großeltern | los abuelos | les grands-parents | i nonni
      uncle | der Onkel | el tío | l'oncle | lo zio
      aunt | die Tante | la tía | la tante | la zia
      cousin | der Cousin | el primo | le cousin | il cugino
      husband | der Ehemann | el marido | le mari | il marito
      wife | die Ehefrau | la esposa | l'épouse | la moglie
      friend (female) | die Freundin | la amiga | l'amie | l'amica
      people | die Leute | la gente | les gens | la gente
      person | die Person | la persona | la personne | la persona
      neighbour | der Nachbar | el vecino | le voisin | il vicino
      teacher | der Lehrer | el profesor | le professeur | l'insegnante
      student | der Student | el estudiante | l'étudiant | lo studente
      doctor | der Arzt | el médico | le médecin | il medico
      age | das Alter | la edad | l'âge | l'età
      old | alt | viejo | vieux | vecchio
      young | jung | joven | jeune | giovane
      tall | groß | alto | grand | alto
      small | klein | pequeño | petit | piccolo
      beautiful | schön | bonito | beau | bello
      nice | nett | simpático | gentil | simpatico
      happy | glücklich | feliz | heureux | felice
      sad | traurig | triste | triste | triste
      married | verheiratet | casado | marié | sposato
      single | ledig | soltero | célibataire | single
      to love | lieben | amar | aimer | amare
      to live | wohnen | vivir | habiter | abitare
      birthday | der Geburtstag | el cumpleaños | l'anniversaire | il compleanno
      year | das Jahr | el año | l'an | l'anno
      to be born | geboren werden | nacer | naître | nascere
      twins | die Zwillinge | los gemelos | les jumeaux | i gemelli
      boyfriend | der feste Freund | el novio | le petit ami | il fidanzato
      girlfriend | die feste Freundin | la novia | la petite amie | la fidanzata
      pet | das Haustier | la mascota | l'animal de compagnie | l'animale domestico
      together | zusammen | juntos | ensemble | insieme
    `,
  },
  {
    key: 'a1-food',
    level: CefrLevel.A1,
    icon: '🍎',
    titles: {
      en: 'Food & Drink',
      de: 'Essen & Trinken',
      es: 'Comida y bebida',
      fr: 'Nourriture et boissons',
      it: 'Cibo e bevande',
    },
    words: `
      bread | das Brot | el pan | le pain | il pane
      water | das Wasser | el agua | l'eau | l'acqua
      milk | die Milch | la leche | le lait | il latte
      coffee | der Kaffee | el café | le café | il caffè
      tea | der Tee | el té | le thé | il tè
      juice | der Saft | el zumo | le jus | il succo
      beer | das Bier | la cerveza | la bière | la birra
      wine | der Wein | el vino | le vin | il vino
      apple | der Apfel | la manzana | la pomme | la mela
      banana | die Banane | el plátano | la banane | la banana
      orange | die Orange | la naranja | l'orange | l'arancia
      tomato | die Tomate | el tomate | la tomate | il pomodoro
      potato | die Kartoffel | la patata | la pomme de terre | la patata
      vegetables | das Gemüse | la verdura | les légumes | la verdura
      fruit | das Obst | la fruta | les fruits | la frutta
      meat | das Fleisch | la carne | la viande | la carne
      fish | der Fisch | el pescado | le poisson | il pesce
      chicken | das Hähnchen | el pollo | le poulet | il pollo
      egg | das Ei | el huevo | l'œuf | l'uovo
      cheese | der Käse | el queso | le fromage | il formaggio
      butter | die Butter | la mantequilla | le beurre | il burro
      sugar | der Zucker | el azúcar | le sucre | lo zucchero
      salt | das Salz | la sal | le sel | il sale
      rice | der Reis | el arroz | le riz | il riso
      pasta | die Nudeln | la pasta | les pâtes | la pasta
      soup | die Suppe | la sopa | la soupe | la zuppa
      salad | der Salat | la ensalada | la salade | l'insalata
      cake | der Kuchen | el pastel | le gâteau | la torta
      chocolate | die Schokolade | el chocolate | le chocolat | il cioccolato
      ice cream | das Eis | el helado | la glace | il gelato
      breakfast | das Frühstück | el desayuno | le petit-déjeuner | la colazione
      lunch | das Mittagessen | el almuerzo | le déjeuner | il pranzo
      dinner | das Abendessen | la cena | le dîner | la cena
      food | das Essen | la comida | la nourriture | il cibo
      drink | das Getränk | la bebida | la boisson | la bevanda
      to eat | essen | comer | manger | mangiare
      to drink | trinken | beber | boire | bere
      to cook | kochen | cocinar | cuisiner | cucinare
      hungry | hungrig | con hambre | affamé | affamato
      thirsty | durstig | con sed | assoiffé | assetato
      delicious | lecker | rico | délicieux | delizioso
      sweet | süß | dulce | sucré | dolce
      hot | heiß | caliente | chaud | caldo
      cold | kalt | frío | froid | freddo
      plate | der Teller | el plato | l'assiette | il piatto
      glass | das Glas | el vaso | le verre | il bicchiere
      cup | die Tasse | la taza | la tasse | la tazza
      knife | das Messer | el cuchillo | le couteau | il coltello
      fork | die Gabel | el tenedor | la fourchette | la forchetta
      spoon | der Löffel | la cuchara | la cuillère | il cucchiaio
    `,
  },
  {
    key: 'a1-home',
    level: CefrLevel.A1,
    icon: '🏠',
    titles: {
      en: 'Home & Living',
      de: 'Zuhause & Wohnen',
      es: 'Casa y hogar',
      fr: 'Maison et logement',
      it: 'Casa e abitazione',
    },
    words: `
      house | das Haus | la casa | la maison | la casa
      flat | die Wohnung | el piso | l'appartement | l'appartamento
      room | das Zimmer | la habitación | la pièce | la stanza
      kitchen | die Küche | la cocina | la cuisine | la cucina
      bathroom | das Badezimmer | el baño | la salle de bains | il bagno
      bedroom | das Schlafzimmer | el dormitorio | la chambre | la camera da letto
      living room | das Wohnzimmer | el salón | le salon | il soggiorno
      garden | der Garten | el jardín | le jardin | il giardino
      door | die Tür | la puerta | la porte | la porta
      window | das Fenster | la ventana | la fenêtre | la finestra
      wall | die Wand | la pared | le mur | la parete
      floor | der Boden | el suelo | le sol | il pavimento
      stairs | die Treppe | la escalera | l'escalier | la scala
      roof | das Dach | el tejado | le toit | il tetto
      table | der Tisch | la mesa | la table | il tavolo
      chair | der Stuhl | la silla | la chaise | la sedia
      bed | das Bett | la cama | le lit | il letto
      sofa | das Sofa | el sofá | le canapé | il divano
      wardrobe | der Schrank | el armario | l'armoire | l'armadio
      shelf | das Regal | la estantería | l'étagère | lo scaffale
      lamp | die Lampe | la lámpara | la lampe | la lampada
      light | das Licht | la luz | la lumière | la luce
      fridge | der Kühlschrank | la nevera | le réfrigérateur | il frigorifero
      oven | der Ofen | el horno | le four | il forno
      shower | die Dusche | la ducha | la douche | la doccia
      toilet | die Toilette | el inodoro | les toilettes | il WC
      bathtub | die Badewanne | la bañera | la baignoire | la vasca da bagno
      mirror | der Spiegel | el espejo | le miroir | lo specchio
      key | der Schlüssel | la llave | la clé | la chiave
      television | der Fernseher | la televisión | la télévision | la televisione
      computer | der Computer | el ordenador | l'ordinateur | il computer
      phone | das Telefon | el teléfono | le téléphone | il telefono
      clock | die Uhr | el reloj | l'horloge | l'orologio
      picture | das Bild | el cuadro | le tableau | il quadro
      carpet | der Teppich | la alfombra | le tapis | il tappeto
      towel | das Handtuch | la toalla | la serviette | l'asciugamano
      pillow | das Kissen | la almohada | l'oreiller | il cuscino
      blanket | die Decke | la manta | la couverture | la coperta
      washing machine | die Waschmaschine | la lavadora | la machine à laver | la lavatrice
      rubbish | der Müll | la basura | les ordures | la spazzatura
      big | groß | grande | grand | grande
      new | neu | nuevo | nouveau | nuovo
      clean | sauber | limpio | propre | pulito
      dirty | schmutzig | sucio | sale | sporco
      to clean | putzen | limpiar | nettoyer | pulire
      to sleep | schlafen | dormir | dormir | dormire
      to open | öffnen | abrir | ouvrir | aprire
      to close | schließen | cerrar | fermer | chiudere
      upstairs | oben | arriba | en haut | di sopra
      downstairs | unten | abajo | en bas | di sotto
    `,
  },
  {
    key: 'a1-time',
    level: CefrLevel.A1,
    icon: '🕒',
    titles: {
      en: 'Numbers & Time',
      de: 'Zahlen & Zeit',
      es: 'Números y tiempo',
      fr: 'Nombres et temps',
      it: 'Numeri e tempo',
    },
    words: `
      one | eins | uno | un | uno
      two | zwei | dos | deux | due
      three | drei | tres | trois | tre
      four | vier | cuatro | quatre | quattro
      five | fünf | cinco | cinq | cinque
      six | sechs | seis | six | sei
      seven | sieben | siete | sept | sette
      eight | acht | ocho | huit | otto
      nine | neun | nueve | neuf | nove
      ten | zehn | diez | dix | dieci
      twenty | zwanzig | veinte | vingt | venti
      hundred | hundert | cien | cent | cento
      thousand | tausend | mil | mille | mille
      first | erste | primero | premier | primo
      last | letzte | último | dernier | ultimo
      Monday | der Montag | el lunes | lundi | lunedì
      Tuesday | der Dienstag | el martes | mardi | martedì
      Wednesday | der Mittwoch | el miércoles | mercredi | mercoledì
      Thursday | der Donnerstag | el jueves | jeudi | giovedì
      Friday | der Freitag | el viernes | vendredi | venerdì
      Saturday | der Samstag | el sábado | samedi | sabato
      Sunday | der Sonntag | el domingo | dimanche | domenica
      day | der Tag | el día | le jour | il giorno
      week | die Woche | la semana | la semaine | la settimana
      month | der Monat | el mes | le mois | il mese
      weekend | das Wochenende | el fin de semana | le week-end | il fine settimana
      hour | die Stunde | la hora | l'heure | l'ora
      minute | die Minute | el minuto | la minute | il minuto
      second | die Sekunde | el segundo | la seconde | il secondo
      time | die Zeit | el tiempo | le temps | il tempo
      morning | der Morgen | la mañana | le matin | la mattina
      afternoon | der Nachmittag | la tarde | l'après-midi | il pomeriggio
      night | die Nacht | la noche | la nuit | la notte
      January | der Januar | enero | janvier | gennaio
      spring | der Frühling | la primavera | le printemps | la primavera
      summer | der Sommer | el verano | l'été | l'estate
      autumn | der Herbst | el otoño | l'automne | l'autunno
      winter | der Winter | el invierno | l'hiver | l'inverno
      early | früh | temprano | tôt | presto
      late | spät | tarde | tard | tardi
      half | halb | medio | demi | mezzo
      quarter | das Viertel | el cuarto | le quart | il quarto
      calendar | der Kalender | el calendario | le calendrier | il calendario
      date | das Datum | la fecha | la date | la data
      soon | bald | pronto | bientôt | fra poco
      every day | jeden Tag | cada día | chaque jour | ogni giorno
      sometimes | manchmal | a veces | parfois | a volte
      often | oft | a menudo | souvent | spesso
      What time is it? | Wie spät ist es? | ¿Qué hora es? | Quelle heure est-il ? | Che ore sono?
      number | die Zahl | el número | le nombre | il numero
    `,
  },
  {
    key: 'a1-clothes',
    level: CefrLevel.A1,
    icon: '👕',
    titles: {
      en: 'Colours & Clothes',
      de: 'Farben & Kleidung',
      es: 'Colores y ropa',
      fr: 'Couleurs et vêtements',
      it: 'Colori e vestiti',
    },
    words: `
      red | rot | rojo | rouge | rosso
      blue | blau | azul | bleu | blu
      green | grün | verde | vert | verde
      yellow | gelb | amarillo | jaune | giallo
      black | schwarz | negro | noir | nero
      white | weiß | blanco | blanc | bianco
      grey | grau | gris | gris | grigio
      brown | braun | marrón | marron | marrone
      pink | rosa | rosa | rose | rosa
      orange (colour) | orange | naranja | orange | arancione
      purple | lila | morado | violet | viola
      colour | die Farbe | el color | la couleur | il colore
      light (colour) | hell | claro | clair | chiaro
      dark | dunkel | oscuro | foncé | scuro
      clothes | die Kleidung | la ropa | les vêtements | i vestiti
      shirt | das Hemd | la camisa | la chemise | la camicia
      T-shirt | das T-Shirt | la camiseta | le t-shirt | la maglietta
      trousers | die Hose | los pantalones | le pantalon | i pantaloni
      jeans | die Jeans | los vaqueros | le jean | i jeans
      dress | das Kleid | el vestido | la robe | il vestito
      skirt | der Rock | la falda | la jupe | la gonna
      jumper | der Pullover | el jersey | le pull | il maglione
      jacket | die Jacke | la chaqueta | la veste | la giacca
      coat | der Mantel | el abrigo | le manteau | il cappotto
      shoe | der Schuh | el zapato | la chaussure | la scarpa
      boot | der Stiefel | la bota | la botte | lo stivale
      sock | die Socke | el calcetín | la chaussette | il calzino
      hat | der Hut | el sombrero | le chapeau | il cappello
      cap | die Mütze | la gorra | la casquette | il berretto
      scarf | der Schal | la bufanda | l'écharpe | la sciarpa
      gloves | die Handschuhe | los guantes | les gants | i guanti
      bag | die Tasche | el bolso | le sac | la borsa
      belt | der Gürtel | el cinturón | la ceinture | la cintura
      glasses | die Brille | las gafas | les lunettes | gli occhiali
      size | die Größe | la talla | la taille | la taglia
      swimsuit | der Badeanzug | el bañador | le maillot de bain | il costume da bagno
      pyjamas | der Schlafanzug | el pijama | le pyjama | il pigiama
      underwear | die Unterwäsche | la ropa interior | les sous-vêtements | la biancheria intima
      to wear | tragen | llevar | porter | indossare
      to put on | anziehen | ponerse | mettre | mettersi
      to take off | ausziehen | quitarse | enlever | togliersi
      to buy | kaufen | comprar | acheter | comprare
      long | lang | largo | long | lungo
      short | kurz | corto | court | corto
      tight | eng | ajustado | serré | stretto
      comfortable | bequem | cómodo | confortable | comodo
      pretty | hübsch | lindo | joli | carino
      ugly | hässlich | feo | laid | brutto
      expensive | teuer | caro | cher | caro
      cheap | billig | barato | bon marché | economico
    `,
  },
  {
    key: 'a1-town',
    level: CefrLevel.A1,
    icon: '🚌',
    titles: {
      en: 'Town & Transport',
      de: 'Stadt & Verkehr',
      es: 'Ciudad y transporte',
      fr: 'Ville et transports',
      it: 'Città e trasporti',
    },
    words: `
      city | die Stadt | la ciudad | la ville | la città
      village | das Dorf | el pueblo | le village | il paese
      street | die Straße | la calle | la rue | la strada
      square | der Platz | la plaza | la place | la piazza
      shop | das Geschäft | la tienda | le magasin | il negozio
      supermarket | der Supermarkt | el supermercado | le supermarché | il supermercato
      market | der Markt | el mercado | le marché | il mercato
      bank | die Bank | el banco | la banque | la banca
      post office | die Post | correos | la poste | l'ufficio postale
      hospital | das Krankenhaus | el hospital | l'hôpital | l'ospedale
      pharmacy | die Apotheke | la farmacia | la pharmacie | la farmacia
      school | die Schule | la escuela | l'école | la scuola
      church | die Kirche | la iglesia | l'église | la chiesa
      museum | das Museum | el museo | le musée | il museo
      park | der Park | el parque | le parc | il parco
      restaurant | das Restaurant | el restaurante | le restaurant | il ristorante
      café | das Café | la cafetería | le café | il bar
      hotel | das Hotel | el hotel | l'hôtel | l'albergo
      cinema | das Kino | el cine | le cinéma | il cinema
      station | der Bahnhof | la estación | la gare | la stazione
      airport | der Flughafen | el aeropuerto | l'aéroport | l'aeroporto
      bus stop | die Haltestelle | la parada | l'arrêt | la fermata
      car | das Auto | el coche | la voiture | la macchina
      bus | der Bus | el autobús | le bus | l'autobus
      train | der Zug | el tren | le train | il treno
      bike | das Fahrrad | la bicicleta | le vélo | la bicicletta
      plane | das Flugzeug | el avión | l'avion | l'aereo
      taxi | das Taxi | el taxi | le taxi | il taxi
      underground | die U-Bahn | el metro | le métro | la metropolitana
      ticket | die Fahrkarte | el billete | le billet | il biglietto
      bridge | die Brücke | el puente | le pont | il ponte
      traffic lights | die Ampel | el semáforo | le feu rouge | il semaforo
      corner | die Ecke | la esquina | le coin | l'angolo
      left | links | a la izquierda | à gauche | a sinistra
      right | rechts | a la derecha | à droite | a destra
      straight on | geradeaus | todo recto | tout droit | dritto
      near | nah | cerca | près | vicino
      far | weit | lejos | loin | lontano
      map | die Karte | el mapa | la carte | la mappa
      address | die Adresse | la dirección | l'adresse | l'indirizzo
      to go | gehen | ir | aller | andare
      to drive | fahren | conducir | conduire | guidare
      to walk | zu Fuß gehen | caminar | marcher | camminare
      to arrive | ankommen | llegar | arriver | arrivare
      to leave | abfahren | salir | partir | partire
      to wait | warten | esperar | attendre | aspettare
      to turn | abbiegen | girar | tourner | girare
      on foot | zu Fuß | a pie | à pied | a piedi
      opposite | gegenüber | enfrente | en face | di fronte
      next to | neben | al lado de | à côté de | accanto a
    `,
  },
  {
    key: 'a1-verbs',
    level: CefrLevel.A1,
    icon: '🏃',
    titles: {
      en: 'Essential Verbs',
      de: 'Wichtige Verben',
      es: 'Verbos esenciales',
      fr: 'Verbes essentiels',
      it: 'Verbi essenziali',
    },
    words: `
      to be | sein | ser | être | essere
      to have | haben | tener | avoir | avere
      to do | machen | hacer | faire | fare
      to say | sagen | decir | dire | dire
      to come | kommen | venir | venir | venire
      to see | sehen | ver | voir | vedere
      to know | wissen | saber | savoir | sapere
      to want | wollen | querer | vouloir | volere
      can | können | poder | pouvoir | potere
      to have to | müssen | tener que | devoir | dovere
      to give | geben | dar | donner | dare
      to take | nehmen | tomar | prendre | prendere
      to find | finden | encontrar | trouver | trovare
      to think | denken | pensar | penser | pensare
      to speak | sprechen | hablar | parler | parlare
      to understand | verstehen | entender | comprendre | capire
      to ask | fragen | preguntar | demander | chiedere
      to answer | antworten | responder | répondre | rispondere
      to read | lesen | leer | lire | leggere
      to write | schreiben | escribir | écrire | scrivere
      to listen | zuhören | escuchar | écouter | ascoltare
      to learn | lernen | aprender | apprendre | imparare
      to work | arbeiten | trabajar | travailler | lavorare
      to play | spielen | jugar | jouer | giocare
      to pay | bezahlen | pagar | payer | pagare
      to need | brauchen | necesitar | avoir besoin de | avere bisogno di
      to like | mögen | gustar | aimer bien | piacere
      to stay | bleiben | quedarse | rester | restare
      to begin | beginnen | empezar | commencer | cominciare
      to finish | beenden | terminar | finir | finire
      to run | laufen | correr | courir | correre
      to sit | sitzen | estar sentado | être assis | essere seduto
      to stand | stehen | estar de pie | être debout | stare in piedi
      to wash | waschen | lavar | laver | lavare
      to show | zeigen | mostrar | montrer | mostrare
      to bring | bringen | traer | apporter | portare
      to call | anrufen | llamar | appeler | chiamare
      to dance | tanzen | bailar | danser | ballare
      to swim | schwimmen | nadar | nager | nuotare
      to travel | reisen | viajar | voyager | viaggiare
      to put | legen | poner | mettre | mettere
      to get up | aufstehen | levantarse | se lever | alzarsi
      to go to bed | ins Bett gehen | acostarse | se coucher | andare a letto
      to look for | suchen | buscar | chercher | cercare
      to try | versuchen | intentar | essayer | provare
      to sell | verkaufen | vender | vendre | vendere
      to meet | treffen | quedar con | rencontrer | incontrare
      to laugh | lachen | reír | rire | ridere
      to forget | vergessen | olvidar | oublier | dimenticare
      to remember | sich erinnern | recordar | se souvenir | ricordare
    `,
  },
];
