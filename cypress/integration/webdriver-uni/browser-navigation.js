/// <reference types="Cypress" />

describe('validated webdriver uni homepage links', () => {
  it.only('confirm links redirect to the current pages', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'contactus');
    cy.go('back');
    cy.reload();
    // cy.reload(true) //reload without using cache
    cy.go('forward');
    cy.url().should('include', 'contactus');
  });
});
