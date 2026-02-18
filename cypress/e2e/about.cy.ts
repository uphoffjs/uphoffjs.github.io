describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about/')
  })

  it('renders the page heading', () => {
    cy.getBySel('page-heading').should('be.visible').and('contain.text', 'About')
  })

  it('renders bio section', () => {
    cy.getBySel('about-bio').should('be.visible')
  })

  it('renders QA philosophy section', () => {
    cy.getBySel('about-philosophy').should('be.visible')
  })

  it('renders skills section with categories', () => {
    cy.getBySel('about-skills').should('be.visible')
    cy.getBySel('skills-grid').should('be.visible')
    cy.getBySel('skill-category').should('have.length.gte', 3)
  })

  it('renders personal interests section', () => {
    cy.getBySel('about-interests').should('be.visible')
  })

  it('GitHub link in navbar has correct href', () => {
    cy.getBySel('nav-github').should('have.attr', 'href').and('include', 'github.com')
  })
})
