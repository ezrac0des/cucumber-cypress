import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user goes to Google', () => {
  cy.visit('https://www.google.com/');
});

When('searches for {string}', (capital) => {
  cy.get('.gLFyf').type(capital).type('{enter}');
});

Then('user verifies title includes {string}', (capital) => {
  cy.title().should('include', capital);
});
