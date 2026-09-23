import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 12: „Passiv, se und indirekte Rede“
 *
 * Vier Seiten. Das Schlusskapitel des Grammatikbuchs, und das einzige, das
 * zwei Themen zusammenfasst. Sie gehören zusammen, weil beide dasselbe tun:
 * Sie nehmen jemanden aus dem Satz heraus – das Passiv den Handelnden, die
 * indirekte Rede die sprechende Person.
 *
 * Aufbau: erst das Passiv mit „ser“, das im Spanischen seltener ist, als
 * deutsche Lernende erwarten, samt der Abgrenzung zum Zustand mit „estar“;
 * dann die Konstruktionen mit „se“, die den Platz des Passivs tatsächlich
 * füllen; dann die indirekte Rede mit ihrer Zeitenverschiebung; zuletzt
 * Fragen und Aufforderungen in indirekter Rede, wo der Subjuntivo aus Kapitel
 * 9 noch einmal gebraucht wird.
 *
 * Die Seite zum Passiv sagt ausdrücklich, dass man es selten braucht. Ein
 * Kapitel, das eine Form gründlich übt, ohne zu sagen, dass Muttersprachler
 * sie meiden, erzieht zu korrekten Sätzen, die niemand so sagt.
 */
const v = 1;

export const SPANISH_GRAMMAR_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Passiv mit ser.
  {
    order: 1,
    title: 'Das Passiv mit ser',
    subtitle: 'Korrekt – und selten',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esg12-p1-h1', type: 'HEADING', level: 1, text: 'Das Passiv mit ser' },
        {
          id: 'esg12-p1-intro',
          type: 'TEXT',
          text: 'El español tiene un pasivo igual que el alemán: «ser» más participio. Existe, es correcto y se entiende siempre. Pero se usa mucho menos: en la lengua hablada casi nunca, y en la escrita sobre todo en periódicos y textos oficiales. Conviene saber formarlo y saber que hay alternativas mejores.',
          translations: {
            de: 'Das Spanische hat ein Passiv wie das Deutsche: „ser“ plus Partizip. Es existiert, ist richtig und wird immer verstanden. Nur wird es weit seltener gebraucht: in der gesprochenen Sprache kaum, in der geschriebenen vor allem in Zeitungen und Amtstexten. Man sollte es bilden können und wissen, dass es bessere Alternativen gibt.',
          },
        },
        {
          id: 'esg12-p1-info-formacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La formación',
          text: 'Aquí, a diferencia del capítulo 7, el participio sí concuerda con el sujeto en género y número, porque va con «ser» y no con «haber». El agente se introduce con «por», y muchas veces no se menciona.',
          translations: {
            de: {
              title: 'Die Bildung',
              text: 'Anders als in Kapitel 7 gleicht sich das Partizip hier sehr wohl an Geschlecht und Zahl des Subjekts an, weil es bei „ser“ steht und nicht bei „haber“. Der Handelnde wird mit „por“ eingeführt und oft gar nicht genannt.',
            },
          },
          table: {
            headers: ['Activa', 'Pasiva'],
            rows: [
              ['El director firmó el contrato.', 'El contrato fue firmado por el director.'],
              ['La policía detuvo a los ladrones.', 'Los ladrones fueron detenidos por la policía.'],
              ['Publicarán la lista mañana.', 'La lista será publicada mañana.'],
              ['Han cerrado las oficinas.', 'Las oficinas han sido cerradas.'],
            ],
          },
        },
        {
          id: 'esg12-p1-info-estar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Pasiva de acción y pasiva de estado',
          text: 'Con «ser» se cuenta lo que ocurre; con «estar», el resultado que quedó. «La puerta fue cerrada a las ocho» nombra el acto de cerrarla; «la puerta está cerrada» describe cómo está ahora. Es la misma distinción del capítulo 2, aplicada al participio.',
          translations: {
            de: {
              title: 'Vorgangs- und Zustandspassiv',
              text: 'Mit „ser“ erzählt man, was geschieht; mit „estar“ das Ergebnis, das geblieben ist. „La puerta fue cerrada a las ocho“ nennt den Vorgang des Schließens, „la puerta está cerrada“ beschreibt den jetzigen Zustand. Es ist dieselbe Unterscheidung wie in Kapitel 2, auf das Partizip angewandt.',
            },
          },
          table: {
            headers: ['Con ser (acción)', 'Con estar (estado)'],
            rows: [
              ['La tienda fue abierta en 1980.', 'La tienda está abierta hasta las ocho.'],
              ['El problema fue resuelto ayer.', 'El problema ya está resuelto.'],
              ['Los platos fueron lavados.', 'Los platos están lavados.'],
            ],
          },
        },
        {
          id: 'esg12-p1-cloze',
          type: 'CLOZE',
          instruction: 'Transforme a la pasiva con «ser».',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La novela ' },
            { kind: 'GAP', gapId: 'a1', solution: ['fue escrita'], hint: 'escribir – Indefinido', width: 13 },
            { kind: 'TEXT', text: ' por una autora chilena.\nLas obras ' },
            { kind: 'GAP', gapId: 'a2', solution: ['serán terminadas'], hint: 'terminar – Futur', width: 17 },
            { kind: 'TEXT', text: ' en junio.\nEl acuerdo ' },
            { kind: 'GAP', gapId: 'a3', solution: ['ha sido firmado'], hint: 'firmar – Perfecto', width: 16 },
            { kind: 'TEXT', text: ' esta mañana.\nLa oficina ' },
            { kind: 'GAP', gapId: 'a4', solution: ['está cerrada'], hint: 'cerrar – Zustand', width: 13 },
            { kind: 'TEXT', text: ' los domingos.' },
          ],
        },
        {
          id: 'esg12-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: '¿Qué diferencia hay entre «la ventana fue rota» y «la ventana está rota»?',
          options: [
            { id: 'o1', text: 'Ninguna, son dos maneras de decir lo mismo.' },
            { id: 'o2', text: 'La primera cuenta el acto de romperla; la segunda describe cómo está ahora.' },
            { id: 'o3', text: 'La primera es más formal, la segunda más coloquial.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'No es cuestión de registro. «Ser» presenta el hecho como algo que ocurrió en un momento; «estar», el resultado que permanece.',
          explanationTranslations: {
            de: 'Es geht nicht um die Sprachebene. „Ser“ stellt den Vorgang dar, der zu einem Zeitpunkt geschah; „estar“ das Ergebnis, das bleibt.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Konstruktionen mit se.
  {
    order: 2,
    title: 'Die Konstruktionen mit se',
    subtitle: 'Was das Spanische stattdessen sagt',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esg12-p2-h1', type: 'HEADING', level: 1, text: 'Die Konstruktionen mit se' },
        {
          id: 'esg12-p2-intro',
          type: 'TEXT',
          text: 'Donde el alemán pone un pasivo, el español pone casi siempre un «se». «Se venden pisos», «se habla español», «aquí no se fuma». Son dos construcciones distintas que se parecen mucho, y merece la pena separarlas, porque una concuerda y la otra no.',
          translations: {
            de: 'Wo das Deutsche ein Passiv setzt, setzt das Spanische fast immer ein „se“. „Se venden pisos“, „se habla español“, „aquí no se fuma“. Es sind zwei verschiedene Konstruktionen, die einander sehr ähneln, und es lohnt sich, sie zu trennen: Die eine gleicht sich an, die andere nicht.',
          },
        },
        {
          id: 'esg12-p2-info-pasiva',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La pasiva refleja: el verbo concuerda',
          text: 'Se usa con cosas, nunca con personas. Lo afectado es el sujeto de la frase, así que el verbo va en singular o en plural según él: «se vende un piso», «se venden pisos». Este es el letrero que se ve en cualquier calle española.',
          translations: {
            de: {
              title: 'Das se-Passiv: Das Verb gleicht sich an',
              text: 'Es steht bei Sachen, nie bei Personen. Das Betroffene ist das Subjekt des Satzes, das Verb richtet sich also nach ihm: „se vende un piso“, „se venden pisos“. Das ist das Schild, das man in jeder spanischen Straße sieht.',
            },
          },
          table: {
            headers: ['Singular', 'Plural'],
            rows: [
              ['Se alquila apartamento.', 'Se alquilan apartamentos.'],
              ['Se busca camarero.', 'Se buscan camareros.'],
              ['Aquí se habla español.', 'Aquí se hablan tres idiomas.'],
              ['El museo se abrió en 1990.', 'Los museos se abrieron en 1990.'],
            ],
          },
        },
        {
          id: 'esg12-p2-info-impersonal',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La impersonal: el verbo se queda en singular',
          text: 'Cuando no hay nada afectado o se trata de personas, el verbo permanece en tercera persona del singular, sea cual sea el resto de la frase. Corresponde al «man» alemán: «se come bien aquí», «se trabaja mucho». Con personas lleva «a»: «se ayuda a los mayores», no «se ayudan los mayores».',
          translations: {
            de: {
              title: 'Das unpersönliche se: Das Verb bleibt im Singular',
              text: 'Ist nichts Betroffenes da oder geht es um Personen, bleibt das Verb in der dritten Person Singular, ganz gleich, was sonst im Satz steht. Es entspricht dem deutschen „man“: „se come bien aquí“, „se trabaja mucho“. Bei Personen steht ein „a“: „se ayuda a los mayores“, nicht „se ayudan los mayores“.',
            },
          },
          table: {
            headers: ['Impersonal', 'Traducción'],
            rows: [
              ['Se come muy bien en este bar.', 'Hier isst man sehr gut.'],
              ['No se puede aparcar aquí.', 'Hier kann man nicht parken.'],
              ['Se dice que va a dimitir.', 'Man sagt, er trete zurück.'],
              ['Se ayuda a los recién llegados.', 'Den Neuankömmlingen wird geholfen.'],
            ],
          },
        },
        {
          id: 'esg12-p2-info-accidental',
          type: 'INFO',
          variant: 'TIP',
          title: 'El «se» que quita la culpa',
          text: 'Una construcción muy española: cuando algo se estropea, se pierde o se olvida, la frase se monta de manera que nadie aparece como responsable. «Se me ha roto el vaso» no dice que yo lo rompiera, sino que se rompió y a mí me tocó. La estructura es «se + pronombre de objeto indirecto + verbo».',
          translations: {
            de: {
              title: 'Das „se“, das die Schuld nimmt',
              text: 'Eine sehr spanische Konstruktion: Geht etwas kaputt, verloren oder vergessen, wird der Satz so gebaut, dass niemand als verantwortlich erscheint. „Se me ha roto el vaso“ sagt nicht, dass ich es zerbrochen habe, sondern dass es zerbrach und mich traf. Der Bau ist „se + indirektes Objektpronomen + Verb“.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['Se me ha roto el móvil.', 'Mein Handy ist kaputtgegangen.'],
              ['Se nos olvidaron las llaves.', 'Wir haben die Schlüssel vergessen.'],
              ['Se le cayó el plato.', 'Ihm ist der Teller heruntergefallen.'],
              ['Se me ha perdido el billete.', 'Mir ist die Fahrkarte abhandengekommen.'],
            ],
          },
        },
        {
          id: 'esg12-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del verbo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En esta librería se ' },
            { kind: 'GAP', gapId: 'b1', solution: ['venden'], hint: 'vender – libros usados', width: 8 },
            { kind: 'TEXT', text: ' libros usados.\nAquí no se ' },
            { kind: 'GAP', gapId: 'b2', solution: ['puede'], hint: 'poder – unpersönlich', width: 7 },
            { kind: 'TEXT', text: ' entrar con bicicleta.\nSe ' },
            { kind: 'GAP', gapId: 'b3', solution: ['busca'], hint: 'buscar – un cocinero', width: 7 },
            { kind: 'TEXT', text: ' cocinero con experiencia.\nSe me ' },
            { kind: 'GAP', gapId: 'b4', solution: ['han olvidado'], hint: 'olvidar – las gafas', width: 14 },
            { kind: 'TEXT', text: ' las gafas en casa.\nEn el norte se ' },
            { kind: 'GAP', gapId: 'b5', solution: ['come'], hint: 'comer – unpersönlich', width: 6 },
            { kind: 'TEXT', text: ' muy bien.' },
          ],
        },
        {
          id: 'esg12-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles están bien construidas?',
          options: [
            { id: 'q1', text: 'Se alquilan habitaciones.' },
            { id: 'q2', text: 'Se alquila habitaciones.' },
            { id: 'q3', text: 'Se ayuda a los estudiantes.' },
            { id: 'q4', text: 'Se ayudan a los estudiantes.' },
          ],
          multiple: true,
          solution: ['q1', 'q3'],
          explanation:
            'Con cosas el verbo concuerda: «habitaciones» es plural, así que «se alquilan». Con personas la construcción es impersonal y lleva «a», por lo que el verbo no concuerda y queda en singular.',
          explanationTranslations: {
            de: 'Bei Sachen gleicht sich das Verb an: „habitaciones“ ist Plural, also „se alquilan“. Bei Personen ist die Konstruktion unpersönlich und trägt ein „a“, das Verb gleicht sich also nicht an und bleibt im Singular.',
          },
        },
        {
          id: 'esg12-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con su sentido.',
          left: [
            { id: 'm1', text: 'Se rompió el cristal.' },
            { id: 'm2', text: 'Se me rompió el cristal.' },
            { id: 'm3', text: 'Rompí el cristal.' },
            { id: 'm4', text: 'El cristal fue roto por alguien.' },
          ],
          right: [
            { id: 'n1', text: 'Die Scheibe ging kaputt – niemand wird genannt.' },
            { id: 'n2', text: 'Mir ist die Scheibe kaputtgegangen.' },
            { id: 'n3', text: 'Ich habe die Scheibe zerbrochen.' },
            { id: 'n4', text: 'Die Scheibe wurde von jemandem zerbrochen.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Rede, Aussagen.
  {
    order: 3,
    title: 'Die indirekte Rede',
    subtitle: 'Was jemand gesagt hat',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esg12-p3-h1', type: 'HEADING', level: 1, text: 'Die indirekte Rede' },
        {
          id: 'esg12-p3-intro',
          type: 'TEXT',
          text: 'Aquí hay una buena noticia para quien viene del alemán: el español no usa subjuntivo en el estilo indirecto. «Dice que está enfermo» va en indicativo, sin excepción. Lo que sí cambia es el tiempo verbal, y solo cuando el verbo introductor está en pasado.',
          translations: {
            de: 'Hier eine gute Nachricht für alle, die vom Deutschen kommen: Das Spanische verwendet in der indirekten Rede keinen Subjuntivo. „Dice que está enfermo“ steht im Indikativ, ausnahmslos. Was sich ändert, ist die Zeitstufe – und auch die nur, wenn das einleitende Verb in der Vergangenheit steht.',
          },
        },
        {
          id: 'esg12-p3-info-presente',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbo introductor en presente: nada cambia',
          text: 'Si se dice «dice que», «cuenta que», «explica que», el tiempo de la frase original se mantiene tal cual. Solo hay que ajustar las personas y los posesivos, como en cualquier idioma.',
          translations: {
            de: {
              title: 'Einleitendes Verb im Präsens: nichts ändert sich',
              text: 'Heißt es „dice que“, „cuenta que“, „explica que“, bleibt die Zeit des ursprünglichen Satzes unverändert. Anzupassen sind nur die Personen und Possessivbegleiter, wie in jeder Sprache.',
            },
          },
          table: {
            headers: ['Estilo directo', 'Estilo indirecto'],
            rows: [
              ['«Estoy cansado.»', 'Dice que está cansado.'],
              ['«Vendré mañana.»', 'Dice que vendrá mañana.'],
              ['«No he terminado.»', 'Dice que no ha terminado.'],
              ['«Mi coche no arranca.»', 'Dice que su coche no arranca.'],
            ],
          },
        },
        {
          id: 'esg12-p3-info-pasado',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Verbo introductor en pasado: todo retrocede un paso',
          text: 'Con «dijo que», «contó que», «me explicó que», cada tiempo baja un escalón hacia atrás. El imperfecto y el pluscuamperfecto ya están abajo del todo y no se mueven, lo cual simplifica bastante la tabla.',
          translations: {
            de: {
              title: 'Einleitendes Verb in der Vergangenheit: alles rückt einen Schritt zurück',
              text: 'Bei „dijo que“, „contó que“, „me explicó que“ rückt jede Zeit eine Stufe zurück. Imperfecto und Pluscuamperfecto sind bereits ganz unten und bewegen sich nicht mehr, was die Tabelle deutlich vereinfacht.',
            },
          },
          table: {
            headers: ['Estilo directo', 'Estilo indirecto (pasado)'],
            rows: [
              ['presente: «trabajo»', 'imperfecto: dijo que trabajaba'],
              ['indefinido: «trabajé»', 'pluscuamperfecto: dijo que había trabajado'],
              ['perfecto: «he trabajado»', 'pluscuamperfecto: dijo que había trabajado'],
              ['futuro: «trabajaré»', 'condicional: dijo que trabajaría'],
              ['imperfecto: «trabajaba»', 'imperfecto: dijo que trabajaba'],
              ['pluscuamperfecto: «había trabajado»', 'igual: dijo que había trabajado'],
            ],
          },
        },
        {
          id: 'esg12-p3-cloze',
          type: 'CLOZE',
          instruction: 'Pase al estilo indirecto en pasado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«Vivo en Sevilla.» → Dijo que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['vivía'], hint: 'vivir, él', width: 8 },
            { kind: 'TEXT', text: ' en Sevilla.\n«Te llamaré.» → Prometió que me ' },
            { kind: 'GAP', gapId: 'c2', solution: ['llamaría'], hint: 'llamar, él', width: 10 },
            { kind: 'TEXT', text: '.\n«He perdido el tren.» → Contó que ' },
            { kind: 'GAP', gapId: 'c3', solution: ['había perdido'], hint: 'perder, él', width: 15 },
            { kind: 'TEXT', text: ' el tren.\n«No puedo venir.» → Explicó que no ' },
            { kind: 'GAP', gapId: 'c4', solution: ['podía'], hint: 'poder, él', width: 8 },
            { kind: 'TEXT', text: ' venir.\n«Trabajaba en un banco.» → Me dijo que ' },
            { kind: 'GAP', gapId: 'c5', solution: ['trabajaba'], hint: 'trabajar, él', width: 11 },
            { kind: 'TEXT', text: ' en un banco.' },
          ],
        },
        {
          id: 'esg12-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Er sagte, er sei krank.»',
          options: [
            { id: 'r1', text: 'Dijo que estaba enfermo.' },
            { id: 'r2', text: 'Dijo que esté enfermo.' },
            { id: 'r3', text: 'Dijo que estuviera enfermo.' },
          ],
          multiple: false,
          solution: ['r1'],
          explanation:
            'El estilo indirecto español no lleva subjuntivo: el presente «estoy» pasa al imperfecto de indicativo «estaba». El subjuntivo alemán de la cita no se traduce por un subjuntivo español.',
          explanationTranslations: {
            de: 'Die spanische indirekte Rede steht nicht im Subjuntivo: Das Präsens „estoy“ wird zum Imperfecto des Indikativs „estaba“. Der deutsche Konjunktiv der Redewiedergabe wird nicht mit einem spanischen Subjuntivo übersetzt.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Fragen, Aufforderungen und die Verschiebung der Angaben.
  {
    order: 4,
    title: 'Fragen und Aufforderungen',
    subtitle: 'Und was mit „hier“ und „morgen“ geschieht',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esg12-p4-h1', type: 'HEADING', level: 1, text: 'Fragen und Aufforderungen' },
        {
          id: 'esg12-p4-intro',
          type: 'TEXT',
          text: 'No solo se repiten afirmaciones: también preguntas y órdenes. Cada una tiene su manera, y la de las órdenes trae de vuelta el subjuntivo del capítulo 9 – el único sitio del estilo indirecto donde aparece.',
          translations: {
            de: 'Wiedergegeben werden nicht nur Aussagen, sondern auch Fragen und Aufforderungen. Jede hat ihre eigene Art, und die der Aufforderungen holt den Subjuntivo aus Kapitel 9 zurück – die einzige Stelle der indirekten Rede, an der er auftaucht.',
          },
        },
        {
          id: 'esg12-p4-info-preguntas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Preguntas: «si» o la palabra interrogativa',
          text: 'Si la pregunta era de sí o no, se introduce con «si». Si llevaba palabra interrogativa, esa misma palabra sirve de enlace y conserva la tilde. En los dos casos desaparecen los signos de interrogación y el orden vuelve a ser el normal: sujeto delante del verbo.',
          translations: {
            de: {
              title: 'Fragen: „si“ oder das Fragewort',
              text: 'War es eine Ja-Nein-Frage, leitet „si“ ein. Stand ein Fragewort, dient dieses als Anschluss und behält seinen Akzent. In beiden Fällen entfallen die Fragezeichen, und die Wortstellung wird wieder die gewöhnliche: Subjekt vor dem Verb.',
            },
          },
          table: {
            headers: ['Pregunta directa', 'Pregunta indirecta'],
            rows: [
              ['«¿Vienes mañana?»', 'Preguntó si venía al día siguiente.'],
              ['«¿Dónde está la estación?»', 'Preguntó dónde estaba la estación.'],
              ['«¿Cuánto cuesta?»', 'Quiso saber cuánto costaba.'],
              ['«¿Has hablado con él?»', 'Me preguntó si había hablado con él.'],
            ],
          },
        },
        {
          id: 'esg12-p4-info-ordenes',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Órdenes: aquí sí hay subjuntivo',
          text: 'El imperativo no se puede repetir tal cual, porque solo existe en la boca de quien manda. Al referirlo se convierte en subjuntivo: presente si el verbo introductor está en presente, imperfecto si está en pasado. Es exactamente la construcción de «querer que» del capítulo 9.',
          translations: {
            de: {
              title: 'Aufforderungen: hier steht der Subjuntivo',
              text: 'Der Imperativ lässt sich nicht unverändert wiederholen, weil es ihn nur im Mund des Auffordernden gibt. Bei der Wiedergabe wird er zum Subjuntivo: Präsens, wenn das einleitende Verb im Präsens steht, Imperfecto, wenn es in der Vergangenheit steht. Es ist genau die Konstruktion von „querer que“ aus Kapitel 9.',
            },
          },
          table: {
            headers: ['Orden directa', 'Referida (presente)', 'Referida (pasado)'],
            rows: [
              ['«Llámame.»', 'Dice que lo llame.', 'Dijo que lo llamara.'],
              ['«No llegues tarde.»', 'Pide que no llegue tarde.', 'Pidió que no llegara tarde.'],
              ['«Espérame aquí.»', 'Dice que la espere allí.', 'Dijo que la esperara allí.'],
            ],
          },
        },
        {
          id: 'esg12-p4-info-deicticos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Lo que cambia además del verbo',
          text: 'Quien repite lo dicho está en otro sitio y en otro momento, así que las palabras que señalan tiempo y lugar tienen que moverse con él. Es la parte que más se olvida, y la que más delata una traducción hecha palabra por palabra.',
          translations: {
            de: {
              title: 'Was sich außer dem Verb ändert',
              text: 'Wer das Gesagte wiedergibt, steht an einem anderen Ort und in einem anderen Moment, also müssen die Wörter für Zeit und Ort mitwandern. Dieser Teil wird am häufigsten vergessen und verrät eine Wort-für-Wort-Übertragung am deutlichsten.',
            },
          },
          table: {
            headers: ['Directo', 'Indirecto'],
            rows: [
              ['hoy', 'aquel día'],
              ['mañana', 'al día siguiente'],
              ['ayer', 'el día anterior'],
              ['aquí', 'allí'],
              ['este / esta', 'aquel / aquella'],
              ['ahora', 'entonces'],
            ],
          },
        },
        {
          id: 'esg12-p4-cloze',
          type: 'CLOZE',
          instruction: 'Pase al estilo indirecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«¿Dónde vives?» → Me preguntó dónde ' },
            { kind: 'GAP', gapId: 'd1', solution: ['vivía'], hint: 'vivir, yo', width: 8 },
            { kind: 'TEXT', text: '.\n«¿Tienes hambre?» → Preguntó si ' },
            { kind: 'GAP', gapId: 'd2', solution: ['tenía'], hint: 'tener, yo', width: 7 },
            { kind: 'TEXT', text: ' hambre.\n«Cierra la puerta.» → Me dijo que ' },
            { kind: 'GAP', gapId: 'd3', solution: ['cerrara'], hint: 'cerrar, yo – Subj. Imperfecto', width: 9 },
            { kind: 'TEXT', text: ' la puerta.\n«No se lo cuentes a nadie.» → Pidió que no se lo ' },
            { kind: 'GAP', gapId: 'd4', solution: ['contara'], hint: 'contar, yo', width: 9 },
            { kind: 'TEXT', text: ' a nadie.\n«Vuelvo mañana.» → Dijo que volvía ' },
            { kind: 'GAP', gapId: 'd5', solution: ['al día siguiente'], hint: 'mañana → ?', width: 17 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esg12-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: 'Alguien le dijo ayer: «Ven a mi casa mañana.» ¿Cómo lo cuenta hoy?',
          options: [
            { id: 'z1', text: 'Me dijo que fuera a su casa hoy.' },
            { id: 'z2', text: 'Me dijo que ven a su casa mañana.' },
            { id: 'z3', text: 'Me dijo que vaya a su casa hoy.' },
            { id: 'z4', text: 'Me pidió que fuera a su casa hoy.' },
          ],
          multiple: true,
          solution: ['z1', 'z4'],
          explanation:
            'El imperativo pasa a subjuntivo, y como el verbo introductor está en pasado, se usa el imperfecto: «fuera». El «mañana» de ayer es el «hoy» de ahora.',
          explanationTranslations: {
            de: 'Der Imperativ wird zum Subjuntivo, und da das einleitende Verb in der Vergangenheit steht, nimmt man das Imperfecto: „fuera“. Das „morgen“ von gestern ist das „heute“ von jetzt.',
          },
        },
        {
          id: 'esg12-p4-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'El médico' },
            { id: 'w2', text: 'me dijo' },
            { id: 'w3', text: 'que' },
            { id: 'w4', text: 'descansara' },
            { id: 'w5', text: 'unos días.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'esg12-p4-writing',
          type: 'WRITING',
          instruction: 'Geben Sie ein Gespräch wieder.',
          prompt:
            'Cuente una conversación que tuvo hace poco: con un médico, un casero, un compañero de trabajo. No copie las palabras exactas: refiéralas. Escriba de ocho a doce frases con al menos dos preguntas indirectas y dos órdenes referidas.',
          minWords: 50,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'La semana pasada llamé al casero porque la calefacción no funcionaba. Le expliqué que llevaba tres días sin agua caliente y que en casa hacía mucho frío. Me preguntó si había mirado el cuadro eléctrico y cuánto tiempo hacía que no revisaban la caldera. Le dije que no lo sabía, porque acababa de mudarme. Entonces me pidió que le mandara una foto del aparato y que no tocara nada hasta que viniera el técnico. Prometió que pasaría al día siguiente por la mañana. Al final vino dos días más tarde, pero lo arregló en media hora.',
        },
      ],
    },
  },
];
