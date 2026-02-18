describe('Responsive navigation', () => {
  context('Mobile viewport (375x812)', () => {
    beforeEach(() => {
      cy.viewport(375, 812)
      cy.visit('/')
    })

    it('shows hamburger button on mobile', () => {
      cy.getBySel('nav-menu-button').should('be.visible')
    })

    it('hides desktop nav links on mobile', () => {
      cy.getBySel('nav-link-about').should('not.be.visible')
    })

    it('opens side drawer on hamburger click', () => {
      cy.getBySel('nav-menu-button').click()
      cy.getBySel('nav-drawer').should('be.visible')
    })

    it('closes drawer when nav link is clicked and navigates', () => {
      cy.getBySel('nav-menu-button').click()
      cy.getBySel('nav-drawer').should('be.visible')
      cy.getBySel('nav-mobile-link-about').click()
      cy.url().should('include', '/about/')
      cy.getBySel('nav-drawer').should('not.be.visible')
    })

    it('closes drawer when close button is clicked', () => {
      cy.getBySel('nav-menu-button').click()
      cy.getBySel('nav-drawer').should('be.visible')
      cy.getBySel('nav-drawer-close').click()
      cy.getBySel('nav-drawer').should('not.be.visible')
    })
  })

  context('Desktop viewport (1280x720)', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('/')
    })

    it('hides hamburger button on desktop', () => {
      cy.getBySel('nav-menu-button').should('not.be.visible')
    })

    it('shows desktop nav links', () => {
      cy.getBySel('nav-link-about').should('be.visible')
      cy.getBySel('nav-link-projects').should('be.visible')
      cy.getBySel('nav-link-links').should('be.visible')
    })
  })
})
