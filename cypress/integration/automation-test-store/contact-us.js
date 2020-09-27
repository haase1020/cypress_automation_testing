/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href$='contact']").click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();

    cy.get('#ContactUsFrm_first_name').type('Mandi');
    cy.get('#ContactUsFrm_email').type('mandi@gmail.com');
    cy.get('#ContactUsFrm_enquiry').type('Hello everyone!');
    cy.get("button[title='Submit']").click();
  });
});
