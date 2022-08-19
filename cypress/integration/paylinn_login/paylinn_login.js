import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user goes to home page', () => {
  cy.visit('https://www.paylinn.com/');
});

When('user clicks on login', () => {
  cy.contains('Hello').click();
});

And('user enters username', () => {
  cy.get(
    ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).type('User');
});

And('user enters password', () => {
  cy.get(
    ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).type('user');
});

And('user clicks on login button', () => {
  cy.get('.MuiButtonBase-root').click();
});

Then('user verifies login', () => {
  cy.url().should('eq', 'https://www.paylinn.com/user');
});
