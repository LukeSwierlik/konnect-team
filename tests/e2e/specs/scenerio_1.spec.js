describe('Scenario 1 - check pagination -> next', () => {
  before(() => {
    cy.loadedServices();
  });

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('1 - 12 of 52');
  });

  it('click next button', () => {
    cy.get('button[data-cy="btnNextPage"').click();
  });

  it('check new list', () => {
    cy.get('.kong-card.card.border').then(items => {
      expect(items[0]).to.contain('Sleek Granite Tuna');
    });
  });

  it('check status pagination', () => {
    cy.get('[data-cy="directions"]').contains('13 - 24 of 52');
  });
});

