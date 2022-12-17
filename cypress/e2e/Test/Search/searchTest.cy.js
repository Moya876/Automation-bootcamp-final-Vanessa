/// <reference types="cypress"/>
import productsPage from "../../page/products.page";

describe('These tests covers the Search scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products");
    })

    it('Should do a partial search by category', () => {
        //Should visit website and do a partial search by category
        productsPage.search('laptop')
        //Assert that the results shows 2 products
        cy.get(productsPage.searchResults).should('have.length', 2)
    });

    it('Should do a full search by entering a product name', () => {
        //Should visit website and do a full search a complete product name
        productsPage.search('Quality Fitted Hat')
        //Assert that the results shows 1 product
        cy.get(productsPage.searchResults).should('have.length', 1)

    });

    it('Should search for a product but return no results', () => {
        //Should visit website and search for a product that doesn't exist 
        productsPage.search('Iphone pro max')
        //Assert that the search result shows no product
        cy.get(productsPage.searchResults).should('have.length', 0)
    });
})