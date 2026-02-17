declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getBySel(
        selector: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>
      getBySelLike(
        selector: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add(
  'getBySel',
  (
    selector: string,
    options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>,
  ) => {
    return cy.get(`[data-cy="${selector}"]`, options)
  },
)

Cypress.Commands.add(
  'getBySelLike',
  (
    selector: string,
    options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>,
  ) => {
    return cy.get(`[data-cy*="${selector}"]`, options)
  },
)

export {}
