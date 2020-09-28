/// <reference types="Cypress" />

describe('Inspect Automation Test Store Items using chain of commands', () => {
  it.only('click on the first item using item text', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then(function (itemHeaderText) {
        console.log('selected the following item ' + itemHeaderText.text());
        cy.log('selected the following item ' + itemHeaderText.text());
      });
  });
  it('click on he first item using index', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
