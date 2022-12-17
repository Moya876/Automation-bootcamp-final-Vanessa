/// <reference types="cypress" />
import productSortPage from "../../page/productSort.page";
import productsPage from "../../page/products.page";

describe('Category sort', () => {
  beforeEach(() => {
    cy.visit('https://ui-automation-camp.vercel.app/products')
  })
  it('should sort category by shirts', () => {
    //On product page sort category by shirts
    productSortPage.selectCatShirts()
    //Assert that the results when sort by shirts is 5
    cy.get(productsPage.searchResults).should('have.length', 5)

  })

  it('should sort category by pants', () => {
    //On product page sort category by pants
    productSortPage.selectCatPants()
    //Assert that the results when sort by pants is 3
    cy.get(productsPage.searchResults).should('have.length', 3)

  })

  it('should sort category by shoes', () => {
    //On products page sort category by shoes
    productSortPage.selectCatShoes()
    //Assert that the results when sort by shoes is not 22 results should be 3
    cy.get(productsPage.searchResults).should('not.have.length', 22)

  })

  it('should sort category by hat', () => {
    //On products page sort category by hats
    productSortPage.selectCatHats()
    //Assert that the results when sort by hats is not 5 only 2 hat products are on the page
    cy.get(productsPage.searchResults).should('not.have.length', 5)

  })

  it('should sort category by sofa', () => {
    //On products page sort category by sofa
    productSortPage.selectCatSofa()
    //Assert that the results when sort by sofa is 3
    cy.get(productsPage.searchResults).should('have.length', 3)


  })

  it('should sort category by laptop', () => {
    //On products page sort category by laptop
    productSortPage.selectCatLaptop()
    //Assert that the results when sort by laptop is 3
    cy.get(productsPage.searchResults).should('have.length', 3)


  })


})