describe('Links page', () => {
  beforeEach(() => {
    cy.visit('/links/')
  })

  it('renders the page heading', () => {
    cy.getBySel('page-heading').should('be.visible').and('contain.text', 'Links')
  })

  it('GitHub link has correct href', () => {
    cy.getBySel('link-github').should('have.attr', 'href').and('include', 'github.com')
  })

  it('LinkedIn link has correct href', () => {
    cy.getBySel('link-linkedin').should('have.attr', 'href').and('include', 'linkedin.com')
  })

  it('email link has correct mailto href', () => {
    cy.getBySel('link-email').should('have.attr', 'href').and('include', 'mailto:')
  })

  it('resume link points to PDF', () => {
    cy.getBySel('link-resume').should('have.attr', 'href').and('include', '.pdf')
  })

  it('external links open in new tab', () => {
    cy.getBySel('link-github').should('have.attr', 'target', '_blank')
    cy.getBySel('link-linkedin').should('have.attr', 'target', '_blank')
  })

  it('resume link has download attribute', () => {
    cy.getBySel('link-resume').should('have.attr', 'download')
  })
})
