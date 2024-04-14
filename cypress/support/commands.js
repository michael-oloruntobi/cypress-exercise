Cypress.Commands.add("getByTestId", (selector, ...args) => {
  return cy.get(`[data-testid*=${selector}]`, ...args);
});

Cypress.Commands.add("getByTest_Id", (selector, ...args) => {
  return cy.get(`[data-test-id*=${selector}]`, ...args);
});
