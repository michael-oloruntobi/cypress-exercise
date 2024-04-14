describe("Search Functionality Test", () => {
  it("searches through different valid inputs and returns valid results", () => {
    cy.fixture("inputs.json").then((testData) => {
      // Access the "inputs" array directly
      testData.searchTerms.forEach((input) => {
        cy.searchValidName(input);
      });
    });
  });
});
