/**
 * Die Meldungen, die der Server an die App zurückgibt – in allen Sprachen, in
 * denen die Oberfläche angeboten wird.
 *
 * Bis hierher standen diese Texte als deutsche Zeichenketten direkt an den
 * `throw`-Stellen. Sie landen aber ungefiltert im Fehlerband der App: Wer
 * Spanisch lernt und Englisch spricht, bekam mitten in einer englischen
 * Oberfläche „Lerneinheit nicht gefunden“ zu lesen. Deshalb wirft der Server
 * jetzt *Schlüssel* (siehe `ERR`), und der `AllExceptionsFilter` setzt sie
 * anhand des `Accept-Language`-Kopfes der Anfrage in Text um – als einzige
 * Stelle, die überhaupt eine Sprache kennt. Services und Guards bleiben frei
 * davon.
 *
 * Deutsch ist die Quelle: Jede andere Sprache wird gegen `MessageCatalog`
 * getypt, ein fehlender Schlüssel fällt beim Kompilieren auf.
 */

const de = {
  // ------------------------------------------------------------------ Auth
  'auth.email_taken': 'Für diese E-Mail existiert bereits ein Konto',
  'auth.invalid_credentials': 'E-Mail oder Passwort ist falsch',
  'auth.refresh_invalid': 'Refresh-Token ist ungültig oder abgelaufen',
  'auth.refresh_unknown': 'Refresh-Token ist unbekannt',
  'auth.session_expired': 'Sitzung abgelaufen – bitte erneut anmelden',
  'auth.wrong_token_type': 'Falscher Token-Typ',
  'auth.wrong_password': 'Das aktuelle Passwort ist falsch',
  'auth.account_gone': 'Konto existiert nicht mehr',
  'auth.forbidden': 'Für diese Aktion fehlen die Berechtigungen',

  // -------------------------------------------------------------- Validierung
  'validation.email': 'Bitte eine gültige E-Mail-Adresse angeben',
  'validation.password_length': 'Das Passwort muss mindestens 8 Zeichen haben',
  'validation.password_letter': 'Das Passwort muss mindestens einen Buchstaben enthalten',
  'validation.password_digit': 'Das Passwort muss mindestens eine Ziffer enthalten',
  'validation.display_name': 'Der Name muss zwischen 2 und 40 Zeichen lang sein',
  'validation.cover_color': 'coverColor muss ein Hex-Farbwert sein (#RRGGBB)',
  'validation.avatar_url': 'avatarUrl muss eine gültige URL sein',
  'validation.avatar_icon': 'avatarIcon muss eines der verfügbaren Profil-Icons sein',

  // ------------------------------------------------------------- Nicht gefunden
  'notfound.user': 'Nutzer nicht gefunden',
  'notfound.language': 'Sprache nicht gefunden',
  'notfound.learning_profile': 'Lernprofil nicht gefunden',
  'profile.none_active': 'Kein aktives Lernprofil – bitte zuerst eine Lernsprache auswählen',
  'notfound.deck': 'Deck nicht gefunden',
  'notfound.card': 'Karte nicht gefunden',
  'notfound.vocab_item': 'Vokabel nicht gefunden',
  'notfound.content': 'Inhalt nicht gefunden',
  'notfound.video': 'Video nicht gefunden',
  'notfound.notebook': 'Heft nicht gefunden',
  'notfound.page': 'Seite nicht gefunden',
  'notfound.unit': 'Lerneinheit nicht gefunden',
  'notfound.chapter': 'Kapitel nicht gefunden',
  'notfound.conversation': 'Gespräch nicht gefunden',

  // -------------------------------------------------------------- Kein Zugriff
  'forbidden.page': 'Kein Zugriff auf diese Seite',
  'forbidden.notebook': 'Kein Zugriff auf dieses Heft',
  'forbidden.conversation': 'Kein Zugriff auf dieses Gespräch',
  'forbidden.deck_other_user': 'Dieses Deck gehört einem anderen Nutzer',
  'forbidden.book_level': 'Dieses Buch gehört zu einem anderen Niveau',
  'forbidden.deck_readonly': 'Dieses Deck kann nicht bearbeitet werden',
  'forbidden.vocab_readonly': 'Diese Vokabel kann nicht gelöscht werden',

  // ------------------------------------------------------------------ Premium
  'premium.required': 'Diese Funktion ist Teil von Lingua Premium.',
  'premium.content': 'Dieser Inhalt ist Teil von Lingua Premium',
  'premium.video': 'Dieses Video ist Teil von Lingua Premium',

  // ----------------------------------------------------------------------- KI
  'ai.unavailable': 'Die KI-Funktionen sind derzeit nicht verfügbar',
  'ai.cli_missing':
    'Die claude-CLI wurde nicht gefunden. CLAUDE_CLI_PATH in .env setzen oder "npm install -g @anthropic-ai/claude-code" ausführen.',
  'ai.bad_format': 'Die KI-Antwort hatte ein unerwartetes Format',
  'ai.failed': 'Die KI-Antwort konnte nicht erzeugt werden',
  'ai.timeout': 'Die KI-Antwort hat zu lange gedauert',
  'ai.no_audio': 'Keine Audiodatei erhalten.',
  'ai.speech_unavailable': 'Spracherkennung ist derzeit nicht verfügbar.',
  'ai.quota_premium': 'Das monatliche KI-Kontingent ist aufgebraucht.',
  'ai.quota_free': 'Dein kostenloses KI-Kontingent ist aufgebraucht. Mit Premium geht es weiter.',
  'ai.text_too_short':
    'Auf dieser Seite steht noch zu wenig Text. Schreibe mit dem Textwerkzeug ein paar Sätze.',
  'ai.new_conversation': 'Neues Gespräch',
  'ai.content_filtered':
    'Diese Anfrage konnte nicht bearbeitet werden. Bitte formuliere sie anders.',
  'ai.rate_limited': 'Gerade sind sehr viele Anfragen unterwegs – bitte in einem Moment erneut versuchen.',

  // ------------------------------------------------------------------ Inhalte
  'content.no_exercises': 'Zu diesem Inhalt gibt es keine Übungen',
  'content.unit_no_exercises': 'Diese Lerneinheit enthält keine Aufgaben',
  'content.no_matching_blocks': 'Keine passenden Aufgaben gefunden',
  'content.language_unavailable': 'Diese Sprache wird nicht angeboten',

  // ---------------------------------------------------------------- Einstufung
  'placement.no_test': 'Für diese Sprache gibt es noch keinen Einstufungstest',
  'placement.foreign_questions': 'Der Test enthält unbekannte oder fremde Fragen',
  'placement.stage_as_whole': 'Eine Stufe wird immer als Ganzes ausgewertet',
  'placement.recommendation_top':
    'Du hast jede Stufe bestanden – wir starten auf C2. Wenn dir etwas zu leicht vorkommt, sag uns im Profil Bescheid.',
  'placement.recommendation_close':
    'Knapp an der nächsten Stufe vorbei: Du steigst auf {level} ein und hast es nicht weit bis darüber.',
  'placement.recommendation_start':
    'Auf {level} hakte es – genau dort setzen wir an. Vokabeln, Texte und Podcasts kommen ab jetzt auf diesem Niveau.',

  // -------------------------------------------------------------------- Hefte
  'notebook.keep_one_page': 'Ein Heft muss mindestens eine Seite behalten',
  'notebook.order_mismatch': 'Die Reihenfolge muss genau alle Seiten des Hefts enthalten',
  'notebook.elements_array': 'content.elements muss ein Array sein',
  'notebook.stroke_too_long': 'Ein Strich enthält zu viele Punkte',

  // ------------------------------------------------------------------ Technik
  'db.duplicate': 'Dieser Eintrag existiert bereits.',
  'db.not_found': 'Der angeforderte Eintrag wurde nicht gefunden.',
  'db.bad_reference': 'Ungültige Referenz auf einen verknüpften Datensatz.',
  'db.bad_shape': 'Die Anfrage passt nicht zum Datenmodell.',
  'server.unexpected': 'Unerwarteter Serverfehler.',
} as const;

