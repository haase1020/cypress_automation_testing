/// <reference types="Cypress" />

describe('handle js alerts', () => {
  it('confirm js alert has right text', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#button1').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!');
    });
  });

  it('validate js confirm alert box works correctly when clicking ok', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#button4').click();

    cy.on('window:alert', (str) => {
      return true;
    });
    cy.get('#confirm-alert-text').contains('You pressed OK!');
  });
});
