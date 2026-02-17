declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(selector: string, ...args: unknown[]): Chainable<JQuery<HTMLElement>>
      getBySelLike(selector: string, ...args: unknown[]): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('getBySel', (selector: string, ...args: unknown[]) => {
  return cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('getBySelLike', (selector: string, ...args: unknown[]) => {
  return cy.get(`[data-cy*="${selector}"]`, ...args)
})

export {}