export type MessageKey = keyof typeof de;
type MessageCatalog = Record<MessageKey, string>;

const en: MessageCatalog = {
  'auth.email_taken': 'An account with this email already exists',
  'auth.invalid_credentials': 'Email or password is incorrect',
  'auth.refresh_invalid': 'The refresh token is invalid or has expired',
  'auth.refresh_unknown': 'The refresh token is unknown',
  'auth.session_expired': 'Session expired – please sign in again',
  'auth.wrong_token_type': 'Wrong token type',
  'auth.wrong_password': 'The current password is incorrect',
  'auth.account_gone': 'This account no longer exists',
  'auth.forbidden': 'You do not have permission for this action',

  'validation.email': 'Please enter a valid email address',
  'validation.password_length': 'The password must be at least 8 characters long',
  'validation.password_letter': 'The password must contain at least one letter',
  'validation.password_digit': 'The password must contain at least one digit',
  'validation.display_name': 'The name must be between 2 and 40 characters long',
  'validation.cover_color': 'coverColor must be a hex colour value (#RRGGBB)',
  'validation.avatar_url': 'avatarUrl must be a valid URL',
  'validation.avatar_icon': 'avatarIcon must be one of the available profile icons',

  'notfound.user': 'User not found',
  'notfound.language': 'Language not found',
  'notfound.learning_profile': 'Learning profile not found',
  'profile.none_active': 'No active learning profile – please choose a language to learn first',
  'notfound.deck': 'Deck not found',
  'notfound.card': 'Card not found',
  'notfound.vocab_item': 'Word not found',
  'notfound.content': 'Content not found',
  'notfound.video': 'Video not found',
  'notfound.notebook': 'Notebook not found',
  'notfound.page': 'Page not found',
  'notfound.unit': 'Lesson not found',
  'notfound.chapter': 'Chapter not found',
  'notfound.conversation': 'Conversation not found',

  'forbidden.page': 'No access to this page',
  'forbidden.notebook': 'No access to this notebook',
  'forbidden.conversation': 'No access to this conversation',
  'forbidden.deck_other_user': 'This deck belongs to another user',
  'forbidden.book_level': 'This book belongs to a different level',
  'forbidden.deck_readonly': 'This deck cannot be edited',
  'forbidden.vocab_readonly': 'This word cannot be deleted',

  'premium.required': 'This feature is part of Lingua Premium.',
  'premium.content': 'This content is part of Lingua Premium',
  'premium.video': 'This video is part of Lingua Premium',

  'ai.unavailable': 'The AI features are currently unavailable',
  'ai.cli_missing':
    'The claude CLI was not found. Set CLAUDE_CLI_PATH in .env or run "npm install -g @anthropic-ai/claude-code".',
  'ai.bad_format': 'The AI response had an unexpected format',
  'ai.failed': 'The AI response could not be generated',
  'ai.timeout': 'The AI response took too long',
  'ai.no_audio': 'No audio file received.',
  'ai.speech_unavailable': 'Speech recognition is currently unavailable.',
  'ai.quota_premium': 'Your monthly AI quota is used up.',
  'ai.quota_free': 'Your free AI quota is used up. Premium lets you carry on.',
  'ai.text_too_short':
    'There is not enough text on this page yet. Write a few sentences with the text tool.',
  'ai.new_conversation': 'New conversation',
  'ai.content_filtered': 'This request could not be handled. Please put it differently.',
  'ai.rate_limited': 'A lot of requests are in flight right now – please try again in a moment.',

  'content.no_exercises': 'There are no exercises for this content',
  'content.unit_no_exercises': 'This lesson has no exercises',
  'content.no_matching_blocks': 'No matching exercises found',
  'content.language_unavailable': 'This language is not offered',

  'placement.no_test': 'There is no placement test for this language yet',
  'placement.foreign_questions': 'The test contains unknown or foreign questions',
  'placement.stage_as_whole': 'A level is always evaluated as a whole',
  'placement.recommendation_top':
    'You passed every level – we are starting at C2. If anything feels too easy, let us know in your profile.',
  'placement.recommendation_close':
    'Just short of the next level: you start at {level}, and the step above is within reach.',
  'placement.recommendation_start':
    '{level} is where it got tricky – that is exactly where we pick up. Vocabulary, texts and podcasts will come at this level from now on.',

  'notebook.keep_one_page': 'A notebook must keep at least one page',
  'notebook.order_mismatch': 'The order must contain exactly all pages of the notebook',
  'notebook.elements_array': 'content.elements must be an array',
  'notebook.stroke_too_long': 'A stroke contains too many points',

  'db.duplicate': 'This entry already exists.',
  'db.not_found': 'The requested entry was not found.',
  'db.bad_reference': 'Invalid reference to a linked record.',
  'db.bad_shape': 'The request does not match the data model.',
  'server.unexpected': 'Unexpected server error.',
};

