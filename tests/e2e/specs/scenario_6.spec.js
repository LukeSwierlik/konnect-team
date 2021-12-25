describe('Scenario 6 - should display ErrorState when request was failed', () => {
  before(() => {
    cy.loadedServicesFailure();
  });

  it('check error state', () => {
    cy.get('[data-cy="ErrorState"]').contains('Something went wrong');
  });
});
