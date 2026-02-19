describe('Projects page', () => {
  beforeEach(() => {
    cy.visit('/projects/')
  })

  it('renders the page heading', () => {
    cy.getBySel('page-heading').should('be.visible').and('contain.text', 'Projects')
  })

  it('renders 3 project cards', () => {
    cy.getBySel('project-card').should('have.length', 3)
  })

  it('project cards display tech tags', () => {
    cy.getBySel('project-card')
      .first()
      .within(() => {
        cy.getBySel('project-tag').should('have.length.gte', 1)
      })
  })
})

describe('Case study page', () => {
  it('navigates from project card to case study', () => {
    cy.visit('/projects/')
    cy.getBySel('project-card')
      .first()
      .within(() => {
        cy.getBySel('project-card-link').click()
      })
    cy.url().should('include', '/projects/')
    cy.getBySel('case-study').should('be.visible')
  })

  it('case study has all required sections', () => {
    cy.visit('/projects/portfolio-e2e-suite/')
    cy.getBySel('case-study-title').should('be.visible')
    cy.getBySel('case-study-role').should('be.visible')
    cy.getBySel('case-study-problem').should('be.visible')
    cy.getBySel('case-study-approach').should('be.visible')
    cy.getBySel('case-study-tools').should('be.visible')
    cy.getBySel('case-study-results').should('be.visible')
  })

  it('case study displays role attribution', () => {
    cy.visit('/projects/portfolio-e2e-suite/')
    cy.getBySel('case-study-role').should('contain.text', 'Lorem ipsum')
  })

  it('case study tools section has tool badges', () => {
    cy.visit('/projects/portfolio-e2e-suite/')
    cy.getBySel('case-study-tools').within(() => {
      cy.getBySel('case-study-tool').should('have.length.gte', 3)
    })
  })
})