const es: MessageCatalog = {
  'auth.email_taken': 'Ya existe una cuenta con este correo electrónico',
  'auth.invalid_credentials': 'El correo o la contraseña no son correctos',
  'auth.refresh_invalid': 'El token de actualización no es válido o ha caducado',
  'auth.refresh_unknown': 'El token de actualización es desconocido',
  'auth.session_expired': 'Sesión caducada: vuelve a iniciar sesión',
  'auth.wrong_token_type': 'Tipo de token incorrecto',
  'auth.wrong_password': 'La contraseña actual no es correcta',
  'auth.account_gone': 'Esta cuenta ya no existe',
  'auth.forbidden': 'No tienes permiso para esta acción',

  'validation.email': 'Introduce una dirección de correo válida',
  'validation.password_length': 'La contraseña debe tener al menos 8 caracteres',
  'validation.password_letter': 'La contraseña debe contener al menos una letra',
  'validation.password_digit': 'La contraseña debe contener al menos un número',
  'validation.display_name': 'El nombre debe tener entre 2 y 40 caracteres',
  'validation.cover_color': 'coverColor debe ser un valor hexadecimal (#RRGGBB)',
  'validation.avatar_url': 'avatarUrl debe ser una URL válida',
  'validation.avatar_icon': 'avatarIcon debe ser uno de los iconos de perfil disponibles',

  'notfound.user': 'Usuario no encontrado',
  'notfound.language': 'Idioma no encontrado',
  'notfound.learning_profile': 'Perfil de aprendizaje no encontrado',
  'profile.none_active': 'No hay ningún perfil de aprendizaje activo: elige primero un idioma que aprender',
  'notfound.deck': 'Mazo no encontrado',
  'notfound.card': 'Tarjeta no encontrada',
  'notfound.vocab_item': 'Palabra no encontrada',
  'notfound.content': 'Contenido no encontrado',
  'notfound.video': 'Vídeo no encontrado',
  'notfound.notebook': 'Cuaderno no encontrado',
  'notfound.page': 'Página no encontrada',
  'notfound.unit': 'Lección no encontrada',
  'notfound.chapter': 'Capítulo no encontrado',
  'notfound.conversation': 'Conversación no encontrada',

  'forbidden.page': 'Sin acceso a esta página',
  'forbidden.notebook': 'Sin acceso a este cuaderno',
  'forbidden.conversation': 'Sin acceso a esta conversación',
  'forbidden.deck_other_user': 'Este mazo pertenece a otro usuario',
  'forbidden.book_level': 'Este libro pertenece a otro nivel',
  'forbidden.deck_readonly': 'Este mazo no se puede editar',
  'forbidden.vocab_readonly': 'Esta palabra no se puede eliminar',

  'premium.required': 'Esta función forma parte de Lingua Premium.',
  'premium.content': 'Este contenido forma parte de Lingua Premium',
  'premium.video': 'Este vídeo forma parte de Lingua Premium',

  'ai.unavailable': 'Las funciones de IA no están disponibles ahora mismo',
  'ai.cli_missing':
    'No se ha encontrado la CLI de claude. Define CLAUDE_CLI_PATH en .env o ejecuta "npm install -g @anthropic-ai/claude-code".',
  'ai.bad_format': 'La respuesta de la IA tenía un formato inesperado',
  'ai.failed': 'No se pudo generar la respuesta de la IA',
  'ai.timeout': 'La respuesta de la IA ha tardado demasiado',
  'ai.no_audio': 'No se ha recibido ningún archivo de audio.',
  'ai.speech_unavailable': 'El reconocimiento de voz no está disponible ahora mismo.',
  'ai.quota_premium': 'Has agotado tu cuota mensual de IA.',
  'ai.quota_free': 'Has agotado tu cuota gratuita de IA. Con Premium puedes continuar.',
  'ai.text_too_short':
    'En esta página todavía hay poco texto. Escribe unas frases con la herramienta de texto.',
  'ai.new_conversation': 'Conversación nueva',
  'ai.content_filtered': 'No se ha podido procesar esta petición. Prueba a formularla de otra manera.',
  'ai.rate_limited': 'Ahora mismo hay muchas peticiones en curso: inténtalo de nuevo en un momento.',

  'content.no_exercises': 'No hay ejercicios para este contenido',
  'content.unit_no_exercises': 'Esta lección no tiene ejercicios',
  'content.no_matching_blocks': 'No se han encontrado ejercicios que coincidan',
  'content.language_unavailable': 'Este idioma no está disponible',

  'placement.no_test': 'Todavía no hay una prueba de nivel para este idioma',
  'placement.foreign_questions': 'La prueba contiene preguntas desconocidas o ajenas',
  'placement.stage_as_whole': 'Un nivel siempre se evalúa completo',
  'placement.recommendation_top':
    'Has superado todos los niveles: empezamos en C2. Si algo te resulta demasiado fácil, dínoslo en tu perfil.',
  'placement.recommendation_close':
    'Te has quedado a las puertas del siguiente nivel: empiezas en {level} y el salto está al alcance.',
  'placement.recommendation_start':
    'En {level} es donde se complicó, y ahí es justo donde empezamos. A partir de ahora el vocabulario, los textos y los pódcasts serán de este nivel.',

  'notebook.keep_one_page': 'Un cuaderno debe conservar al menos una página',
  'notebook.order_mismatch': 'El orden debe contener exactamente todas las páginas del cuaderno',
  'notebook.elements_array': 'content.elements debe ser un array',
  'notebook.stroke_too_long': 'Un trazo contiene demasiados puntos',

  'db.duplicate': 'Esta entrada ya existe.',
  'db.not_found': 'No se ha encontrado la entrada solicitada.',
  'db.bad_reference': 'Referencia no válida a un registro vinculado.',
  'db.bad_shape': 'La petición no encaja con el modelo de datos.',
  'server.unexpected': 'Error inesperado del servidor.',
};

