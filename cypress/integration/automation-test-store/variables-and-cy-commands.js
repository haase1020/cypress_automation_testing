/// <reference types="Cypress" />

describe('Verifying variables, cypress commands and jquery comands', () => {
  it('navigateding to specific product pages', () => {
    cy.visit('https://www.automationteststore.com/');
    // //not recommended way to use cypress
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains('Makeup');
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains('Skincare');
    // skincareLink.click();

    //recommended approach
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get("a[href*='product/category&path=']").contains('Skincare').click;
  });

  it('navigating to specific product pages', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();

    // following code will fail
    // const header = cy.get('h1 .maintext');
    // cy.log(header.text());

    //recommended approach
    cy.get('h1 .maintext').then(($headerText) => {
      const headerText = $headerText.text();
      cy.log('found header text: ' + headerText);
      //assertion
      expect(headerText).is.eq('Makeup');
    });
  });

  it.only('Validate properties of the Contact Us Page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');

    //uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form')
      .find('#field_11')
      .should('contain', 'First name');

    //JQuery approach

    //embedded commands (Closure)
  });
});
