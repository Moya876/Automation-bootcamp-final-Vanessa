/// <reference types="cypress"/>
import productsPage from "../../page/products.page";


describe('These tests executes the add to cart scenarios', () => {
    beforeEach(() => {
        cy.navigateToFullUrl('/products')
    })

    it('Should add a product to cart', () => {
        //Visit the website and add a product to the cart
        productsPage.addSingleItem(0)
        //Assert that the product was added to the cart
        cy.get(productsPage.priceCont).should('not.exist')

    });

    it('Should add multiple products to cart', () => {
        //Visit the website and add a product to cart
        productsPage.addMultiToCart()
        //Increase product quantity
        //cy.get(productsPage.inQtyBtn).click()
        //Assert that product Qty changed 

    })


    it('should add multiple of the same products to cart', () => {
        //Visit the website and add multiple products to cart
        productsPage.addSingleItem(0)
        cy.navigateToFullUrl('/products')
        productsPage.addSingleItem(0)
        cy.navigateToFullUrl('/products')
        productsPage.addSingleItem(0)

        //Assert that multiple products were added to the cart
    })

})