const fr: MessageCatalog = {
  'auth.email_taken': 'Un compte existe déjà pour cette adresse e-mail',
  'auth.invalid_credentials': 'E-mail ou mot de passe incorrect',
  'auth.refresh_invalid': 'Le jeton de rafraîchissement est invalide ou expiré',
  'auth.refresh_unknown': 'Le jeton de rafraîchissement est inconnu',
  'auth.session_expired': 'Session expirée – reconnecte-toi',
  'auth.wrong_token_type': 'Type de jeton incorrect',
  'auth.wrong_password': 'Le mot de passe actuel est incorrect',
  'auth.account_gone': 'Ce compte n’existe plus',
  'auth.forbidden': 'Tu n’as pas les droits pour cette action',

  'validation.email': 'Indique une adresse e-mail valide',
  'validation.password_length': 'Le mot de passe doit contenir au moins 8 caractères',
  'validation.password_letter': 'Le mot de passe doit contenir au moins une lettre',
  'validation.password_digit': 'Le mot de passe doit contenir au moins un chiffre',
  'validation.display_name': 'Le nom doit contenir entre 2 et 40 caractères',
  'validation.cover_color': 'coverColor doit être une valeur hexadécimale (#RRGGBB)',
  'validation.avatar_url': 'avatarUrl doit être une URL valide',
  'validation.avatar_icon': 'avatarIcon doit être l\'une des icônes de profil disponibles',

  'notfound.user': 'Utilisateur introuvable',
  'notfound.language': 'Langue introuvable',
  'notfound.learning_profile': 'Profil d’apprentissage introuvable',
  'profile.none_active': 'Aucun profil d’apprentissage actif – choisis d’abord une langue à apprendre',
  'notfound.deck': 'Paquet introuvable',
  'notfound.card': 'Carte introuvable',
  'notfound.vocab_item': 'Mot introuvable',
  'notfound.content': 'Contenu introuvable',
  'notfound.video': 'Vidéo introuvable',
  'notfound.notebook': 'Cahier introuvable',
  'notfound.page': 'Page introuvable',
  'notfound.unit': 'Leçon introuvable',
  'notfound.chapter': 'Chapitre introuvable',
  'notfound.conversation': 'Conversation introuvable',

  'forbidden.page': 'Pas d’accès à cette page',
  'forbidden.notebook': 'Pas d’accès à ce cahier',
  'forbidden.conversation': 'Pas d’accès à cette conversation',
  'forbidden.deck_other_user': 'Ce paquet appartient à un autre utilisateur',
  'forbidden.book_level': 'Ce livre appartient à un autre niveau',
  'forbidden.deck_readonly': 'Ce paquet ne peut pas être modifié',
  'forbidden.vocab_readonly': 'Ce mot ne peut pas être supprimé',

  'premium.required': 'Cette fonction fait partie de Lingua Premium.',
  'premium.content': 'Ce contenu fait partie de Lingua Premium',
  'premium.video': 'Cette vidéo fait partie de Lingua Premium',

  'ai.unavailable': 'Les fonctions IA ne sont pas disponibles pour le moment',
  'ai.cli_missing':
    'La CLI claude est introuvable. Définis CLAUDE_CLI_PATH dans .env ou lance "npm install -g @anthropic-ai/claude-code".',
  'ai.bad_format': 'La réponse de l’IA avait un format inattendu',
  'ai.failed': 'La réponse de l’IA n’a pas pu être générée',
  'ai.timeout': 'La réponse de l’IA a pris trop de temps',
  'ai.no_audio': 'Aucun fichier audio reçu.',
  'ai.speech_unavailable': 'La reconnaissance vocale n’est pas disponible pour le moment.',
  'ai.quota_premium': 'Ton quota IA mensuel est épuisé.',
  'ai.quota_free': 'Ton quota IA gratuit est épuisé. Premium te permet de continuer.',
  'ai.text_too_short':
    'Il n’y a pas encore assez de texte sur cette page. Écris quelques phrases avec l’outil texte.',
  'ai.new_conversation': 'Nouvelle conversation',
  'ai.content_filtered':
    'Cette demande n’a pas pu être traitée. Essaie de la formuler autrement.',
  'ai.rate_limited':
    'Beaucoup de demandes sont en cours en ce moment – réessaie dans un instant.',

  'content.no_exercises': 'Il n’y a pas d’exercices pour ce contenu',
  'content.unit_no_exercises': 'Cette leçon ne contient pas d’exercices',
  'content.no_matching_blocks': 'Aucun exercice correspondant trouvé',
  'content.language_unavailable': 'Cette langue n’est pas proposée',

  'placement.no_test': 'Il n’y a pas encore de test de niveau pour cette langue',
  'placement.foreign_questions': 'Le test contient des questions inconnues ou étrangères',
  'placement.stage_as_whole': 'Un niveau est toujours évalué dans son ensemble',
  'placement.recommendation_top':
    'Tu as réussi tous les niveaux – on démarre en C2. Si quelque chose te paraît trop facile, dis-le-nous dans ton profil.',
  'placement.recommendation_close':
    'À un cheveu du niveau suivant : tu commences en {level}, et la marche au-dessus est toute proche.',
  'placement.recommendation_start':
    'C’est en {level} que ça a coincé – c’est exactement là qu’on reprend. Vocabulaire, textes et podcasts seront désormais à ce niveau.',

  'notebook.keep_one_page': 'Un cahier doit garder au moins une page',
  'notebook.order_mismatch': 'L’ordre doit contenir exactement toutes les pages du cahier',
  'notebook.elements_array': 'content.elements doit être un tableau',
  'notebook.stroke_too_long': 'Un tracé contient trop de points',

  'db.duplicate': 'Cette entrée existe déjà.',
  'db.not_found': 'L’entrée demandée est introuvable.',
  'db.bad_reference': 'Référence invalide vers un enregistrement lié.',
  'db.bad_shape': 'La requête ne correspond pas au modèle de données.',
  'server.unexpected': 'Erreur serveur inattendue.',
};

