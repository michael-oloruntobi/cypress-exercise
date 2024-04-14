import { faker } from "@faker-js/faker";
import testData from "../fixtures/inputs.json";

const createPersonButton = "#create-person";
const nameInput = "#name";
const jobTitleInput = "#jobTitle";
const countryInput = "[data-test-id='country-input']";
const currencyInput = "[data-test-id='currency-input']";
const salaryInput = "#salary-input";
const employmentInput = "[data-test-id='employment-input']";
const modalSaveButton = "[data-testid='modal-save-button']";
const statusElement = "[role='status']";
const editPersonButton = "[data-testid='edit-person']";
const dataTable = "tbody";
const tableRow = "tr";
const tableCell = "td";

Cypress.Commands.add("addNewMember", () => {
  const fullname = faker.person.fullName().replace(/[^\w\s.]/gi, "");
  const jobTitle = faker.person.jobTitle();
  const salary = Math.floor(Math.random() * 200000);
  return cy
    .get(createPersonButton)
    .click()
    .get(nameInput)
    .type(fullname)
    .get(jobTitleInput)
    .type(jobTitle)
    .get(countryInput)
    .select(testData.country)
    .get(currencyInput)
    .select(testData.currency)
    .get(salaryInput)
    .type(salary)
    .get(employmentInput)
    .select(testData.employeeType)
    .get(modalSaveButton)
    .click()
    .then(() => fullname);
});

Cypress.Commands.add("validateCreateNewMemberSuccessNotification", () => {
  cy.get(statusElement).should(
    "contain",
    testData.newMemberSuccessNotification
  );
});

Cypress.Commands.add("validateEditMemberNotification", () => {
  cy.get(statusElement).should(
    "contain",
    testData.editMemberSuccessNotification
  );
});

Cypress.Commands.add("verifyNewRecord", (fullname) => {
  cy.get(dataTable)
    .find(tableRow)
    .last()
    .find(tableCell)
    .first()
    .then(($row) => {
      cy.wrap($row).should("contain", fullname);
    });
});

Cypress.Commands.add("editMember", () => {
  const fullname = faker.person.fullName().replace(/[^\w\s.]/gi, "");
  const salary = Math.floor(Math.random() * 200000);
  return cy
    .get(editPersonButton)
    .eq(0)
    .click()
    .get(nameInput)
    .clear()
    .type(fullname)
    .get(salaryInput)
    .clear()
    .type(salary)
    .get(modalSaveButton)
    .click()
    .then(() => ({ fullname, salary }));
});

Cypress.Commands.add("verifyEditedMemberData", (value, columnIndex) => {
  cy.get(dataTable)
    .find(tableRow)
    .first()
    .find(`${tableCell}:nth-child(${columnIndex})`)
    .then(($td) => {
      cy.wrap($td).should("contain.text", value);
    });
});

Cypress.Commands.add("interceptGetRequest", () => {
  return cy
    .intercept("GET", "http://localhost:4002/people?name_like=*")
    .as("getData");
});
