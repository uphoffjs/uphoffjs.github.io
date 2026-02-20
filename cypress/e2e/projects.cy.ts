describe('Projects page', () => {
  beforeEach(() => {
    cy.visit('/projects/')
  })

  it('renders the page heading', () => {
    cy.getBySel('page-heading').should('be.visible').and('contain.text', 'Projects')
  })

  it('shows coming soon message when no projects exist', () => {
    cy.contains('Coming Soon').should('be.visible')
  })
})
