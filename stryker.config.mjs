/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  mutate: [
    'src/components/**/*.tsx',
    'src/app/**/page.tsx',
    'src/app/not-found.tsx',
    '!src/app/layout.tsx',
  ],
  testRunner: 'command',
  commandRunner: {
    command: 'npm run build && npm run test:e2e',
  },
  reporters: ['html', 'clear-text', 'progress'],
  htmlReporter: {
    fileName: 'reports/mutation/mutation-report.html',
  },
  timeoutMS: 120000,
  concurrency: 1,
  cleanTempDir: 'always',
}