const it: MessageCatalog = {
  'auth.email_taken': 'Esiste già un account con questa e-mail',
  'auth.invalid_credentials': 'E-mail o password non corretti',
  'auth.refresh_invalid': 'Il token di aggiornamento non è valido o è scaduto',
  'auth.refresh_unknown': 'Il token di aggiornamento è sconosciuto',
  'auth.session_expired': 'Sessione scaduta: accedi di nuovo',
  'auth.wrong_token_type': 'Tipo di token errato',
  'auth.wrong_password': 'La password attuale non è corretta',
  'auth.account_gone': 'Questo account non esiste più',
  'auth.forbidden': 'Non hai i permessi per questa azione',

  'validation.email': 'Inserisci un indirizzo e-mail valido',
  'validation.password_length': 'La password deve avere almeno 8 caratteri',
  'validation.password_letter': 'La password deve contenere almeno una lettera',
  'validation.password_digit': 'La password deve contenere almeno una cifra',
  'validation.display_name': 'Il nome deve avere tra 2 e 40 caratteri',
  'validation.cover_color': 'coverColor deve essere un valore esadecimale (#RRGGBB)',
  'validation.avatar_url': 'avatarUrl deve essere un URL valido',
  'validation.avatar_icon': 'avatarIcon deve essere una delle icone profilo disponibili',

  'notfound.user': 'Utente non trovato',
  'notfound.language': 'Lingua non trovata',
  'notfound.learning_profile': 'Profilo di apprendimento non trovato',
  'profile.none_active': 'Nessun profilo di apprendimento attivo: scegli prima una lingua da imparare',
  'notfound.deck': 'Mazzo non trovato',
  'notfound.card': 'Carta non trovata',
  'notfound.vocab_item': 'Vocabolo non trovato',
  'notfound.content': 'Contenuto non trovato',
  'notfound.video': 'Video non trovato',
  'notfound.notebook': 'Quaderno non trovato',
  'notfound.page': 'Pagina non trovata',
  'notfound.unit': 'Lezione non trovata',
  'notfound.chapter': 'Capitolo non trovato',
  'notfound.conversation': 'Conversazione non trovata',

  'forbidden.page': 'Nessun accesso a questa pagina',
  'forbidden.notebook': 'Nessun accesso a questo quaderno',
  'forbidden.conversation': 'Nessun accesso a questa conversazione',
  'forbidden.deck_other_user': 'Questo mazzo appartiene a un altro utente',
  'forbidden.book_level': 'Questo libro appartiene a un altro livello',
  'forbidden.deck_readonly': 'Questo mazzo non può essere modificato',
  'forbidden.vocab_readonly': 'Questo vocabolo non può essere eliminato',

  'premium.required': 'Questa funzione fa parte di Lingua Premium.',
  'premium.content': 'Questo contenuto fa parte di Lingua Premium',
  'premium.video': 'Questo video fa parte di Lingua Premium',

  'ai.unavailable': 'Le funzioni IA non sono disponibili al momento',
  'ai.cli_missing':
    'La CLI di claude non è stata trovata. Imposta CLAUDE_CLI_PATH in .env oppure esegui "npm install -g @anthropic-ai/claude-code".',
  'ai.bad_format': 'La risposta dell’IA aveva un formato inatteso',
  'ai.failed': 'Non è stato possibile generare la risposta dell’IA',
  'ai.timeout': 'La risposta dell’IA ha impiegato troppo tempo',
  'ai.no_audio': 'Nessun file audio ricevuto.',
  'ai.speech_unavailable': 'Il riconoscimento vocale non è disponibile al momento.',
  'ai.quota_premium': 'La tua quota IA mensile è esaurita.',
  'ai.quota_free': 'La tua quota IA gratuita è esaurita. Con Premium puoi continuare.',
  'ai.text_too_short':
    'Su questa pagina c’è ancora troppo poco testo. Scrivi qualche frase con lo strumento testo.',
  'ai.new_conversation': 'Nuova conversazione',
  'ai.content_filtered': 'Non è stato possibile elaborare questa richiesta. Prova a formularla in un altro modo.',
  'ai.rate_limited': 'In questo momento ci sono molte richieste in corso: riprova tra un attimo.',

  'content.no_exercises': 'Per questo contenuto non ci sono esercizi',
  'content.unit_no_exercises': 'Questa lezione non contiene esercizi',
  'content.no_matching_blocks': 'Nessun esercizio corrispondente trovato',
  'content.language_unavailable': 'Questa lingua non è disponibile',

  'placement.no_test': 'Per questa lingua non c’è ancora un test di livello',
  'placement.foreign_questions': 'Il test contiene domande sconosciute o estranee',
  'placement.stage_as_whole': 'Un livello viene sempre valutato per intero',
  'placement.recommendation_top':
    'Hai superato tutti i livelli: partiamo da C2. Se qualcosa ti sembra troppo facile, faccelo sapere dal profilo.',
  'placement.recommendation_close':
    'Per un soffio non hai raggiunto il livello successivo: parti da {level} e il gradino sopra è vicino.',
  'placement.recommendation_start':
    'È in {level} che si è fatta dura, ed è esattamente da lì che ripartiamo. Da ora vocabolario, testi e podcast saranno a questo livello.',

  'notebook.keep_one_page': 'Un quaderno deve conservare almeno una pagina',
  'notebook.order_mismatch': 'L’ordine deve contenere esattamente tutte le pagine del quaderno',
  'notebook.elements_array': 'content.elements deve essere un array',
  'notebook.stroke_too_long': 'Un tratto contiene troppi punti',

  'db.duplicate': 'Questa voce esiste già.',
  'db.not_found': 'La voce richiesta non è stata trovata.',
  'db.bad_reference': 'Riferimento non valido a un record collegato.',
  'db.bad_shape': 'La richiesta non corrisponde al modello dei dati.',
  'server.unexpected': 'Errore imprevisto del server.',
};

