describe('404 page', () => {
  beforeEach(() => {
    cy.visit('/this-page-does-not-exist/', { failOnStatusCode: false })
  })

  it('renders 404 container', () => {
    cy.getBySel('not-found').should('be.visible')
  })

  it('displays 404 code', () => {
    cy.getBySel('not-found-code').should('be.visible').and('contain.text', '404')
  })

  it('navigates back to home when clicking Back to Home link', () => {
    cy.getBySel('not-found-home-link').should('be.visible').click()
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
    cy.getBySel('home-hero').should('be.visible')
  })
})
