const searchField = "#search-person";
const dataTable = "tbody";
const tableRow = "tr";
const tableCell1 = "td:first-child";

Cypress.Commands.add("searchValidName", (input) => {
  cy.get(searchField).clear();
  cy.get(searchField).type(input);
  cy.interceptGetRequest();
  cy.wait("@getData").then(() => {
    cy.get(dataTable)
      .children(tableRow)
      .each(($row) => {
        cy.wrap($row)
          .should("be.visible")
          .find(tableCell1, { timeout: 6000 })
          .should("contain", input);
      });
  });
});
