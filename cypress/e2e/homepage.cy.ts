describe('Homepage content', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders hero section', () => {
    cy.getBySel('home-hero').should('be.visible')
  })

  it('renders heading with name', () => {
    cy.getBySel('home-heading').should('be.visible').and('contain.text', 'Jacob Uphoff')
  })

  it('renders skills preview section with skill tags', () => {
    cy.getBySel('home-skills-preview').should('be.visible')
    cy.getBySel('home-skill-tag').should('have.length.gte', 1)
  })

  it('renders CTA section with project and contact links', () => {
    cy.getBySel('home-cta-section').should('be.visible')
    cy.getBySel('home-cta-projects').should('be.visible').and('have.attr', 'href', '/projects')
    cy.getBySel('home-cta-links').should('be.visible').and('have.attr', 'href', '/links')
  })
})
