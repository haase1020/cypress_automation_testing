/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it.only('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');
    cy.get('[name="email"]').type('mandi@gmail.com');
    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });

  it('Should not be able to submit a successful submission via contact us form as all field are required', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');
    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
