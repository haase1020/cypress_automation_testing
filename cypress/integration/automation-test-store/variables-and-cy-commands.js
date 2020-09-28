/// <reference types="Cypress" />

describe('Verifying variables, cypress commands and jquery comands', () => {
  it.only('navigateding to specific product pages', () => {
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

    //right way-->
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get("a[href*='product/category&path=']").contains('Skincare').click;
  });
});
