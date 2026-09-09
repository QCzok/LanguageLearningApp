/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\.spec\.ts$',
  transform: {
    '^.+\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/../tsconfig.json',
        // Typprüfung läuft separat über `tsc --noEmit`; im Test nur transpilieren.
        // Das spart bei den generierten Prisma-Typen mehrere Hundert MB Heap.
        diagnostics: false,
      },
    ],
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@lingua/shared$': '<rootDir>/../../packages/shared/dist/index.js',
  },
};
