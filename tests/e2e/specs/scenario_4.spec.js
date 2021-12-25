describe('Scenario 4 - when user wrote strange phrase, should see EmptyState', () => {
  before(() => {
    cy.loadedServices();
  });

  it('write phrase', () => {
    cy.get('input[data-cy="searchBar"]').type('453454353');
  });

  it('check length items', () => {
    cy.get('.kong-card.card.border').should('have.length', 0);
  });

  it('check empty state', () => {
    cy.get('[data-cy="EmptyState"]').contains('No results');
  });

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 0 of 0');
    cy.get('button[data-cy="btnPreviousPage"').should('be.disabled');
    cy.get('button[data-cy="btnNextPage"').should('be.disabled');
  });
});
