import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on) {
      on('task', {
        log(message: string) {
          console.log(message)
          return null
        },
        table(message: unknown) {
          console.table(message)
          return null
        },
      })
    },
  },
})
