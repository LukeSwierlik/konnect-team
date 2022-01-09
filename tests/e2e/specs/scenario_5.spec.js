describe('Scenario 5 - when user clear searches, should see initial list', () => {
  before(() => {
    cy.loadedServices()
  })

  it('write phrase', () => {
    cy.get('input[data-cy="searchBar"]').type('ergonomic')
  })

  it('check length items', () => {
    cy.get('.kong-card.card.border').should('have.length', 6)
  })

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 6 of 6')
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled')
    cy.get('button[data-cy="btnNextPage"').should('be.disabled')
  })

  it('reset search', () => {
    cy.get('input[data-cy="searchBar"]').clear()
  })

  it('check length items', () => {
    cy.get('.kong-card.card.border').should('have.length', 12)
  })

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 12 of 52')
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled')
    cy.get('button[data-cy="btnNextPage"').should('not.be.disabled')
  })
})
