describe('Scenario 2 - check pagination -> next and previous', () => {
  before(() => {
    cy.loadedServices()
  })

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 12 of 52')
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled')
    cy.get('button[data-cy="btnNextPage"').should('not.be.disabled')
  })

  it('click next button', () => {
    cy.get('button[data-cy="btnNextPage"').click()
  })

  it('check new list', () => {
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain('Sleek Granite Tuna')
    })
  })

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('13 - 24 of 52')
  })

  it('click previous button', () => {
    cy.get('button[data-cy="btnPreviousPage"').click()
  })

  it('check list', () => {
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain.text('Handmade Granite Bacon')
    })
  })

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 12 of 52')
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled')
    cy.get('button[data-cy="btnNextPage"').should('not.be.disabled')
  })
})
