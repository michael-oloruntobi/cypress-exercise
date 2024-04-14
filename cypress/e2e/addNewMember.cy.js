describe("Add/Edit Member Functionality Test", () => {
  it("verifies Add Member functionality", () => {
    cy.addNewMember().then((generatedName) => {
      cy.interceptGetRequest();

      cy.wait("@getData").then(() => {
        cy.validateCreateNewMemberSuccessNotification();
        cy.scrollTo("bottom");
        cy.verifyNewRecord(generatedName);
        cy.searchValidName(generatedName);
      });
    });
  });

  it("verifies Edit Member functionality", () => {
    cy.editMember().then((data) => {
      cy.validateEditMemberNotification();
      cy.verifyEditedMemberData(data.fullname, 1);
      cy.verifyEditedMemberData(data.salary.toLocaleString("en-US"), 5);
    });
  });
});
