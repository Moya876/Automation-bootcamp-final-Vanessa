/// <reference types="cypress"/>
import productsPage from "../../page/products.page";


describe('These tests covers the product details scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products");
    })
    it('Should ensure a product have an image', () => {
        //Should load the site and select the first product
        //Assert that the product have images and they are clickable
        productsPage.imgView()
    })

    it('Should click a product and ensure it has a quantity field', () => {
        //Should load the site and select the first product
        productsPage.prodInput()
        //Assert that the product have a input quantity field
        cy.get(productsPage.input).should('be.visible')
        //User should be able to type a number in the qty field
        cy.get(productsPage.input).type('0')
        cy.get(productsPage.detCat).should('have.text', 'hathat')

    })

    it('Should click a product and ensure it has the correct category', () => {
        //Should load the site and select the first product
        productsPage.prodCat()
        //Assert that the product does not have the wrong category
        cy.get(productsPage.detCat).should('not.have.text', 'laptop')

    })

})
