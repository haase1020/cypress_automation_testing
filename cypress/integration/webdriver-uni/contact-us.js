/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');

    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');
    cy.get('[name="email"]').type('mandi@gmail.com');
    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });

  it('Should not be able to submit a successful submission via contact us form as all field are required', () => {
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');

    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');
    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
