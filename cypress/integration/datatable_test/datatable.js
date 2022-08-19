import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user goes to url', () => {
  cy.visit('https://qa-environment.koalaresorthotels.com');
});

When('user clicks on login', () => {
  cy.get('#navLogon > .nav-link').click();
});

And('user uses given data to log in', (dataTable) => {
                        //!datatable.rawTable[rowNo][columnNo]
  cy.get('#UserName').type(dataTable.rawTable[1][0]);
  cy.get('#Password').type(dataTable.rawTable[1][1]);
});

And('user clicks on login button', () => {
  cy.get('#btnSubmit').click();
});

Then('user verifies url has changed', () => {
  cy.url().should('contain', '/Admin/UserAdmin')
});
