import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 2: „Law and administration“ (C1, Kapitel 2)
 *
 * Fünf Seiten. Legal English klingt nach einer eigenen Sprache – „hereinafter“,
 * „notwithstanding“, „shall“ –, besteht aber aus wenigen wiederkehrenden
 * Mustern. Das Kapitel lehrt, sie zu lesen, und zugleich, sie nicht
 * nachzuahmen: Die Plain-English-Bewegung ist im Englischen weiter als in den
 * meisten anderen Sprachen.
 *
 * Aufbau: Seite 1 die Merkmale juristischer Sprache, Seite 2 Verträge und
 * ihre Modalverben und Bedingungen, Seite 3 amtliche Schreiben lesen, Seite 4
 * eine formelle Beschwerde bzw. einen Widerspruch schreiben, Seite 5 Plain
 * English und eigene Schreibaufgabe.
 *
 * Beispiele orientieren sich an britischen und US-amerikanischen
 * Verhältnissen; Behörden, Firmen und Aktenzeichen sind erfunden.
 */
const v = 1;

export const ENGLISH_ADVANCED_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – features of legal language.
  {
    order: 1,
    title: 'The language of the law',
    subtitle: 'Merkmale juristischer Sprache',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena2-1-h1', type: 'HEADING', level: 1, text: 'The language of the law' },
        {
          id: 'ena2-1-intro',
          type: 'TEXT',
          text: '“The Tenant shall not, without the prior written consent of the Landlord (such consent not to be unreasonably withheld), assign, sublet or otherwise part with possession of the Premises or any part thereof.” A native speaker can read every word of that sentence and still need a moment to work out what it says: you may not sublet the flat unless the landlord agrees in writing, and the landlord must have a good reason to say no.\n\nLegal English is not a separate language. It is ordinary English with a few habits: very long sentences, archaic words, pairs of near-synonyms and a strong preference for precision over readability. Once you recognise the habits, the texts become much less intimidating.',
        },
        {
          id: 'ena2-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: law and administration',
          items: [
            { term: 'tenant / landlord', translations: { de: 'der Mieter / der Vermieter', es: 'el inquilino / el arrendador' } },
            { term: 'to sublet', translations: { de: 'untervermieten', es: 'subarrendar' } },
            { term: 'consent', translations: { de: 'die Zustimmung', es: 'el consentimiento' } },
            { term: 'clause', translations: { de: 'die Klausel', es: 'la cláusula' } },
            { term: 'to be liable (for)', translations: { de: 'haften (für)', es: 'ser responsable (de)' } },
            { term: 'breach (of contract)', translations: { de: 'der Vertragsbruch', es: 'el incumplimiento (de contrato)' } },
            { term: 'to terminate', translations: { de: 'kündigen, beenden', es: 'rescindir, terminar' } },
            { term: 'notice period', translations: { de: 'die Kündigungsfrist', es: 'el plazo de preaviso' } },
            { term: 'to appeal (against)', translations: { de: 'Widerspruch einlegen (gegen)', es: 'recurrir' } },
            { term: 'deadline', translations: { de: 'die Frist', es: 'el plazo' } },
            { term: 'the undersigned', translations: { de: 'der/die Unterzeichnende', es: 'el/la abajo firmante' } },
            { term: 'deposit', translations: { de: 'die Kaution', es: 'la fianza' } },
          ],
        },
        {
          id: 'ena2-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Four habits of legal English',
          text: 'Doublets and triplets come from a time when legal English mixed Old English, French and Latin and lawyers used both words to be safe. Archaic “here-” and “there-” words replace a pronoun phrase. “Shall” expresses obligation in contracts, not the future.',
          table: {
            headers: ['Habit', 'Legal English', 'Plain English'],
            rows: [
              ['doublets and triplets', 'null and void; terms and conditions', 'invalid; terms'],
              ['here- / there- words', 'hereinafter; thereof; herewith', 'from now on called; of it; with this letter'],
              ['“shall” for obligation', 'The Tenant shall pay …', 'The tenant must pay …'],
              ['nominalisation', 'upon termination of the agreement', 'when the agreement ends'],
            ],
          },
        },
        {
          id: 'ena2-1-match',
          type: 'MATCHING',
          instruction: 'Match the legal expression with its plain meaning.',
          left: [
            { id: 'l1', text: 'null and void' },
            { id: 'l2', text: 'hereinafter referred to as “the Company”' },
            { id: 'l3', text: 'any part thereof' },
            { id: 'l4', text: 'prior to' },
            { id: 'l5', text: 'in the event that' },
          ],
          right: [
            { id: 'r1', text: 'invalid, with no legal effect' },
            { id: 'r2', text: 'from now on called “the Company”' },
            { id: 'r3', text: 'any part of it' },
            { id: 'r4', text: 'before' },
            { id: 'r5', text: 'if' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'ena2-1-choice',
          type: 'CHOICE',
          instruction: 'Read the clause at the top of the page.',
          question: 'What does “such consent not to be unreasonably withheld” mean for the tenant?',
          options: [
            { id: 'c1', text: 'The landlord can refuse permission for any reason.' },
            { id: 'c2', text: 'The landlord needs a good reason to refuse permission to sublet.' },
            { id: 'c3', text: 'The tenant does not need permission.' },
            { id: 'c4', text: 'The tenant must give reasons for wanting to sublet.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'The phrase limits the landlord’s power: consent is still required, but refusing it without a reasonable ground would itself be a breach.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – contracts: shall, may, provided that, unless.
  {
    order: 2,
    title: 'The small print',
    subtitle: 'Verträge verstehen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena2-2-h1', type: 'HEADING', level: 1, text: 'The small print' },
        {
          id: 'ena2-2-intro',
          type: 'TEXT',
          text: 'A contract is largely a list of obligations, permissions and conditions: who must do what, who may do what, and what happens if something goes wrong. Two groups of words carry most of this meaning – the modal verbs and the conditional conjunctions. Misreading one of them can change who pays.',
        },
        {
          id: 'ena2-2-info-modals',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Modal verbs in contracts',
          text: 'In contracts, “shall” and “must” impose a duty; “may” grants a right or permission, not a possibility; “shall not” and “may not” prohibit. Modern drafting guides increasingly prefer “must” to “shall”, because “shall” is ambiguous in everyday English.',
          table: {
            headers: ['Word', 'Meaning in a contract', 'Example'],
            rows: [
              ['shall / must', 'obligation', 'The Tenant shall pay the rent monthly in advance.'],
              ['may', 'right, permission', 'The Landlord may inspect the property with 24 hours’ notice.'],
              ['shall not / may not', 'prohibition', 'The Tenant shall not keep pets.'],
              ['is entitled to', 'right', 'The Buyer is entitled to a full refund.'],
            ],
          },
        },
        {
          id: 'ena2-2-info-conditions',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Conditions and exceptions',
          text: '“Provided that” and “on condition that” state a necessary condition. “Unless” and “save where” introduce an exception. “Notwithstanding” means “despite” and signals that this clause overrides another one. “Subject to” means “depending on” or “limited by”.',
          table: {
            headers: ['Expression', 'Meaning', 'Example'],
            rows: [
              ['provided that', 'only if', 'The deposit will be returned provided that the flat is left clean.'],
              ['unless', 'except if', 'The contract renews automatically unless either party gives notice.'],
              ['notwithstanding', 'despite', 'Notwithstanding clause 4, the Tenant may keep one cat.'],
              ['subject to', 'depending on, limited by', 'Subject to availability, parking is included.'],
            ],
          },
        },
        {
          id: 'ena2-2-choice',
          type: 'CHOICE',
          instruction: 'Read the clause and choose the correct interpretation.',
          question:
            '“This agreement shall renew automatically for successive twelve-month periods unless either party gives not less than two months’ written notice.” It is 15 November and the agreement ends on 31 December. What happens if you give notice today?',
          options: [
            { id: 'k1', text: 'The agreement ends on 31 December.' },
            { id: 'k2', text: 'The agreement renews for another year, because the notice is less than two months.' },
            { id: 'k3', text: 'The agreement ends immediately.' },
            { id: 'k4', text: 'The agreement ends on 15 January.' },
          ],
          multiple: false,
          solution: ['k2'],
          explanation:
            'Renewal is the rule; the exception requires at least two months’ notice before the end date. Notice given on 15 November is too late for 31 December, so the rule applies.',
        },
        {
          id: 'ena2-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the clauses with the right expression.',
          wordBank: ['provided that', 'unless', 'Notwithstanding', 'may', 'shall not'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The deposit will be returned in full ' },
            { kind: 'GAP', gapId: 'k1', solution: ['provided that'], hint: 'only if', width: 14 },
            { kind: 'TEXT', text: ' the property is in good condition. The Tenant ' },
            { kind: 'GAP', gapId: 'k2', solution: ['shall not'], hint: 'prohibition', width: 10 },
            { kind: 'TEXT', text: ' smoke inside the property. The Landlord ' },
            { kind: 'GAP', gapId: 'k3', solution: ['may'], hint: 'right', width: 4 },
            { kind: 'TEXT', text: ' enter the property for repairs. The contract ends on 30 June ' },
            { kind: 'GAP', gapId: 'k4', solution: ['unless'], hint: 'except if', width: 7 },
            { kind: 'TEXT', text: ' both parties agree to extend it. ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Notwithstanding'], hint: 'despite', width: 16 },
            { kind: 'TEXT', text: ' clause 7, the Tenant may keep a bicycle in the hallway.' },
          ],
        },
        {
          id: 'ena2-2-match',
          type: 'MATCHING',
          instruction: 'What does each clause mean in practice?',
          left: [
            { id: 'u1', text: 'The Tenant shall be liable for any damage caused by negligence.' },
            { id: 'u2', text: 'Either party may terminate this agreement with one month’s notice.' },
            { id: 'u3', text: 'Late payment shall incur a fee of £30.' },
            { id: 'u4', text: 'Subletting is prohibited without prior written consent.' },
          ],
          right: [
            { id: 'v1', text: 'If you break something through carelessness, you pay.' },
            { id: 'v2', text: 'Anyone who wants to end the contract must warn the other a month ahead.' },
            { id: 'v3', text: 'If you pay late, you pay an extra £30.' },
            { id: 'v4', text: 'You can’t rent the flat to someone else unless the landlord agrees in writing.' },
          ],
          solution: [
            { leftId: 'u1', rightId: 'v1' },
            { leftId: 'u2', rightId: 'v2' },
            { leftId: 'u3', rightId: 'v3' },
            { leftId: 'u4', rightId: 'v4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – reading official letters.
  {
    order: 3,
    title: 'A letter from the council',
    subtitle: 'Amtliche Schreiben verstehen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena2-3-h1', type: 'HEADING', level: 1, text: 'A letter from the council' },
        {
          id: 'ena2-3-text',
          type: 'TEXT',
          text: 'PENALTY CHARGE NOTICE – Ref. PCN 4471 2290\n\nDear Sir/Madam,\n\nA Penalty Charge Notice has been issued in respect of vehicle registration KX19 TBR, which was observed parked in a restricted zone on Harbour Road at 14:32 on 3 March.\n\nThe charge of £70 is payable within 28 days of the date of this notice. If payment is received within 14 days, the charge will be reduced to £35.\n\nShould you wish to challenge this notice, you may make a formal representation in writing, stating your grounds, within 28 days. Failure to pay or to make representations within this period may result in the charge being increased by 50%.\n\nYours faithfully,\nParking Services, Westbridge Borough Council',
        },
        {
          id: 'ena2-3-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'How to read an official letter',
          text: 'Official letters hide the actor (“has been issued”, “was observed”), prefer formal verbs (“is payable”, “to make representations”) and use inverted conditionals (“Should you wish to …” = “If you want to …”). Read them in three passes: What happened? What must I do, by when? What are my options?',
          table: {
            headers: ['Formal', 'Plain'],
            rows: [
              ['is payable within 28 days', 'you must pay within 28 days'],
              ['Should you wish to challenge …', 'If you want to challenge …'],
              ['to make a representation', 'to object formally, to explain why you disagree'],
              ['Failure to pay may result in …', 'If you don’t pay, …'],
              ['in respect of', 'about, for'],
            ],
          },
        },
        {
          id: 'ena2-3-choice',
          type: 'CHOICE',
          instruction: 'Read the letter.',
          question: 'Which statements are true? (Choose all that apply.)',
          options: [
            { id: 'p1', text: 'If you pay within 14 days, you pay £35.' },
            { id: 'p2', text: 'You have 28 days to challenge the notice in writing.' },
            { id: 'p3', text: 'If you do nothing, the charge may rise to £105.' },
            { id: 'p4', text: 'You must pay £70 immediately.' },
          ],
          multiple: true,
          solution: ['p1', 'p2', 'p3'],
          explanation:
            'The charge is £70 within 28 days, reduced to £35 within 14 days. A 50% increase on £70 is £105. Nothing has to be paid immediately.',
        },
        {
          id: 'ena2-3-match',
          type: 'MATCHING',
          instruction: 'Match the formal phrase with its plain equivalent.',
          left: [
            { id: 'l1', text: 'Should you require further information,' },
            { id: 'l2', text: 'Please find enclosed' },
            { id: 'l3', text: 'with immediate effect' },
            { id: 'l4', text: 'We regret to inform you that' },
          ],
          right: [
            { id: 'r1', text: 'If you need to know more,' },
            { id: 'r2', text: 'I’m sending you' },
            { id: 'r3', text: 'starting now' },
            { id: 'r4', text: 'Unfortunately,' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena2-3-cloze',
          type: 'CLOZE',
          instruction: 'Rewrite with an inverted conditional (formal style).',
          wordBank: ['Should', 'Were', 'Had'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If you have any questions → ' },
            { kind: 'GAP', gapId: 'i1', solution: ['Should'], width: 7 },
            { kind: 'TEXT', text: ' you have any questions, please contact us. If we were to cancel → ' },
            { kind: 'GAP', gapId: 'i2', solution: ['Were'], width: 5 },
            { kind: 'TEXT', text: ' we to cancel the order, you would receive a full refund. If you had told us → ' },
            { kind: 'GAP', gapId: 'i3', solution: ['Had'], width: 4 },
            { kind: 'TEXT', text: ' you told us earlier, we could have helped.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – writing a formal complaint or appeal.
  {
    order: 4,
    title: 'I am writing to appeal against …',
    subtitle: 'Einen formellen Widerspruch schreiben',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena2-4-h1', type: 'HEADING', level: 1, text: 'I am writing to appeal against …' },
        {
          id: 'ena2-4-intro',
          type: 'TEXT',
          text: 'A formal appeal is not won by indignation but by order. The person reading it must see within seconds who is writing, about which decision, on what grounds and what exactly they want. English formal letters have a fairly fixed shape – and a few conventions that differ from German ones.',
        },
        {
          id: 'ena2-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The structure of a formal appeal',
          text: 'Open with the reference and the purpose in the first sentence. Give the facts in chronological order, each in its own short paragraph. State your grounds, with evidence. End with one clear request. In British English, “Dear Sir/Madam” pairs with “Yours faithfully” and “Dear Ms Smith” with “Yours sincerely”; in American English, “Sincerely” is used in both cases.',
          table: {
            headers: ['Part', 'Typical phrase'],
            rows: [
              ['reference', 'Re: Penalty Charge Notice PCN 4471 2290'],
              ['purpose', 'I am writing to appeal against the above notice.'],
              ['facts', 'On 3 March, I parked in Harbour Road at approximately 14:15.'],
              ['grounds', 'The restriction sign was obscured by scaffolding, as the enclosed photographs show.'],
              ['request', 'I therefore request that the notice be cancelled.'],
              ['closing', 'I look forward to your reply. Yours faithfully,'],
            ],
          },
        },
        {
          id: 'ena2-4-ordering',
          type: 'ORDERING',
          instruction: 'Put the parts of the appeal in the correct order.',
          items: [
            { id: 'o1', text: 'Re: Penalty Charge Notice PCN 4471 2290' },
            { id: 'o2', text: 'I am writing to appeal against the above notice, issued on 3 March.' },
            { id: 'o3', text: 'On that day, the sign indicating the restriction was completely covered by scaffolding.' },
            { id: 'o4', text: 'I enclose two photographs taken at the time, which clearly show this.' },
            { id: 'o5', text: 'I therefore request that the notice be cancelled. Yours faithfully,' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena2-4-info-subjunctive',
          type: 'INFO',
          variant: 'TIP',
          title: 'request that it be cancelled',
          text: 'Formal requests often use the mandative subjunctive: the base form of the verb after “request”, “insist”, “recommend” or “it is essential that”. It is standard in American English and common in formal British English, where “should” is an alternative.',
          table: {
            headers: ['Subjunctive', 'Alternative (British)'],
            rows: [
              ['I request that the notice be cancelled.', 'I request that the notice should be cancelled.'],
              ['I insist that he pay the full amount.', 'I insist that he should pay the full amount.'],
              ['It is essential that the form be signed.', 'It is essential that the form should be signed.'],
            ],
          },
        },
        {
          id: 'ena2-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the appeal.',
          wordBank: ['appeal', 'enclose', 'grounds', 'be', 'faithfully'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Dear Sir/Madam,\nI am writing to ' },
            { kind: 'GAP', gapId: 'a1', solution: ['appeal'], width: 7 },
            { kind: 'TEXT', text: ' against the decision of 12 May. My ' },
            { kind: 'GAP', gapId: 'a2', solution: ['grounds'], width: 8 },
            { kind: 'TEXT', text: ' are set out below. I ' },
            { kind: 'GAP', gapId: 'a3', solution: ['enclose'], width: 8 },
            { kind: 'TEXT', text: ' a copy of my bank statement. I request that the decision ' },
            { kind: 'GAP', gapId: 'a4', solution: ['be'], width: 3 },
            { kind: 'TEXT', text: ' reviewed.\nYours ' },
            { kind: 'GAP', gapId: 'a5', solution: ['faithfully'], width: 11 },
            { kind: 'TEXT', text: ',' },
          ],
        },
        {
          id: 'ena2-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the most effective sentence.',
          question: 'Which sentence belongs in a formal appeal?',
          options: [
            { id: 'q1', text: 'This is absolutely outrageous and I am furious.' },
            { id: 'q2', text: 'As the enclosed receipt shows, the payment was made on 2 May, before the deadline.' },
            { id: 'q3', text: 'Everybody knows your department always makes mistakes.' },
            { id: 'q4', text: 'Please sort this out somehow.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'The second sentence states a fact and points to evidence. Anger and generalisations weaken an appeal; vague requests leave the decision to the other side.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – plain English; review and writing.
  {
    order: 5,
    title: 'Plain English',
    subtitle: 'Klar schreiben und das Kapitel wiederholen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'ena2-5-h1', type: 'HEADING', level: 1, text: 'Plain English' },
        {
          id: 'ena2-5-intro',
          type: 'TEXT',
          text: 'Since the 1970s, the Plain English Campaign in Britain and plain-language laws in the United States have pushed governments and companies to write documents that ordinary people can understand on first reading. The US Plain Writing Act of 2010 requires federal agencies to use clear language in documents for the public. The principles are simple – and they apply to any formal writing, including yours.',
        },
        {
          id: 'ena2-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Five rules of plain English',
          text: 'Formal does not mean complicated. A letter can be polite, precise and complete without a single “hereinafter”.',
          table: {
            headers: ['Rule', 'Instead of', 'Write'],
            rows: [
              ['use “you” and “we”', 'Applicants are required to …', 'You must …'],
              ['prefer active verbs', 'A decision will be made by the committee.', 'The committee will decide.'],
              ['use verbs, not nouns', 'make an application for', 'apply for'],
              ['use everyday words', 'commence, terminate, in excess of', 'start, end, more than'],
              ['keep sentences short', 'one sentence of 60 words', 'three sentences of 20 words'],
            ],
          },
        },
        {
          id: 'ena2-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best plain-English version.',
          question: '“In the event of non-receipt of the requisite documentation, the application will be deemed to have been withdrawn.”',
          options: [
            { id: 'f1', text: 'If the documents are not received, the application is withdrawn by default.' },
            { id: 'f2', text: 'If you do not send us the documents we asked for, we will treat your application as withdrawn.' },
            { id: 'f3', text: 'Non-receipt of documents means withdrawal of application.' },
            { id: 'f4', text: 'Send stuff or it’s cancelled.' },
          ],
          multiple: false,
          solution: ['f2'],
          explanation:
            'The second version addresses the reader, uses active verbs and keeps the legal meaning (“deemed” = “treated as”). The fourth is clear but far too informal for an official letter.',
        },
        {
          id: 'ena2-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['shall', 'may', 'unless', 'Should', 'faithfully', 'plain'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In a contract, “' },
            { kind: 'GAP', gapId: 'z1', solution: ['shall'], width: 6 },
            { kind: 'TEXT', text: '” expresses an obligation and “' },
            { kind: 'GAP', gapId: 'z2', solution: ['may'], width: 4 },
            { kind: 'TEXT', text: '” a right. “' },
            { kind: 'GAP', gapId: 'z3', solution: ['unless'], width: 7 },
            { kind: 'TEXT', text: '” introduces an exception. “' },
            { kind: 'GAP', gapId: 'z4', solution: ['Should'], width: 7 },
            { kind: 'TEXT', text: ' you wish to …” means “If you want to …”. “Dear Sir/Madam” ends with “Yours ' },
            { kind: 'GAP', gapId: 'z5', solution: ['faithfully'], width: 11 },
            { kind: 'TEXT', text: '”. And good formal writing is ' },
            { kind: 'GAP', gapId: 'z6', solution: ['plain'], width: 6 },
            { kind: 'TEXT', text: ' English.' },
          ],
        },
        {
          id: 'ena2-5-writing',
          type: 'WRITING',
          instruction: 'Write a formal appeal.',
          prompt:
            'Your landlord is keeping £400 of your £1,200 deposit for “cleaning and repairs”. You left the flat clean, you have photos from the day you moved out, and the only damage – a broken cupboard door – was already listed in the inventory when you moved in. Write a formal letter (180–250 words) to the landlord’s agency. Include a reference, the purpose, the facts, your grounds with evidence and one clear request. Use plain English, but keep a formal register.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Harbour Lettings Ltd\n14 Quay Street\nBristol BS1 4DB\n\n12 June\n\nRe: Deposit for Flat 3, 27 Elm Road – Tenancy ref. HL/2291\n\nDear Ms Carter,\n\nI am writing to dispute the deduction of £400 from my deposit, which you notified me of in your email of 5 June.\n\nMy tenancy ended on 31 May. On that day, I cleaned the flat thoroughly and took photographs of every room, which I enclose. They show that the kitchen, bathroom and carpets were left in good condition.\n\nYour email refers to “cleaning and repairs”, but does not specify what was cleaned or repaired. The only damage I am aware of is the broken cupboard door in the kitchen. However, this was already recorded in the inventory signed at the start of my tenancy on 1 June two years ago (item 14, page 3). I cannot therefore be held liable for it.\n\nUnder the terms of the tenancy agreement, deductions may only be made for damage beyond normal wear and tear that occurred during the tenancy. I do not believe this applies here.\n\nI therefore request that the full deposit of £1,200 be returned to me within 14 days. If you believe any deduction is justified, please send me an itemised list with evidence.\n\nShould I not receive a satisfactory reply, I will refer the matter to the deposit protection scheme.\n\nYours sincerely,\n\nDaniel Weber',
        },
      ],
    },
  },
];
