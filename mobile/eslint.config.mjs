import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * ESLint 9 nutzt „flat config“: eine exportierte Liste von Konfigurationen,
 * keine `.eslintrc` mehr. Ohne diese Datei brach `npm run lint` mit
 * „couldn't find an eslint.config.js“ ab – es gab hier nie eine
 * Konfiguration, nur das Skript, das eine erwartete.
 *
 * `react-hooks` ist hier nicht optional: Der Code verlässt sich an mehreren
 * Stellen darauf, dass `exhaustive-deps` eine echte Regel ist – die
 * `eslint-disable-next-line react-hooks/exhaustive-deps`-Zeilen im
 * Lehrwerk und im Vokabeltrainer stehen dort mit Begründung im Kommentar
 * daneben. Ohne das Plugin wären sie stumme Dekoration.
 */
export default tseslint.config(
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**', 'web-build/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // React Native stellt die Browser-nahen Namen selbst bereit; im Web
        // kommen `window`/`navigator`/`localStorage` echt dazu.
        console: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        URL: 'readonly',
        Intl: 'readonly',
        __DEV__: 'readonly',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      /*
        Protokolliert wird über die Oberfläche, nicht über die Konsole – die
        eine Ausnahme ist die ErrorBoundary, die einen abgefangenen Absturz
        festhalten muss und das dort auch begründet.
      */
      'no-console': 'warn',

      /*
        `React` selbst wird importiert, aber seit dem neuen JSX-Transform nicht
        mehr namentlich benutzt – ohne diese Ausnahme meldet `no-unused-vars`
        jeden Bildschirm.
      */
      'no-undef': 'off',
    },
  },
);
