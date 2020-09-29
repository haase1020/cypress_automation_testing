/// <reference types="Cypress" />

describe('cypress web security', () => {
  it('validate visiting two different domains', () => {
    //this test will fail due to Cypress issue
    cy.visit('http://www.webdriveruniversity.com/');
    cy.visit('https://www.automationteststore.com/');
  });
  it.only('validate visiting two different domains via user scenarios', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
  });
});
///multiple superdomains in one test not supported (ticket open in Cypress)
