import {
  BEGINNER as B,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Spanisch A2 – Beginner, Kapitel 7 bis 12, dazu die A2-Kapitel des Grammatikbuchs. */
export const ES_A2 = lessons('es-a2', [
  // ------------------------------------------------ Capítulo 7: El indefinido
  {
    kind: 'GRAMMAR',
    title: '¿Qué hiciste el sábado?',
    ref: [B, 7, 1],
    learn: [
      grammar(
        'Las terminaciones del indefinido',
        'Para lo que pasó una vez y se terminó. Los verbos en -er e -ir tienen las mismas terminaciones. La primera y la tercera persona llevan acento: hablo (presente) – habló (pasado).',
        {
          headers: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablé', 'comí', 'viví'],
            ['tú', 'hablaste', 'comiste', 'viviste'],
            ['él / ella', 'habló', 'comió', 'vivió'],
            ['nosotros', 'hablamos', 'comimos', 'vivimos'],
            ['vosotros', 'hablasteis', 'comisteis', 'vivisteis'],
            ['ellos', 'hablaron', 'comieron', 'vivieron'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete con el indefinido.',
        'Ayer [hablé] con mi madre. El sábado Lucía [limpió] la casa. ¿[Comiste] bien? Mis amigos [vivieron] en Chile un año.',
        ['hablo', 'comes'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'El fin de semana de Lucía',
    ref: [B, 7, 1],
    learn: [
      dialogue('El lunes en la oficina', [
        'Álvaro: ¿Qué tal el fin de semana? ¿Qué hiciste?',
        'Lucía: El sábado limpié la casa por la mañana y por la tarde salí con Nerea.',
        'Álvaro: ¿Y adónde fuisteis?',
        'Lucía: Cenamos en un sitio nuevo del centro. Comimos muy bien.',
        'Álvaro: ¿Y el domingo?',
        'Lucía: El domingo no hice nada. Dormí hasta las once y leí un rato.',
      ]),
    ],
    test: [
      order('¿Qué hizo Lucía? Ordene.', [
        'limpió la casa',
        'salió con Nerea',
        'cenaron en el centro',
        'durmió hasta las once',
      ]),
      choice('Lea el diálogo.', '¿Qué hizo Lucía el domingo?', [
        'Limpió la casa.',
        '*Casi nada: durmió y leyó.',
        'Cenó con Nerea.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hoy hablamos, ayer hablamos',
    ref: [B, 7, 1],
    learn: [
      tip(
        'Una forma para dos tiempos',
        'En los verbos en -ar y en -ir, la forma de nosotros es igual en presente y en indefinido: «hablamos», «vivimos». Lo distingue la frase: «hoy hablamos» – «ayer hablamos». Solo los verbos en -er cambian: comemos / comimos.',
      ),
    ],
    test: [
      match('¿Presente o pasado?', [
        ['Hoy trabajamos en casa.', 'presente'],
        ['El lunes pasado trabajamos en casa.', 'pasado'],
        ['Ayer comimos paella.', 'pasado'],
        ['Normalmente comemos a las dos.', 'presente'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'tuve, hice, pude',
    ref: [B, 7, 2],
    learn: [
      grammar(
        'Los verbos fuertes',
        'Cambian la raíz y todos añaden las mismas terminaciones: -e, -iste, -o, -imos, -isteis, -ieron – sin acento. Se dice «tuve», no «tuvé».',
        {
          headers: ['Infinitivo', 'Raíz', 'yo', 'él / ella'],
          rows: [
            ['tener', 'tuv-', 'tuve', 'tuvo'],
            ['estar', 'estuv-', 'estuve', 'estuvo'],
            ['poder', 'pud-', 'pude', 'pudo'],
            ['hacer', 'hic-', 'hice', 'hizo'],
            ['venir', 'vin-', 'vine', 'vino'],
            ['decir', 'dij-', 'dije', 'dijo'],
          ],
        },
      ),
    ],
    test: [
      match('Infinitivo y forma de «yo»', [
        ['tener', 'tuve'],
        ['poner', 'puse'],
        ['querer', 'quise'],
        ['venir', 'vine'],
        ['decir', 'dije'],
      ]),
      cloze(
        'Complete.',
        'El domingo no [hice] nada. Ayer mi hermano no [pudo] venir. ¿Dónde [estuviste] anoche?',
        ['hizo', 'pude'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Fui: ser e ir',
    ref: [B, 7, 2],
    learn: [
      grammar(
        'Las mismas formas',
        '«ser» e «ir» comparten todo el indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron. Lo aclara el resto de la frase: «Fui a Sevilla» es un viaje, «fui camarero» es una profesión. «dar» va con terminaciones de -er: di, diste, dio.',
      ),
    ],
    test: [
      match('¿ser o ir?', [
        ['Fuimos a la playa.', 'ir'],
        ['Fue un día precioso.', 'ser'],
        ['¿Adónde fuiste ayer?', 'ir'],
        ['Mi abuelo fue profesor.', 'ser'],
      ]),
      choice('Elija.', 'Ayer le … un regalo a mi madre.', ['dé', '*di', 'dí']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'pidió, durmió, leyó',
    ref: [B, 7, 2],
    learn: [
      tip(
        'Cambios solo en la tercera persona',
        'Los verbos en -ir con e u o en la raíz la cambian en él y ellos: pedir → pidió, dormir → durmió. Si la raíz acaba en vocal, «i» se escribe «y»: leer → leyó, oír → oyó.',
        {
          headers: ['Infinitivo', 'yo', 'él / ella', 'ellos'],
          rows: [
            ['pedir', 'pedí', 'pidió', 'pidieron'],
            ['dormir', 'dormí', 'durmió', 'durmieron'],
            ['leer', 'leí', 'leyó', 'leyeron'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Yo pedí pescado, pero Ana [pidió] carne. El niño [durmió] diez horas. Mis padres [leyeron] el periódico.',
        ['pedió', 'dormió'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Un fin de semana en Granada',
    ref: [B, 7, 3],
    learn: [
      text(
        '¡Hola, Marta! El fin de semana pasado estuvimos en Granada. Llegamos el viernes por la noche y dejamos las maletas en un hostal pequeño del centro. El sábado nos levantamos temprano y subimos a la Alhambra. Compramos las entradas por internet dos semanas antes, y menos mal, porque en la taquilla no quedaban. Pasamos allí casi cuatro horas. Por la tarde bajamos al Albaicín y tomamos algo en una terraza.',
      ),
    ],
    test: [
      choice('Lea el correo.', '¿Cuándo llegaron a Granada?', [
        '*el viernes por la noche',
        'el sábado por la mañana',
        'hace dos semanas',
      ]),
      choice('Lea el correo.', '¿Por qué fue buena idea comprar las entradas por internet?', [
        'Eran más baratas.',
        '*En la taquilla ya no quedaban.',
        'La taquilla estaba cerrada.',
      ]),
      choice('Lea el correo.', '¿Cuánto tiempo pasaron en la Alhambra?', [
        'dos horas',
        '*casi cuatro horas',
        'todo el día',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Ayer, anoche, el año pasado',
    ref: [B, 7, 4],
    learn: [
      words('Cuándo pasó', [
        ['ayer', 'gestern'],
        ['anteayer', 'vorgestern'],
        ['anoche', 'gestern Abend / letzte Nacht'],
        ['la semana pasada', 'letzte Woche'],
        ['el año pasado', 'letztes Jahr'],
        ['entonces', 'damals, dann'],
        ['de repente', 'plötzlich'],
        ['al final', 'am Ende'],
      ]),
    ],
    test: [
      match('Relacione.', [
        ['gestern Abend', 'anoche'],
        ['vorgestern', 'anteayer'],
        ['letzten Montag', 'el lunes pasado'],
        ['plötzlich', 'de repente'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hace dos días',
    ref: [B, 7, 4],
    learn: [
      grammar(
        '«hace» para contar hacia atrás',
        '«hace» va delante del tiempo: «hace tres días», «hace un año». En alemán la indicación va detrás («vor drei Tagen»), en español siempre delante.',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['hace dos horas', 'vor zwei Stunden'],
            ['hace una semana', 'vor einer Woche'],
            ['hace muchos años', 'vor vielen Jahren'],
          ],
        },
      ),
    ],
    test: [
      order('Ordene.', ['Llegué', 'a', 'Madrid', 'hace', 'tres', 'años.']),
      choice('¿Cómo se dice «vor einem Monat»?', 'Elija.', [
        'un mes hace',
        '*hace un mes',
        'antes un mes',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 8: El imperfecto
  {
    kind: 'GRAMMAR',
    title: 'Cuando era niño',
    ref: [B, 8, 1],
    learn: [
      grammar(
        'Dos juegos de terminaciones',
        'Para lo que se repetía y lo que era así durante años. -ar → -aba; -er e -ir → -ía. La forma de yo y la de él son iguales.',
        {
          headers: ['', 'jugar', 'comer', 'vivir'],
          rows: [
            ['yo', 'jugaba', 'comía', 'vivía'],
            ['tú', 'jugabas', 'comías', 'vivías'],
            ['él / ella', 'jugaba', 'comía', 'vivía'],
            ['nosotros', 'jugábamos', 'comíamos', 'vivíamos'],
            ['ellos', 'jugaban', 'comían', 'vivían'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete con el imperfecto.',
        'De pequeño [jugaba] en la calle. Mi abuela [vivía] en el campo. Los domingos [comíamos] todos juntos.',
        ['jugué', 'vivió'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'era, iba, veía',
    ref: [B, 8, 1],
    learn: [
      grammar(
        'Solo tres irregulares',
        'En todo el imperfecto hay tres excepciones: ser, ir y ver.',
        {
          headers: ['', 'ser', 'ir', 'ver'],
          rows: [
            ['yo', 'era', 'iba', 'veía'],
            ['tú', 'eras', 'ibas', 'veías'],
            ['él / ella', 'era', 'iba', 'veía'],
            ['nosotros', 'éramos', 'íbamos', 'veíamos'],
            ['ellos', 'eran', 'iban', 'veían'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Cuando [era] pequeña, [iba] al colegio en bicicleta. Todos los domingos [veíamos] a mis primos.',
        ['fui', 'vimos'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Así era mi pueblo',
    ref: [B, 8, 2],
    learn: [
      grammar(
        'Cuatro trabajos del imperfecto',
        'Ninguno mira el final: interesa cómo era algo mientras duraba.',
        {
          headers: ['Para qué', 'Ejemplo'],
          rows: [
            ['describir', 'Mi abuela era alta.'],
            ['costumbres', 'Todos los veranos íbamos al mismo pueblo.'],
            ['edad, hora, tiempo', 'Tenía ocho años. Eran las tres. Llovía.'],
            ['lo que se estaba haciendo', 'Mientras cocinaba, escuchaba la radio.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Para qué sirve el imperfecto aquí?', [
        ['La casa tenía un patio grande.', 'describir'],
        ['Cada verano íbamos a la playa.', 'costumbre'],
        ['Tenía diez años.', 'edad'],
        ['Hacía mucho calor.', 'tiempo atmosférico'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Mi pueblo',
    ref: [B, 8, 2],
    learn: [
      text(
        'Mi pueblo tenía unas trescientas casas y una sola calle ancha. En verano hacía un calor horrible y nadie salía hasta las ocho. Mi abuela vivía enfrente de la iglesia, en una casa muy fresca que olía a membrillo. Todas las tardes nos sentábamos en la puerta y ella hablaba con las vecinas mientras nosotros jugábamos en la plaza. Cuando oíamos las campanas, sabíamos que era la hora de cenar.',
      ),
    ],
    test: [
      choice('Lea el texto.', '¿Dónde vivía la abuela?', [
        'en la calle ancha',
        '*enfrente de la iglesia',
        'en la plaza',
      ]),
      choice('Lea el texto.', '¿Qué hacían los niños por la tarde?', [
        '*Jugaban en la plaza.',
        'Hablaban con las vecinas.',
        'Tocaban las campanas.',
      ]),
      choice('Lea el texto.', '¿Cómo sabían que era la hora de cenar?', [
        'por el reloj',
        '*por las campanas',
        'por la abuela',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Antes y ahora',
    ref: [B, 8, 2],
    learn: [
      tip(
        'Contrastar',
        'Una frase en imperfecto, otra en presente, y el contraste se entiende solo. Lo anuncian «antes», «entonces» y «de pequeño».',
        {
          headers: ['Antes', 'Ahora'],
          rows: [
            ['Antes leía mucho más.', 'Ahora casi no leo.'],
            ['Entonces no había móviles.', 'Hoy todo el mundo tiene uno.'],
          ],
        },
      ),
    ],
    test: [
      match('Antes y ahora', [
        ['Antes vivía en el campo,', 'ahora vivo en la ciudad.'],
        ['De pequeño no me gustaba la verdura,', 'ahora me encanta.'],
        ['Entonces no había internet,', 'hoy lo usamos para todo.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El decorado y la acción',
    ref: [B, 8, 3],
    learn: [
      grammar(
        'Como una película',
        'El imperfecto es el decorado: la hora, el tiempo, cómo era la gente, lo que se estaba haciendo. El indefinido es lo que ocurre encima y hace avanzar la historia.',
        {
          headers: ['Imperfecto (decorado)', 'Indefinido (acción)'],
          rows: [
            ['Eran las diez de la noche', 'y llamaron a la puerta.'],
            ['Llovía muchísimo', 'y decidimos volver.'],
            ['Estaba en la ducha', 'cuando sonó el teléfono.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        '¿Imperfecto o indefinido?',
        '[Hacía] sol y [estábamos] en la playa. De repente [empezó] a llover.',
        ['hizo', 'empezaba'],
      ),
      choice('Elija.', 'Cuando … a casa, mi madre estaba cocinando.', ['*llegué', 'llegaba']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'mientras y cuando',
    ref: [B, 8, 3],
    learn: [
      grammar(
        'Dos cosas a la vez o una interrupción',
        '«Mientras» presenta dos cosas que duraban a la vez: las dos en imperfecto. «Cuando» suele marcar la interrupción: lo que duraba en imperfecto, lo que interrumpe en indefinido.',
        {
          headers: ['Frase', 'Qué dice'],
          rows: [
            ['Mientras cenábamos, veíamos la tele.', 'las dos cosas duraban'],
            ['Cuando cenábamos, llegó mi hermano.', 'algo interrumpe la cena'],
            ['Cuando cenamos, vimos la película.', 'primero una cosa, después la otra'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué dice la frase?', [
        ['Mientras yo leía, él cocinaba.', 'dos cosas a la vez'],
        ['Cuando leía, sonó el teléfono.', 'una interrupción'],
        ['Cuando terminé de leer, apagué la luz.', 'una después de la otra'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Aquella noche',
    ref: [B, 8, 4],
    learn: [
      text(
        'Era una noche de febrero y llovía desde por la tarde. Yo estaba solo en la oficina, porque mis compañeros se fueron a las seis. No quedaba nadie en el edificio y solo se oía el ruido de la lluvia. De repente se apagaron todas las luces. Me levanté, busqué el móvil y encendí la linterna. Entonces oí pasos en el pasillo. Abrí la puerta despacio y vi a Marisa, la de seguridad.',
      ),
    ],
    test: [
      match('¿Decorado o acción?', [
        ['llovía desde por la tarde', 'decorado'],
        ['se apagaron todas las luces', 'acción'],
        ['no quedaba nadie', 'decorado'],
        ['oí pasos en el pasillo', 'acción'],
      ]),
      choice('Lea el texto.', '¿Quién estaba en el pasillo?', [
        'un ladrón',
        'sus compañeros',
        '*Marisa, la de seguridad',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 9: La salud
  {
    kind: 'VOCAB',
    title: 'El cuerpo',
    ref: [B, 9, 1],
    learn: [
      words('Partes del cuerpo', [
        ['la cabeza', 'der Kopf'],
        ['la garganta', 'der Hals (innen)'],
        ['el cuello', 'der Hals (außen)'],
        ['la espalda', 'der Rücken'],
        ['el estómago', 'der Magen'],
        ['la pierna', 'das Bein'],
        ['la rodilla', 'das Knie'],
        ['la muela', 'der Backenzahn'],
      ]),
      tip(
        'la mano, el día',
        '«La mano» acaba en -o y es femenina; «el día» acaba en -a y es masculino.',
      ),
    ],
    test: [
      match('Relacione.', [
        ['Knie', 'la rodilla'],
        ['Rücken', 'la espalda'],
        ['Hals (innen, bei Erkältung)', 'la garganta'],
        ['Magen', 'el estómago'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me duele la cabeza, no mi cabeza',
    ref: [B, 9, 1],
    learn: [
      grammar(
        'El cuerpo va con artículo',
        'Hablando del propio cuerpo, el español pone «el» o «la» donde el alemán pone «mein». El dueño ya lo dice el pronombre.',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['Me duele la espalda.', 'Mein Rücken tut weh.'],
            ['Se rompió el brazo.', 'Er hat sich den Arm gebrochen.'],
            ['Tengo las manos frías.', 'Meine Hände sind kalt.'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija la frase correcta.', 'Elija.', ['Me duele mi cabeza.', '*Me duele la cabeza.']),
      choice('Elija la frase correcta.', 'Elija.', ['*Me lavo las manos.', 'Lavo mis manos.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'duele o duelen',
    ref: [B, 9, 2],
    learn: [
      grammar(
        'Como gustar',
        'El pronombre dice a quién le duele; el verbo se ajusta a la parte del cuerpo: una parte «duele», varias «duelen». «doler» cambia o → ue.',
        {
          headers: ['A quién', 'Una parte', 'Varias'],
          rows: [
            ['a mí', 'me duele la cabeza', 'me duelen los pies'],
            ['a ti', 'te duele', 'te duelen'],
            ['a él / ella / usted', 'le duele', 'le duelen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'duele o duelen?',
        'Me [duele] la garganta. A mi padre le [duelen] las rodillas. ¿Te [duele] la espalda?',
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: '¿Cómo se encuentra?',
    ref: [B, 9, 2],
    learn: [
      words('Salud', [
        ['encontrarse mal', 'sich schlecht fühlen'],
        ['tener fiebre', 'Fieber haben'],
        ['tener tos', 'Husten haben'],
        ['estar resfriado', 'erkältet sein'],
        ['tener gripe', 'die Grippe haben'],
        ['la pastilla', 'die Tablette'],
        ['la receta', 'das Rezept'],
      ]),
      grammar(
        'Tres maneras',
        'doler + parte del cuerpo: «Me duele el estómago». tener dolor de: «Tengo dolor de estómago». estar + adjetivo: «Estoy resfriado».',
      ),
    ],
    test: [
      cloze(
        'Complete con tener, estar o doler.',
        '[Tengo] fiebre y [estoy] muy cansada. Además me [duele] la cabeza.',
        ['soy', 'duelen'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'En la consulta',
    ref: [B, 9, 3],
    learn: [
      dialogue('Con la doctora Ferrer', [
        'Doctora: Buenos días, siéntese. ¿Qué le pasa?',
        'Paciente: Me encuentro fatal. Me duele mucho la garganta y tengo tos.',
        'Doctora: ¿Desde cuándo?',
        'Paciente: Desde el viernes. Hace tres días que no duermo bien.',
        'Doctora: ¿Y fiebre?',
        'Paciente: Ayer tuve treinta y ocho y medio.',
        'Doctora: No es nada grave, pero tiene que descansar. Le doy la baja para tres días.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Qué le duele al paciente?', [
        'la cabeza',
        '*la garganta',
        'el estómago',
      ]),
      choice('Lea el diálogo.', '¿Qué significa «le doy la baja»?', [
        'Le doy una receta.',
        '*No puede trabajar unos días.',
        'Tiene que volver mañana.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'desde, desde hace, hace … que',
    ref: [B, 9, 3],
    learn: [
      grammar(
        '¿Desde cuándo?',
        '«desde» va delante de un momento (el viernes, enero). «desde hace» va delante de un plazo (tres días). «hace … que» dice lo mismo que «desde hace», al principio de la frase.',
        {
          headers: ['Forma', 'Ejemplo'],
          rows: [
            ['desde + momento', 'Me duele desde el viernes.'],
            ['desde hace + plazo', 'Me duele desde hace tres días.'],
            ['hace + plazo + que', 'Hace tres días que me duele.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'desde o desde hace?',
        'Vivo aquí [desde] 2020. Estudio español [desde hace] dos años. Tengo tos [desde] el lunes.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Descanse y beba mucha agua',
    ref: [B, 9, 4],
    learn: [
      grammar(
        'El imperativo afirmativo',
        'tú: tercera persona del presente sin -s (tomas → ¡toma!). usted: -ar toma -e, -er/-ir toman -a (tome, beba). Algunas formas son irregulares.',
        {
          headers: ['Infinitivo', 'tú', 'usted'],
          rows: [
            ['tomar', 'toma', 'tome'],
            ['beber', 'bebe', 'beba'],
            ['abrir', 'abre', 'abra'],
            ['hacer', 'haz', 'haga'],
            ['venir', 'ven', 'venga'],
            ['ir', 've', 'vaya'],
          ],
        },
      ),
      tip(
        'La forma negativa es otra',
        '«toma» pero «no tomes», «bebe» pero «no bebas». Basta con reconocerla.',
      ),
    ],
    test: [
      match('tú y usted', [
        ['toma', 'tome'],
        ['bebe', 'beba'],
        ['haz', 'haga'],
        ['ven', 'venga'],
      ]),
      choice('La doctora dice (usted):', '… la boca, por favor.', ['Abre', '*Abra', 'Abrir']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'tener que, deber, hay que',
    ref: [B, 9, 4],
    learn: [
      tip(
        'Obligación y consejo',
        '«tener que»: la obligación concreta de alguien. «deber»: consejo o deber moral, más suave. «hay que»: no nombra a nadie, vale para todos.',
        {
          headers: ['Forma', 'Ejemplo'],
          rows: [
            ['tener que', 'Tienes que descansar.'],
            ['deber', 'Debe beber más agua.'],
            ['hay que', 'Hay que tomarlo con comida.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué frase?', [
        ['una instrucción general del prospecto', 'Hay que tomarlo con comida.'],
        ['una obligación concreta', 'Tienes que quedarte en casa.'],
        ['un consejo suave', 'Deberías dormir más.'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 10: Viajes
  {
    kind: 'GRAMMAR',
    title: 'Vamos a viajar',
    ref: [B, 10, 1],
    learn: [
      grammar(
        'ir + a + infinitivo',
        'Solo se conjuga «ir»; el otro verbo queda en infinitivo. La «a» no se puede saltar.',
        {
          headers: ['', 'ir a', 'Ejemplo'],
          rows: [
            ['yo', 'voy a', 'Voy a comprar los billetes.'],
            ['tú', 'vas a', '¿Vas a venir?'],
            ['nosotros', 'vamos a', 'Vamos a alquilar un coche.'],
            ['ellos', 'van a', 'Van a quedarse una semana.'],
          ],
        },
      ),
    ],
    test: [
      order('Ordene.', ['Este', 'verano', 'vamos', 'a', 'ir', 'a', 'Asturias.']),
      cloze(
        'Complete.',
        '¿Qué [vais] a hacer en el puente? – [Vamos] a ir en tren. Sergio [va] a comprar los billetes.',
        ['vamos a'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'El viaje',
    ref: [B, 10, 1],
    learn: [
      words('De viaje', [
        ['el billete', 'die Fahrkarte'],
        ['de ida y vuelta', 'hin und zurück'],
        ['el andén', 'der Bahnsteig'],
        ['el vuelo', 'der Flug'],
        ['la maleta', 'der Koffer'],
        ['hacer transbordo', 'umsteigen'],
        ['el retraso', 'die Verspätung'],
        ['alojarse', 'übernachten, wohnen'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Quería un [billete] de ida y vuelta a Oviedo. ¿Tengo que hacer [transbordo]? El tren tiene veinte minutos de [retraso].',
        ['andén', 'maleta'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El futuro simple',
    ref: [B, 10, 2],
    learn: [
      grammar(
        'Infinitivo entero + terminación',
        'Las terminaciones se pegan al infinitivo entero y son las mismas para -ar, -er e -ir: -é, -ás, -á, -emos, -éis, -án.',
        {
          headers: ['', 'viajar', 'volver'],
          rows: [
            ['yo', 'viajaré', 'volveré'],
            ['tú', 'viajarás', 'volverás'],
            ['él / ella', 'viajará', 'volverá'],
            ['nosotros', 'viajaremos', 'volveremos'],
            ['ellos', 'viajarán', 'volverán'],
          ],
        },
      ),
      tip(
        '¿ir a o futuro?',
        'En la conversación gana «ir a» para lo decidido y cercano. El futuro aparece en lo lejano, lo formal y las previsiones – y para suponer: «Serán las cinco» = es wird wohl fünf sein.',
      ),
    ],
    test: [
      cloze(
        'Complete con el futuro.',
        'Mañana [lloverá] en el norte. El año que viene [viajaremos] a Perú. ¿Dónde está Ana? – [Estará] en el tren.',
        ['llueve', 'viajamos'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'tendré, saldré, haré',
    ref: [B, 10, 2],
    learn: [
      grammar(
        'Nueve raíces distintas',
        'Algunos verbos usan una raíz acortada; las terminaciones son las mismas. Valen también para el condicional.',
        {
          headers: ['Infinitivo', 'Raíz', 'Ejemplo'],
          rows: [
            ['tener', 'tendr-', 'Tendré tiempo.'],
            ['salir', 'saldr-', 'El tren saldrá a las ocho.'],
            ['poder', 'podr-', 'No podré llegar antes.'],
            ['hacer', 'har-', '¿Qué haréis en agosto?'],
            ['decir', 'dir-', 'Te diré algo.'],
            ['venir', 'vendr-', '¿Vendrás con nosotros?'],
          ],
        },
      ),
    ],
    test: [
      match('Infinitivo y futuro (yo)', [
        ['tener', 'tendré'],
        ['hacer', 'haré'],
        ['decir', 'diré'],
        ['saber', 'sabré'],
        ['poner', 'pondré'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Quería reservar una habitación',
    ref: [B, 10, 3],
    learn: [
      dialogue('Por teléfono con el hostal', [
        'Cliente: Buenos días. Quería reservar una habitación doble para el puente de mayo.',
        'Recepción: ¿Para qué días exactamente?',
        'Cliente: Del jueves treinta al domingo tres, tres noches.',
        'Recepción: Nos queda una con baño y vistas al puerto. Son sesenta y cinco euros la noche.',
        'Cliente: ¿El desayuno está incluido?',
        'Recepción: Sí, de ocho a diez y media. ¿A qué hora llegarán ustedes?',
        'Cliente: Sobre las nueve de la noche.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Qué habitación reserva el cliente?', [
        'individual',
        '*doble',
        'con terraza',
      ]),
      choice('Lea el diálogo.', '¿Cuánto cuestan las tres noches?', ['65 €', '130 €', '*195 €']),
      choice('Lea el diálogo.', '¿Está incluido el desayuno?', ['*Sí.', 'No.', 'Solo el domingo.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quería…, ¿me puede…?',
    ref: [B, 10, 3],
    learn: [
      grammar(
        'Pedir sin sonar brusco',
        '«quiero» es correcto pero suena seco. Más amable: el imperfecto «quería» o la pregunta «¿me puede…?».',
        {
          headers: ['Directo', 'Más amable'],
          rows: [
            ['Quiero una habitación.', 'Quería una habitación, por favor.'],
            ['Deme la llave.', '¿Me puede dar la llave?'],
            ['Necesito otra toalla.', '¿Me puede traer otra toalla?'],
          ],
        },
      ),
    ],
    test: [
      choice('¿Qué es más amable?', 'Elija.', [
        'Quiero la cuenta.',
        '*¿Me puede traer la cuenta, por favor?',
      ]),
      choice('¿Qué es más amable?', 'Elija.', [
        '*Quería un café con leche.',
        'Quiero un café con leche.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Quedamos el sábado?',
    ref: [B, 10, 4],
    learn: [
      grammar(
        'quedar = citarse',
        '«¿Quedamos?» propone una cita. La hora con «a», el sitio con «en», la persona con «con». Para decir que no, se añade un motivo.',
        {
          headers: ['Función', 'Frase'],
          rows: [
            ['proponer', '¿Quedamos el sábado a las siete?'],
            ['sitio', '¿Quedamos en la plaza?'],
            ['preguntar', '¿Te viene bien a las ocho?'],
            ['aceptar', 'Vale, perfecto.'],
            ['rechazar', 'Uf, el sábado no puedo, trabajo.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '¿[Quedamos] el viernes? – El viernes no puedo. ¿Y el sábado [a] las ocho [en] la plaza? – Vale, ¿te [viene] bien a las ocho y media?',
        ['con', 'queda'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si llueve, …',
    ref: [B, 10, 4],
    learn: [
      grammar(
        'si + presente',
        'Para una condición posible, detrás de «si» va el presente – nunca el futuro. La otra parte puede ir en presente, futuro o imperativo. Ojo: «si» (wenn) ≠ «sí» (ja).',
        {
          headers: ['Condición', 'Consecuencia'],
          rows: [
            ['Si llueve,', 'nos quedamos en casa.'],
            ['Si hace buen tiempo,', 'iremos a la playa.'],
            ['Si llegas tarde,', 'avísame.'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija.', 'Si … tiempo, te llamo.', ['tendré', '*tengo', 'tenía']),
      match('Relacione.', [
        ['Si no hay billetes,', 'cogeremos el autobús.'],
        ['Si tienes hambre,', 'come algo.'],
        ['Si llueve,', 'nos metemos en el bar.'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 11: La vivienda
  {
    kind: 'VOCAB',
    title: 'La casa por dentro',
    ref: [B, 11, 1],
    learn: [
      words('La vivienda', [
        ['el piso', 'die Wohnung'],
        ['el salón', 'das Wohnzimmer'],
        ['el dormitorio', 'das Schlafzimmer'],
        ['el pasillo', 'der Flur'],
        ['el armario', 'der Schrank'],
        ['la nevera', 'der Kühlschrank'],
        ['el alquiler', 'die Miete'],
        ['luminoso', 'hell'],
      ]),
      tip(
        'Presentar y situar',
        'Primero «hay» (sin artículo definido), después «está» (con artículo): «En el salón hay un sofá. El sofá está debajo de la ventana.»',
      ),
    ],
    test: [
      cloze(
        'hay o está?',
        'En el salón [hay] un sofá grande. El sofá [está] debajo de la ventana. No [hay] ascensor.',
      ),
      match('Relacione.', [
        ['el dormitorio', 'Schlafzimmer'],
        ['el pasillo', 'Flur'],
        ['la nevera', 'Kühlschrank'],
        ['el alquiler', 'Miete'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Más grande que, tan grande como',
    ref: [B, 11, 2],
    learn: [
      grammar(
        'Comparar',
        'El adjetivo no cambia: «más … que», «menos … que». Igualdad: «tan + adjetivo + como»; con sustantivo «tanto/a/os/as + sustantivo + como».',
        {
          headers: ['Relación', 'Ejemplo'],
          rows: [
            ['más', 'Este piso es más luminoso que el otro.'],
            ['menos', 'El barrio es menos ruidoso que el centro.'],
            ['tan … como', 'La cocina es tan grande como el salón.'],
            ['tanto … como', 'No tengo tantas habitaciones como tú.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Mi piso es [más] caro [que] el tuyo. La cocina es [tan] grande [como] el salón. No tengo [tantos] muebles como tú.',
        ['tanto', 'menos'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'mejor, peor, mayor, menor',
    ref: [B, 11, 2],
    learn: [
      grammar(
        'Sin «más»',
        'Estos adjetivos ya son comparativos: «más mejor» no existe. «mayor» y «menor» se usan sobre todo para la edad.',
        {
          headers: ['Adjetivo', 'Comparativo'],
          rows: [
            ['bueno / bien', 'mejor'],
            ['malo / mal', 'peor'],
            ['(edad) grande', 'mayor'],
            ['(edad) pequeño', 'menor'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija.', 'Esta zona es … que aquella.', ['más buena', '*mejor', 'más mejor']),
      choice('Elija.', 'Mi hermana tiene 30 años y yo 25. Ella es …', [
        'más grande',
        '*mayor',
        'mejor',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El más tranquilo de la ciudad',
    ref: [B, 11, 3],
    learn: [
      grammar(
        'el / la + más + adjetivo + de',
        'El artículo va delante del sustantivo y «más» detrás: «el piso más caro». El grupo se introduce con «de», donde el alemán pone «in»: «el barrio más tranquilo de la ciudad».',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['el piso más barato del edificio', 'die billigste Wohnung im Haus'],
            ['la mejor zona de la ciudad', 'die beste Gegend der Stadt'],
          ],
        },
      ),
    ],
    test: [
      order('Ordene.', ['Es', 'la', 'calle', 'más', 'ruidosa', 'del', 'barrio.']),
      choice('Elija.', 'Es el restaurante más famoso … Madrid.', ['en', '*de', 'que']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'carísimo, facilísimo',
    ref: [B, 11, 3],
    learn: [
      tip(
        '-ísimo',
        'Sube el volumen sin comparar: se quita la vocal final y se añade «-ísimo». Equivale a «muy». rico → riquísimo, largo → larguísimo.',
      ),
    ],
    test: [
      match('Relacione.', [
        ['muy caro', 'carísimo'],
        ['muy grande', 'grandísimo'],
        ['muy fácil', 'facilísimo'],
        ['muy rico', 'riquísimo'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Buscar piso',
    ref: [B, 11, 4],
    learn: [
      text(
        'PISO A – Calle Mayor, 2º sin ascensor. 70 m², 2 dorm., salón con balcón, cocina equipada. Muy luminoso. Zona céntrica, al lado del mercado. 780 €/mes + gastos. Ruido de la calle por las noches.',
      ),
      text(
        'PISO B – Barrio del Carmen, 4º con ascensor. 55 m², 1 dorm., salón-cocina, terraza de 8 m². Reformado, tranquilo, muy soleado. A 20 min del centro en autobús. 650 €/mes, gastos incluidos.',
      ),
    ],
    test: [
      choice('Lea los anuncios.', '¿Qué piso tiene ascensor?', [
        'el piso A',
        '*el piso B',
        'los dos',
      ]),
      choice('Lea los anuncios.', '¿Qué piso es más tranquilo?', ['el piso A', '*el piso B']),
      choice('Lea los anuncios.', '¿Qué significa «gastos incluidos»?', [
        '*Los gastos ya están en el precio.',
        'Hay que pagar los gastos aparte.',
        'No hay gastos.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me parece caro',
    ref: [B, 11, 4],
    learn: [
      grammar(
        'Opinar',
        '«Creo que…» y «Me parece que…» + frase normal. «Me parece» + adjetivo funciona como «gustar»: «me parece caro», «me parecen pequeñas».',
      ),
      tip('Conectores', '«además» suma, «pero» y «aunque» dan la vuelta, «por eso» concluye.'),
    ],
    test: [
      cloze(
        'Complete.',
        'La terraza me [parece] pequeña, [pero] el piso es muy luminoso. [Además] está reformado. No tiene ascensor; [por eso] es más barato.',
        ['parecen', 'aunque'],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 12: Fiestas y experiencias
  {
    kind: 'TEXT',
    title: 'Las doce uvas',
    ref: [B, 12, 1],
    learn: [
      text(
        'En Nochevieja, a las doce, casi todas las familias españolas hacen lo mismo: comen doce uvas, una con cada campanada del reloj de la Puerta del Sol, que sale por televisión. Hay que darse prisa, porque entre campanada y campanada pasan tres segundos. Después la gente sale a la calle y muchos no vuelven a casa hasta el desayuno.',
      ),
      culture(
        'Reyes Magos',
        'En España los regalos de Navidad los traen tradicionalmente los Reyes Magos, el 6 de enero.',
      ),
    ],
    test: [
      choice('Lea el texto.', '¿Cuándo se comen las doce uvas?', [
        'el 6 de enero',
        '*a las doce de la Nochevieja',
        'en Nochebuena',
      ]),
      choice('Lea el texto.', '¿Por qué hay que darse prisa?', [
        '*Entre campanada y campanada pasan solo tres segundos.',
        'Las uvas son pequeñas.',
        'La televisión termina pronto.',
      ]),
      match('Relacione.', [
        ['Reyes', '6 de enero'],
        ['Nochevieja', '31 de diciembre'],
        ['Día de Muertos', '1–2 de noviembre'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'He trabajado mucho',
    ref: [B, 12, 2],
    learn: [
      grammar(
        'haber + participio',
        'Solo se conjuga «haber». El participio no cambia: -ado (-ar), -ido (-er, -ir). Entre las dos palabras no se mete nada.',
        {
          headers: ['', 'haber', 'Ejemplo'],
          rows: [
            ['yo', 'he', 'He trabajado mucho.'],
            ['tú', 'has', '¿Has comido ya?'],
            ['él / ella', 'ha', 'Ana ha salido.'],
            ['nosotros', 'hemos', 'Hemos vivido aquí.'],
            ['ellos', 'han', 'No han llegado.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Esta semana [he] trabajado mucho. ¿[Has] comido ya? Mis padres no [han] llegado todavía.',
        ['habéis'],
      ),
      choice('Elija la frase correcta.', 'Elija.', [
        'He no visto la película.',
        '*No he visto la película.',
        'He visto no la película.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'hecho, dicho, visto',
    ref: [B, 12, 2],
    learn: [
      grammar(
        'Participios irregulares',
        'Pocos, pero salen en cada conversación. Los derivados heredan la irregularidad: volver → vuelto, devolver → devuelto.',
        {
          headers: ['Infinitivo', 'Participio', 'Infinitivo', 'Participio'],
          rows: [
            ['hacer', 'hecho', 'ver', 'visto'],
            ['decir', 'dicho', 'escribir', 'escrito'],
            ['poner', 'puesto', 'volver', 'vuelto'],
            ['abrir', 'abierto', 'romper', 'roto'],
          ],
        },
      ),
    ],
    test: [
      match('Infinitivo y participio', [
        ['hacer', 'hecho'],
        ['decir', 'dicho'],
        ['escribir', 'escrito'],
        ['romper', 'roto'],
        ['volver', 'vuelto'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hoy he comido, ayer comí',
    ref: [G, 7, 2],
    learn: [
      grammar(
        '¿El periodo sigue abierto?',
        'En España: perfecto para un periodo que no ha terminado (hoy, esta semana, este año, alguna vez); indefinido para lo cerrado (ayer, el lunes, en 2019).',
        {
          headers: ['Perfecto', 'Indefinido'],
          rows: [
            ['hoy, esta mañana', 'ayer, anoche'],
            ['esta semana, este año', 'la semana pasada, en 2019'],
            ['ya, todavía no, nunca', 'hace dos días'],
          ],
        },
      ),
      culture(
        'En América',
        'En gran parte de Hispanoamérica se dice «hoy comí» donde en Madrid se diría «hoy he comido». Las dos formas son correctas.',
      ),
    ],
    test: [
      cloze(
        '¿Perfecto o indefinido? (español de España)',
        'Este año [he viajado] poco. El año pasado [viajé] mucho. Hoy [he comido] con Ana y ayer [comí] con Luis.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Alguna vez has…?',
    ref: [B, 12, 3],
    learn: [
      grammar(
        'Experiencias',
        'Se pregunta con «alguna vez» y se responde con «sí, una vez / dos veces», «todavía no» o «nunca». Estas palabras no se meten entre «haber» y el participio.',
      ),
      tip(
        'Primero perfecto, después indefinido',
        'Mientras se habla de la experiencia en general, perfecto. En cuanto se pregunta por aquella vez concreta – «¿y qué hiciste?» –, indefinido.',
      ),
    ],
    test: [
      match('Pregunta y respuesta', [
        ['¿Alguna vez has estado en México?', 'Sí, dos veces.'],
        ['¿Ya has probado el mole?', 'Todavía no, pero quiero.'],
        ['¿Has ido a un carnaval?', 'No, nunca he ido.'],
      ]),
      choice('Elija.', 'He estado en México. – ¿Y qué … allí?', ['has hecho', '*hiciste']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se comen doce uvas',
    ref: [B, 12, 4],
    learn: [
      grammar(
        'se + verbo',
        'Para costumbres, recetas y carteles, cuando no interesa quién lo hace. El verbo va en tercera persona y se ajusta a lo que viene detrás: «se come turrón», «se comen doce uvas».',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['En Navidad se come turrón.', 'An Weihnachten isst man Turrón.'],
            ['Se comen doce uvas.', 'Man isst zwölf Weintrauben.'],
            ['Aquí se habla catalán.', 'Hier spricht man Katalanisch.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'se come o se comen?',
        'En Navidad [se come] turrón. En Nochevieja [se comen] doce uvas. En Valencia [se habla] valenciano.',
        ['se hablan'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Suelo pasar la Nochebuena con mis padres',
    ref: [B, 12, 4],
    learn: [
      grammar(
        'soler + infinitivo',
        'Significa hacer algo con regularidad – en alemán «normalerweise» o «meistens». Cambia o → ue y no existe en indefinido.',
        {
          headers: ['Forma', 'Ejemplo'],
          rows: [
            ['suelo', 'Suelo pasar la Nochebuena con mis padres.'],
            ['sueles', '¿Sueles salir en Nochevieja?'],
            ['suele', 'La gente suele reunirse en la plaza.'],
            ['solemos', 'Solemos comer a las tres.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete con «soler».',
        'Los domingos [suelo] levantarme tarde. ¿Tú [sueles] cenar en casa? Los niños [suelen] disfrazarse en carnaval.',
        ['solo', 'solemos'],
      ),
    ],
  },

  // ------------------------------------------------ Gramática A2
  {
    kind: 'GRAMMAR',
    title: 'Me encanta, me interesa, me falta',
    ref: [G, 5, 3],
    learn: [
      grammar(
        'Verbos como gustar',
        'Todos siguen la misma estructura: pronombre + verbo en tercera persona + sujeto detrás. «encantar» ya es el grado máximo: «me encanta», nunca «me encanta mucho».',
        {
          headers: ['Verbo', 'Ejemplo', 'Sentido'],
          rows: [
            ['encantar', 'Me encanta esta canción.', 'gefällt mir sehr'],
            ['interesar', 'No me interesa la política.', 'interessiert mich nicht'],
            ['faltar', 'Nos faltan dos sillas.', 'uns fehlen'],
            ['parecer', '¿Qué te parece la idea?', 'was hältst du von'],
            ['molestar', 'Me molesta el ruido.', 'stört mich'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Nos [faltan] dos sillas. ¿Qué te [parece] el plan? Me [molesta] el ruido de la calle.',
        ['falta', 'molestan'],
      ),
      choice('Elija la frase correcta.', 'Elija.', [
        'Me encanta mucho el chocolate.',
        '*Me encanta el chocolate.',
        'Yo encanto el chocolate.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'un buen amigo, una gran idea',
    ref: [G, 8, 1],
    learn: [
      grammar(
        'Formas cortas',
        'Unos pocos adjetivos pierden la última letra delante de un sustantivo masculino singular. «grande» se acorta delante de los dos géneros y cambia de sentido: «un gran hombre» es un hombre importante.',
        {
          headers: ['Forma plena', 'Forma corta', 'Ejemplo'],
          rows: [
            ['bueno', 'buen', 'un buen amigo'],
            ['malo', 'mal', 'un mal día'],
            ['primero', 'primer', 'el primer piso'],
            ['tercero', 'tercer', 'el tercer intento'],
            ['grande', 'gran', 'una gran idea'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Hoy ha sido un [mal] día. Vivo en el [primer] piso. Carlos es un [buen] amigo y tuvo una [gran] idea.',
        ['malo', 'bueno', 'grande'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ya había terminado',
    ref: [G, 7, 3],
    learn: [
      grammar(
        'El pluscuamperfecto',
        'Donde el perfecto dice «he», el pluscuamperfecto dice «había» + participio. Cuenta lo que ya había ocurrido antes de otro momento del pasado.',
        {
          headers: ['Momento del relato', 'Lo anterior'],
          rows: [
            ['Cuando llegué,', 'la fiesta ya había terminado.'],
            ['No pude entrar', 'porque había perdido la llave.'],
            ['Me dijo', 'que nunca había estado en España.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Cuando llegamos al cine, la película ya [había] empezado. No tenía hambre porque [había] comido mucho.',
        ['ha', 'he'],
      ),
      choice('¿Qué pasó primero?', '«Cuando llamé, Ana ya se había ido.»', [
        'Llamé.',
        '*Ana se fue.',
      ]),
    ],
  },
]);
