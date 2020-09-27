/// <reference types="Cypress" />

describe('Inspect Automation Test Store Items using chain of commands', () => {
  it('click on he first item using item text', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
  });
  it('click on he first item using index', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
