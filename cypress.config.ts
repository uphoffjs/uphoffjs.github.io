import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173',
    setupNodeEvents(on, config) {
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
