function terminalLog(violations: Cypress.Axe.Result[]) {
  cy.task('log', `${violations.length} accessibility violation(s) detected`)
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }))
  cy.task('table', violationData)
}

const pages = ['/', '/about/', '/projects/', '/links/']

describe('WCAG AA accessibility', () => {
  pages.forEach((path) => {
    it(`${path} has zero WCAG AA violations`, () => {
      cy.visit(path)
      cy.injectAxe()
      cy.checkA11y(
        null,
        {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa'],
          },
        },
        terminalLog
      )
    })
  })
})
