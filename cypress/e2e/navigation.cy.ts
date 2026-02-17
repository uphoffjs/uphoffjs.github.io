describe('Page routes load without errors', () => {
  const routes = [
    { path: '/', title: 'Jacob Uphoff' },
    { path: '/about/', title: 'About' },
    { path: '/projects/', title: 'Projects' },
    { path: '/links/', title: 'Links' },
  ]

  routes.forEach(({ path, title }) => {
    it(`loads ${path} and contains expected content`, () => {
      cy.visit(path)
      cy.title().should('contain', title)
      cy.getBySel('navbar').should('be.visible')
      cy.getBySel('footer').should('be.visible')
    })
  })

  it('navigates from home to projects via CTA', () => {
    cy.visit('/')
    cy.getBySel('home-cta').click()
    cy.url().should('include', '/projects/')
    cy.getBySel('page-heading').should('be.visible')
  })

  it('navigates via navbar links', () => {
    cy.visit('/')
    cy.getBySel('nav-link-about').click()
    cy.url().should('include', '/about/')
    cy.getBySel('page-heading').should('be.visible')
    cy.getBySel('nav-link-projects').click()
    cy.url().should('include', '/projects/')
    cy.getBySel('page-heading').should('be.visible')
    cy.getBySel('nav-link-links').click()
    cy.url().should('include', '/links/')
    cy.getBySel('page-heading').should('be.visible')
  })
})
