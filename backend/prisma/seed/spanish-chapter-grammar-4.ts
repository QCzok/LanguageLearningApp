import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 4: „Pronomen“
 *
 * Vier Seiten. Das Kapitel besteht aus zwei Fragen, die man auseinanderhalten
 * muss: welches Pronomen – und wo es steht. Die erste ist leicht, die zweite
 * ist der Grund, warum das Kapitel vier Seiten braucht.
 *
 * Aufbau: erst die Subjektpronomen, deren interessanteste Eigenschaft ihr
 * Fehlen ist; dann das direkte und das indirekte Objekt getrennt, weil das
 * Deutsche hier mit Akkusativ und Dativ arbeitet und die Zuordnung nicht
 * deckungsgleich ist; zuletzt beide im selben Satz, samt dem Austausch von
 * „le“ gegen „se“, der ohne Erklärung willkürlich wirkt.
 *
 * Die Stellungsregel steht auf Seite 4 gesammelt und nicht verteilt: Sie gilt
 * für alle Objektpronomen gleichermaßen, und wer sie an vier Stellen halb
 * liest, behält sie nicht.
 */
const v = 1;

export const SPANISH_GRAMMAR_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Subjektpronomen und die Frage, wann man sie überhaupt setzt.
  {
    order: 1,
    title: 'Subjektpronomen',
    subtitle: 'Und warum sie meistens fehlen',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'esg4-p1-h1', type: 'HEADING', level: 1, text: 'Subjektpronomen' },
        {
          id: 'esg4-p1-intro',
          type: 'TEXT',
          text: 'Lo más llamativo de los pronombres de sujeto españoles es que casi nunca se usan. La terminación del verbo ya dice quién actúa, así que repetirlo con un pronombre resulta redundante. Quien traduce del alemán palabra por palabra acaba escribiendo «yo» en cada frase, y eso suena insistente, como si se estuviera contradiciendo a alguien.',
          translations: {
            de: 'Das Auffälligste an den spanischen Subjektpronomen ist, dass man sie fast nie verwendet. Die Verbendung sagt schon, wer handelt; es mit einem Pronomen zu wiederholen, ist überflüssig. Wer aus dem Deutschen Wort für Wort überträgt, schreibt am Ende in jeden Satz ein „yo“ – und das klingt beharrlich, als widerspräche man jemandem.',
          },
        },
        {
          id: 'esg4-p1-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las formas',
          text: 'El español distingue el género también en el plural: «nosotras» es un grupo de mujeres, «nosotros» un grupo mixto o de hombres. Y tiene dos formas de cortesía, «usted» y «ustedes», que llevan el verbo en tercera persona aunque se dirijan a la persona que escucha.',
          translations: {
            de: {
              title: 'Die Formen',
              text: 'Das Spanische unterscheidet das Geschlecht auch im Plural: „nosotras“ ist eine Gruppe von Frauen, „nosotros“ eine gemischte oder männliche. Und es hat zwei Höflichkeitsformen, „usted“ und „ustedes“, die das Verb in der dritten Person führen, obwohl sie die angesprochene Person meinen.',
            },
          },
          table: {
            headers: ['Singular', 'Plural'],
            rows: [
              ['yo – ich', 'nosotros / nosotras – wir'],
              ['tú – du', 'vosotros / vosotras – ihr'],
              ['él – er', 'ellos – sie'],
              ['ella – sie', 'ellas – sie (weiblich)'],
              ['usted – Sie', 'ustedes – Sie (mehrere)'],
            ],
          },
        },
        {
          id: 'esg4-p1-info-cuando',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuándo sí se pone',
          text: 'Hay tres situaciones en las que el pronombre no sobra. Fuera de ellas, se omite. La tercera es puramente práctica: «hablaba» puede ser yo, él, ella o usted, así que a veces el pronombre es la única manera de saber de quién se habla.',
          translations: {
            de: {
              title: 'Wann man es doch setzt',
              text: 'In drei Fällen ist das Pronomen nicht überflüssig. Außerhalb davon bleibt es weg. Der dritte ist rein praktisch: „hablaba“ kann yo, él, ella oder usted sein – manchmal ist das Pronomen die einzige Möglichkeit, zu erkennen, von wem die Rede ist.',
            },
          },
          table: {
            headers: ['Motivo', 'Ejemplo'],
            rows: [
              ['contraste', 'Yo trabajo, tú descansas.'],
              ['énfasis', '¿Quién lo dice? – Lo digo yo.'],
              ['ambigüedad', 'Ella no lo sabía, pero él sí.'],
              ['cortesía con usted', '¿Usted es el señor Ruiz?'],
            ],
          },
        },
        {
          id: 'esg4-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase que suena natural en español.',
          question: 'Una persona se presenta en una fiesta. ¿Qué diría?',
          options: [
            { id: 'o1', text: 'Yo me llamo Marta y yo soy de Bilbao y yo trabajo en un banco.' },
            { id: 'o2', text: 'Me llamo Marta, soy de Bilbao y trabajo en un banco.' },
            { id: 'o3', text: 'Llamo Marta, soy de Bilbao y trabajo en un banco.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'La segunda omite los pronombres, que no hacen falta. La primera los repite y suena a contradicción. La tercera pierde el «me» de «llamarse», que sí es obligatorio: sin él, «llamo» significa «ich rufe an».',
          explanationTranslations: {
            de: 'Die zweite lässt die Pronomen weg, die nicht gebraucht werden. Die erste wiederholt sie und klingt nach Widerspruch. Der dritten fehlt das „me“ von „llamarse“, das sehr wohl Pflicht ist: Ohne es heißt „llamo“ „ich rufe an“.',
          },
        },
        {
          id: 'esg4-p1-info-tuteo',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Vosotros y ustedes',
          text: 'En España se distingue el plural cercano («vosotros») del de cortesía («ustedes»). En toda Hispanoamérica «vosotros» no existe: se usa «ustedes» para hablar con dos amigos y con dos desconocidos por igual. No es un error ni un descuido, es la norma de casi cuatrocientos millones de hablantes.',
          translations: {
            de: {
              title: 'Vosotros und ustedes',
              text: 'In Spanien unterscheidet man den vertrauten Plural („vosotros“) vom höflichen („ustedes“). In ganz Hispanoamerika gibt es „vosotros“ nicht: „ustedes“ gilt für zwei Freunde ebenso wie für zwei Fremde. Das ist kein Fehler und keine Nachlässigkeit, sondern die Norm von fast vierhundert Millionen Sprechern.',
            },
          },
        },
        {
          id: 'esg4-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la forma verbal con el pronombre que le corresponde.',
          left: [
            { id: 'l1', text: 'sois' },
            { id: 'l2', text: 'somos' },
            { id: 'l3', text: 'eres' },
            { id: 'l4', text: 'son' },
          ],
          right: [
            { id: 'r1', text: 'vosotros' },
            { id: 'r2', text: 'nosotros' },
            { id: 'r3', text: 'tú' },
            { id: 'r4', text: 'ustedes' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – direktes Objekt.
  {
    order: 2,
    title: 'Das direkte Objekt',
    subtitle: 'lo, la, los, las',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg4-p2-h1', type: 'HEADING', level: 1, text: 'Das direkte Objekt' },
        {
          id: 'esg4-p2-intro',
          type: 'TEXT',
          text: 'El objeto directo es lo que recibe la acción sin preposición: se compra un libro, se ve una película, se conoce a Marta. Para no repetir el nombre se pone un pronombre: «¿El libro? Lo compré ayer».',
          translations: {
            de: 'Das direkte Objekt ist das, was die Handlung ohne Präposition trifft: Man kauft ein Buch, sieht einen Film, kennt Marta. Um den Namen nicht zu wiederholen, setzt man ein Pronomen: „¿El libro? Lo compré ayer“.',
          },
        },
        {
          id: 'esg4-p2-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las formas del objeto directo',
          text: 'Solo la tercera persona distingue género: «lo» para masculino, «la» para femenino. Las otras personas tienen una sola forma, y son además las mismas que las del objeto indirecto – lo que simplifica mucho la página siguiente.',
          translations: {
            de: {
              title: 'Die Formen des direkten Objekts',
              text: 'Nur die dritte Person unterscheidet das Geschlecht: „lo“ männlich, „la“ weiblich. Die übrigen Personen haben nur eine Form – und es sind dieselben wie beim indirekten Objekt, was die nächste Seite deutlich erleichtert.',
            },
          },
          table: {
            headers: ['Persona', 'Pronombre', 'Ejemplo'],
            rows: [
              ['a mí', 'me', 'Ella me ve.'],
              ['a ti', 'te', 'Yo te conozco.'],
              ['a él / a usted (m.) / eso', 'lo', 'Lo compro.'],
              ['a ella / a usted (f.) / eso', 'la', 'La veo.'],
              ['a nosotros', 'nos', 'Nos llaman.'],
              ['a vosotros', 'os', 'Os esperamos.'],
              ['a ellos / a ustedes (m.)', 'los', 'Los conozco.'],
              ['a ellas / a ustedes (f.)', 'las', 'Las invito.'],
            ],
          },
        },
        {
          id: 'esg4-p2-info-a',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La «a» ante personas',
          text: 'Una particularidad que el alemán no tiene: cuando el objeto directo es una persona concreta, lleva «a» delante. «Veo la casa», pero «Veo a Marta». No es un dativo ni convierte la frase en otra cosa – sigue siendo objeto directo, y el pronombre que lo sustituye es «la», no «le».',
          translations: {
            de: {
              title: 'Das „a“ vor Personen',
              text: 'Eine Eigenheit, die das Deutsche nicht kennt: Ist das direkte Objekt eine bestimmte Person, steht ein „a“ davor. „Veo la casa“, aber „Veo a Marta“. Das ist kein Dativ und macht den Satz zu nichts anderem – es bleibt direktes Objekt, und das Pronomen dafür ist „la“, nicht „le“.',
            },
          },
          table: {
            headers: ['Sin «a»', 'Con «a»'],
            rows: [
              ['Busco un piso.', 'Busco a mi hermano.'],
              ['Veo la televisión.', 'Veo a los niños.'],
              ['Conozco Madrid.', 'Conozco a Pedro.'],
            ],
          },
        },
        {
          id: 'esg4-p2-cloze',
          type: 'CLOZE',
          instruction: 'Sustituya la parte subrayada por el pronombre correcto.',
          wordBank: ['lo', 'la', 'los', 'las'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¿Dónde está el periódico? – ' },
            { kind: 'GAP', gapId: 'd1', solution: ['Lo'], hint: 'el periódico', width: 4 },
            { kind: 'TEXT', text: ' tengo yo.\n¿Conoces a mi hermana? – Sí, ' },
            { kind: 'GAP', gapId: 'd2', solution: ['la'], hint: 'a mi hermana', width: 4 },
            { kind: 'TEXT', text: ' conozco.\n¿Compraste las entradas? – Sí, ' },
            { kind: 'GAP', gapId: 'd3', solution: ['las'], hint: 'las entradas', width: 5 },
            { kind: 'TEXT', text: ' compré ayer.\n¿Ves a los niños? – No, no ' },
            { kind: 'GAP', gapId: 'd4', solution: ['los'], hint: 'a los niños', width: 5 },
            { kind: 'TEXT', text: ' veo.' },
          ],
        },
        {
          id: 'esg4-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: 'Hablamos de una película. ¿Cuáles de estas respuestas son correctas?',
          options: [
            { id: 'q1', text: 'La vi el sábado.' },
            { id: 'q2', text: 'Lo vi el sábado.' },
            { id: 'q3', text: 'Vi la el sábado.' },
            { id: 'q4', text: 'No la he visto todavía.' },
          ],
          multiple: true,
          solution: ['q1', 'q4'],
          explanation:
            '«Película» es femenino, así que el pronombre es «la». Y va delante del verbo conjugado, también delante de la negación: «no la he visto», nunca «vi la».',
          explanationTranslations: {
            de: '„Película“ ist weiblich, das Pronomen also „la“. Und es steht vor dem konjugierten Verb, auch vor der Verneinung: „no la he visto“, niemals „vi la“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirektes Objekt.
  {
    order: 3,
    title: 'Das indirekte Objekt',
    subtitle: 'me, te, le, nos, os, les',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg4-p3-h1', type: 'HEADING', level: 1, text: 'Das indirekte Objekt' },
        {
          id: 'esg4-p3-intro',
          type: 'TEXT',
          text: 'El objeto indirecto dice a quién o para quién ocurre algo: se escribe una carta a alguien, se da un regalo a alguien, se explica algo a alguien. Las formas son iguales que las del objeto directo salvo en la tercera persona, donde aparecen «le» y «les» – y esas dos no distinguen masculino de femenino.',
          translations: {
            de: 'Das indirekte Objekt sagt, wem oder für wen etwas geschieht: Man schreibt jemandem einen Brief, gibt jemandem ein Geschenk, erklärt jemandem etwas. Die Formen gleichen denen des direkten Objekts, außer in der dritten Person, wo „le“ und „les“ stehen – und diese beiden unterscheiden männlich und weiblich nicht.',
          },
        },
        {
          id: 'esg4-p3-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las formas del objeto indirecto',
          text: 'Como «le» sirve para él, ella y usted, muchas veces no queda claro de quién se habla. Por eso se añade con frecuencia «a él», «a ella», «a usted» – no como repetición torpe, sino como la única manera de precisarlo.',
          translations: {
            de: {
              title: 'Die Formen des indirekten Objekts',
              text: 'Da „le“ für él, ella und usted gilt, bleibt oft unklar, von wem die Rede ist. Deshalb setzt man häufig „a él“, „a ella“, „a usted“ hinzu – nicht als ungeschickte Wiederholung, sondern als einzige Möglichkeit, es zu klären.',
            },
          },
          table: {
            headers: ['Persona', 'Pronombre', 'Ejemplo'],
            rows: [
              ['a mí', 'me', 'Me escribe cada semana.'],
              ['a ti', 'te', 'Te doy mi número.'],
              ['a él / a ella / a usted', 'le', 'Le explico la regla.'],
              ['a nosotros', 'nos', 'Nos manda un correo.'],
              ['a vosotros', 'os', 'Os cuento una cosa.'],
              ['a ellos / a ellas / a ustedes', 'les', 'Les pregunto la hora.'],
            ],
          },
        },
        {
          id: 'esg4-p3-info-redundante',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El pronombre se repite aunque esté el nombre',
          text: 'Aquí el español hace algo que al principio parece un error: aunque la frase ya diga a quién, el pronombre se pone igualmente. Se dice «Le doy el libro a Marta», no «Doy el libro a Marta». Con el objeto indirecto esa repetición es la norma, no una opción – y sin ella la frase suena incompleta.',
          translations: {
            de: {
              title: 'Das Pronomen steht auch neben dem Namen',
              text: 'Hier tut das Spanische etwas, das zunächst wie ein Fehler aussieht: Obwohl der Satz schon sagt, wem, steht das Pronomen trotzdem. Man sagt „Le doy el libro a Marta“, nicht „Doy el libro a Marta“. Beim indirekten Objekt ist diese Doppelung die Regel und keine Möglichkeit – ohne sie klingt der Satz unfertig.',
            },
          },
          table: {
            headers: ['Correcto', 'Poco natural'],
            rows: [
              ['Le dije la verdad a mi jefe.', 'Dije la verdad a mi jefe.'],
              ['Les mandé un correo a los clientes.', 'Mandé un correo a los clientes.'],
              ['¿Le has preguntado al médico?', '¿Has preguntado al médico?'],
            ],
          },
        },
        {
          id: 'esg4-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pronombre de objeto indirecto.',
          wordBank: ['me', 'te', 'le', 'nos', 'les'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A mi madre ' },
            { kind: 'GAP', gapId: 'i1', solution: ['le'], width: 4 },
            { kind: 'TEXT', text: ' regalé unas flores.\n¿' },
            { kind: 'GAP', gapId: 'i2', solution: ['Te'], width: 4 },
            { kind: 'TEXT', text: ' presto mi bici?\nEl profesor ' },
            { kind: 'GAP', gapId: 'i3', solution: ['nos'], width: 5 },
            { kind: 'TEXT', text: ' explicó el ejercicio.\nA mis padres ' },
            { kind: 'GAP', gapId: 'i4', solution: ['les'], width: 5 },
            { kind: 'TEXT', text: ' gusta viajar.\n¿' },
            { kind: 'GAP', gapId: 'i5', solution: ['Me'], width: 4 },
            { kind: 'TEXT', text: ' puedes dar tu dirección?' },
          ],
        },
        {
          id: 'esg4-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con lo que sustituye el pronombre.',
          left: [
            { id: 'm1', text: 'La llamé por la tarde.' },
            { id: 'm2', text: 'Le escribí por la tarde.' },
            { id: 'm3', text: 'Las invité a cenar.' },
            { id: 'm4', text: 'Les mandé un mensaje.' },
          ],
          right: [
            { id: 'n1', text: 'objeto directo, femenino singular' },
            { id: 'n2', text: 'objeto indirecto, singular' },
            { id: 'n3', text: 'objeto directo, femenino plural' },
            { id: 'n4', text: 'objeto indirecto, plural' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esg4-p3-info-leismo',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'El leísmo',
          text: 'En el centro y el norte de España mucha gente dice «le vi» en lugar de «lo vi» cuando se refiere a un hombre. La Academia lo acepta solo en ese caso concreto – persona masculina y singular. Para quien aprende, lo práctico es usar «lo» y «la» para el objeto directo: siempre es correcto en todas partes.',
          translations: {
            de: {
              title: 'Der leísmo',
              text: 'In Zentral- und Nordspanien sagen viele „le vi“ statt „lo vi“, wenn ein Mann gemeint ist. Die Akademie lässt das nur in genau diesem Fall zu – männliche Person, Singular. Für Lernende ist es praktisch, beim direkten Objekt „lo“ und „la“ zu verwenden: Das ist überall richtig.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – beide Pronomen im selben Satz und die Stellungsregel.
  {
    order: 4,
    title: 'Beide Pronomen im Satz',
    subtitle: 'Reihenfolge, se lo, und wohin sie gehören',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg4-p4-h1', type: 'HEADING', level: 1, text: 'Beide Pronomen im Satz' },
        {
          id: 'esg4-p4-intro',
          type: 'TEXT',
          text: 'Cuando los dos pronombres aparecen juntos, el orden es fijo y no admite variación: primero el indirecto, después el directo. En alemán se ordena al revés («Ich gebe es ihm»), y de ahí viene el error más frecuente.',
          translations: {
            de: 'Treten beide Pronomen zusammen auf, ist die Reihenfolge fest und lässt keine Wahl: erst das indirekte, dann das direkte. Im Deutschen ist es umgekehrt („Ich gebe es ihm“), und daher rührt der häufigste Fehler.',
          },
        },
        {
          id: 'esg4-p4-info-orden',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Primero el indirecto',
          text: 'Una regla sin excepciones. Quien se acuerda de que el español coloca antes a la persona y después la cosa, acierta siempre.',
          translations: {
            de: {
              title: 'Zuerst das indirekte',
              text: 'Eine Regel ohne Ausnahme. Wer sich merkt, dass das Spanische erst die Person und dann die Sache setzt, trifft es immer.',
            },
          },
          table: {
            headers: ['Frase completa', 'Con pronombres'],
            rows: [
              ['Doy el libro a Marta.', 'Se lo doy.'],
              ['Me manda las fotos.', 'Me las manda.'],
              ['Te explico la regla.', 'Te la explico.'],
              ['Nos trae el café.', 'Nos lo trae.'],
            ],
          },
        },
        {
          id: 'esg4-p4-info-se',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Por qué «le lo» se convierte en «se lo»',
          text: 'Si los dos pronombres empiezan por l-, el primero cambia a «se». No es una regla de gramática sino de sonido: «le lo doy» es trabalenguas, «se lo doy» no. Cuidado con el efecto secundario: ese «se» no dice ya si se trata de él, de ella o de ustedes, así que muchas veces hay que añadir «a él», «a ella», «a ellos».',
          translations: {
            de: {
              title: 'Warum aus „le lo“ ein „se lo“ wird',
              text: 'Beginnen beide Pronomen mit l-, wird das erste zu „se“. Das ist keine Regel der Grammatik, sondern des Klangs: „le lo doy“ ist ein Zungenbrecher, „se lo doy“ nicht. Vorsicht bei der Nebenwirkung: Dieses „se“ sagt nicht mehr, ob él, ella oder ustedes gemeint sind – oft muss man „a él“, „a ella“, „a ellos“ ergänzen.',
            },
          },
          table: {
            headers: ['No se dice', 'Se dice'],
            rows: [
              ['le lo doy', 'se lo doy'],
              ['le la explico', 'se la explico'],
              ['les los mando', 'se los mando'],
              ['(aclaración)', 'Se lo doy a ella, no a él.'],
            ],
          },
        },
        {
          id: 'esg4-p4-info-posicion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dónde van los pronombres',
          text: 'Delante del verbo conjugado; pegados detrás del infinitivo, del gerundio y del imperativo afirmativo. Con infinitivo y gerundio hay libertad: las dos posiciones son correctas y se oyen por igual. Al pegarlos suele aparecer una tilde, porque el acento de la palabra no debe moverse.',
          translations: {
            de: {
              title: 'Wo die Pronomen stehen',
              text: 'Vor dem konjugierten Verb; angehängt an Infinitiv, Gerundium und bejahten Imperativ. Bei Infinitiv und Gerundium hat man die Wahl: Beide Stellungen sind richtig und gleich gebräuchlich. Beim Anhängen erscheint meist ein Akzent, weil die Betonung des Wortes nicht wandern darf.',
            },
          },
          table: {
            headers: ['Caso', 'Ejemplo'],
            rows: [
              ['verbo conjugado', 'Te lo digo mañana.'],
              ['negación', 'No te lo digo.'],
              ['infinitivo (dos opciones)', 'Voy a decírtelo. / Te lo voy a decir.'],
              ['gerundio (dos opciones)', 'Estoy diciéndotelo. / Te lo estoy diciendo.'],
              ['imperativo afirmativo', 'Dímelo.'],
              ['imperativo negativo', 'No me lo digas.'],
            ],
          },
        },
        {
          id: 'esg4-p4-cloze',
          type: 'CLOZE',
          instruction: 'Sustituya las dos partes subrayadas por pronombres.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¿Le diste las llaves a tu vecina? – Sí, ' },
            { kind: 'GAP', gapId: 'b1', solution: ['se las'], hint: 'a ella + las llaves', width: 7 },
            { kind: 'TEXT', text: ' di ayer.\n¿Me traes el periódico? – Claro, ahora ' },
            { kind: 'GAP', gapId: 'b2', solution: ['te lo'], hint: 'a ti + el periódico', width: 6 },
            { kind: 'TEXT', text: ' traigo.\n¿Nos explicas la regla? – Vale, ' },
            { kind: 'GAP', gapId: 'b3', solution: ['os la'], hint: 'a vosotros + la regla', width: 6 },
            { kind: 'TEXT', text: ' explico otra vez.\n¿Les mandaste los documentos? – Todavía no ' },
            { kind: 'GAP', gapId: 'b4', solution: ['se los'], hint: 'a ellos + los documentos', width: 7 },
            { kind: 'TEXT', text: ' he mandado.' },
          ],
        },
        {
          id: 'esg4-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '«Ich will es dir morgen erklären.» ¿Qué versiones son correctas?',
          options: [
            { id: 'v1', text: 'Quiero explicártelo mañana.' },
            { id: 'v2', text: 'Te lo quiero explicar mañana.' },
            { id: 'v3', text: 'Quiero te lo explicar mañana.' },
            { id: 'v4', text: 'Quiero explicarlo te mañana.' },
          ],
          multiple: true,
          solution: ['v1', 'v2'],
          explanation:
            'Con infinitivo hay dos sitios posibles: pegados al infinitivo o delante del verbo conjugado. Lo que no se puede es dejarlos sueltos en medio ni invertir el orden.',
          explanationTranslations: {
            de: 'Beim Infinitiv gibt es zwei mögliche Stellen: angehängt an den Infinitiv oder vor dem konjugierten Verb. Nicht möglich ist, sie frei dazwischenzustellen oder die Reihenfolge zu drehen.',
          },
        },
        {
          id: 'esg4-p4-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Mañana' },
            { id: 'w2', text: 'se' },
            { id: 'w3', text: 'lo' },
            { id: 'w4', text: 'digo' },
            { id: 'w5', text: 'a tu hermano.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'esg4-p4-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie einen kurzen Wortwechsel.',
          prompt:
            'Escriba un diálogo de seis a ocho líneas: dos personas se prestan cosas y quedan en devolverlas. Use al menos cuatro pronombres de objeto y al menos una vez los dos juntos.',
          minWords: 30,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            '– ¿Me prestas tu cargador? El mío no funciona.\n– Claro, te lo dejo hasta mañana.\n– Gracias. ¿Y el libro de Marta? ¿Se lo devolviste?\n– Todavía no se lo he devuelto, pero la veo el jueves.\n– Si quieres se lo doy yo, que la veo antes.\n– Perfecto, te lo traigo esta tarde.',
        },
      ],
    },
  },
];