const catalogs = { de, en, es, fr, it } satisfies Record<string, MessageCatalog>;

export type MessageLanguage = keyof typeof catalogs;

const LANGUAGES = Object.keys(catalogs) as MessageLanguage[];

/**
 * Die Schlüssel, die an den `throw`-Stellen stehen. Der Umweg über ein Objekt
 * statt roher Zeichenketten ist Absicht: Ein Tippfehler im Schlüssel fällt
 * damit beim Kompilieren auf, nicht erst als unübersetzte Meldung beim Nutzer.
 */
export const ERR = Object.fromEntries(
  (Object.keys(de) as MessageKey[]).map((key) => [key, key]),
) as { [K in MessageKey]: K };

/** Ist die Zeichenkette ein Schlüssel dieses Katalogs? */
export function isMessageKey(value: unknown): value is MessageKey {
  return typeof value === 'string' && value in de;
}

/**
 * Sprache aus dem `Accept-Language`-Kopf. Die App schickt dort schlicht ihre
 * Menü-Locale (`de`, `en`, …); ein Browser schickt eine gewichtete Liste –
 * beides wird hier auf den ersten Treffer heruntergebrochen. Ohne Treffer
 * bleibt es bei Englisch, der Sprache mit der größten Reichweite.
 */
export function resolveLanguage(header?: string): MessageLanguage {
  for (const part of (header ?? '').split(',')) {
    const tag = part.split(';')[0]?.trim().toLowerCase() ?? '';
    const base = tag.split('-')[0] as MessageLanguage;
    if (LANGUAGES.includes(base)) return base;
  }
  return 'en';
}

/** Setzt einen Schlüssel in Text um; alles andere bleibt unverändert stehen. */
export function translateMessage(value: string, language: MessageLanguage): string {
  return isMessageKey(value) ? catalogs[language][value] : value;
}

/**
 * Wie `translateMessage`, aber mit Platzhaltern: `{level}` wird aus `params`
 * gefüllt. Gedacht für Texte, die als *Daten* zurückgehen statt als Fehler –
 * die Empfehlung am Ende des Einstufungstests etwa – und die deshalb nicht
 * durch den Fehlerfilter laufen.
 */
export function t(
  language: MessageLanguage,
  key: MessageKey,
  params?: Record<string, string | number>,
): string {
  const template = catalogs[language][key];
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}
