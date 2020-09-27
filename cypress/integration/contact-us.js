/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');
    cy.get('[name="email"]').type('mandi@gmail.com');
    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
  });

  it('Should not be able to submit a successful submission via contact us form as all field are required', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Mandi');
    cy.get('[name="last_name"]').type('Haase');

    cy.get('textarea.feedback-input').type('hello world');
    cy.get('[type="submit"]').click();
  });
});
