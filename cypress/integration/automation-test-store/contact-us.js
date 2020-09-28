/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href$='contact']")
      .click()
      .then(function (itemText) {
        cy.log('you clicked on the following: ' + itemText.text()); //.text() is JQuery
      });
    // cy.xpath("//a[contains(@href, 'contact')]").click();

    cy.get('#ContactUsFrm_first_name').type('Mandi');
    cy.get('#ContactUsFrm_email').type('mandi@gmail.com');
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.get('#ContactUsFrm_enquiry').type('Hello everyone!');
    cy.get("button[title='Submit']").click();
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!'
    );
    cy.log('your test is done!');
    // //can use non-cypress command but order not certain
    // console.log('your test has completed!');
  });
});
