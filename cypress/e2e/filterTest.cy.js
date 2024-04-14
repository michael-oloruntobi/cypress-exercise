describe("Filter Functionality Test", () => {
  const employeeTypes = ["Contractor", "Employee"];

  employeeTypes.forEach((employeeType) => {
    it(`validates filter for ${employeeType}`, () => {
      cy.filterEmployeeType(employeeType);
    });
  });
});
