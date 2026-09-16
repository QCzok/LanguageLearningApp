import js from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * ESLint 9 nutzt „flat config“: eine exportierte Liste von Konfigurationen,
 * keine `.eslintrc` mehr. Ohne diese Datei brach `npm run lint` mit
 * „couldn't find an eslint.config.js“ ab – es gab hier nie eine Konfiguration,
 * nur das Skript, das eine erwartete.
 *
 * Bewusst ohne typgestützte Regeln (`recommendedTypeChecked`): Die bräuchten
 * ein Programm aus der tsconfig und machen den Lauf um ein Vielfaches
 * langsamer, ohne viel zu finden, was `tsc --noEmit` nicht schon meldet. Der
 * Typcheck läuft ohnehin getrennt (`npm run typecheck`).
 */
export default tseslint.config(
  {
    // Erzeugtes und Fremdes fasst der Linter nicht an.
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'prisma/migrations/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        // NestJS läuft in Node; ohne diese Namen meldet `no-undef` sie als unbekannt.
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      /*
        Unbenutztes ist ein Fehler, ein führender Unterstrich die Ausnahme –
        so bleibt `catch (_error)` und ein absichtlich ignoriertes Argument
        möglich, ohne die Regel ganz abzuschalten.
      */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      /*
        `any` bleibt erlaubt, aber sichtbar: An den Rändern (Prisma-Json,
        Express-Typen) ist es stellenweise unvermeidlich, im Alltag aber ein
        Geruch. Eine Warnung sagt das, ohne den Lauf scheitern zu lassen.
      */
      '@typescript-eslint/no-explicit-any': 'warn',

      /*
        Protokolliert wird über Nests `Logger`, nicht über die Konsole: Nur so
        tragen Meldungen Kontext und Loglevel.
      */
      'no-console': 'warn',
    },
  },

  {
    // Tests dürfen gröber sein als der Produktionscode.
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
