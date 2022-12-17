/// <reference types="cypress" />
import productSortPage from "../../page/productSort.page";


describe('Sort', () => {
  beforeEach(() => {
    cy.visit('https://ui-automation-camp.vercel.app/products')
  })

  it('should sort product list from A-Z', () => {
    //should sort products from a-z on product page
    productSortPage.selectSortAZ()
    //Assert that the first product is dell laptop
    cy.get(productSortPage.firstProd).should('have.text', productSortPage.dellLaptop)


  })

  it('should sort product list from Z-A', () => {
    //should sort products from a-z on product page
    productSortPage.selectSortZA()
    //Assert that the first product is not dell laptop as the product should now be white couch
    cy.get(productSortPage.firstProd).should('not.have.text', productSortPage.dellLaptop)

  })

  it('should sort product list from high to low', () => {
    //should sort products from high to low on product page
    productSortPage.selectSortHigh()
    //Assert that the first product is macbook pro and not quality mug
    cy.get(productSortPage.firstProd).should('not.have.text', productSortPage.qlMug)

  })

  it('should sort product list from low to high', () => {
     //should sort products from low to high on product page
    productSortPage.selectSortLow()
     //Assert that the first product is quality mug
     cy.get(productSortPage.firstProd).should('have.text', productSortPage.qlMug)

  })
})