describe('Scenario 3 - when user wrote phrase, should see filtered list', () => {
  before(() => {
    cy.loadedServices();
  });

  it('write phrase', () => {
    cy.get('input[data-cy="searchBar"]').type('ergonomic');
  });

  it(' check length items', () => {
    cy.get('.kong-card.card.border').should('have.length', 6);
  });

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 6 of 6');
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled');
    cy.get('button[data-cy="btnNextPage"').should('be.disabled');
  });
});
