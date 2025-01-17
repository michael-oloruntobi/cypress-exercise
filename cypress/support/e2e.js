// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "../pageObjects/AddNewMember";
import "../pageObjects/FilterEmployee";
import "../pageObjects/SearchEmployee";

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.visit("/");
});

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes(
      "Objects are not valid as a React child (found: TypeError: Failed to fetch). If you meant to render a collection of children, use an array instead."
    )
  ) {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  } else if (
    err.message.includes(
      "Objects are not valid as a React child (found: Error: Bad Request (400)). If you meant to render a collection of children, use an array instead."
    )
  ) {
    return false;
  }
  return true;
});
