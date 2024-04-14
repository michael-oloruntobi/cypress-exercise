const dataTable = "tbody";
const tableRow = "tr";
const tableCell3 = "td:nth-child(3)";

Cypress.Commands.add("filterEmployeeType", (input) => {
  const lowercaseInput = input.toLowerCase();
  cy.getByTestId(`${lowercaseInput}-filter`).click();
  cy.interceptGetRequest();
  cy.wait("@getData").then(() => {
    cy.get(dataTable)
      .children(tableRow)
      .each(($row) => {
        cy.wrap($row).find(tableCell3).should("contain", input);
      });
  });
});
