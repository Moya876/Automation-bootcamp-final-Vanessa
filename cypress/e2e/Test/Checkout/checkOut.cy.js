/// <reference types="cypress"/>
import productsPage from "../../page/products.page";
import checkoutData from "../../data/checkout.data";
import checkoutPage from "../../page/checkout.page";


describe('These tests shows the checkout scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products")
    })
    
    it('Should add a product to cart & checkout', () => {
        const a = 0
        //Should add a single product to cart
        productsPage.addToCart()
        cy.wait(1000)
        //Should enter billing info and proceed to checkout
        checkoutPage.billing(checkoutData[a].name, checkoutData[a].email, checkoutData[a].address, checkoutData[a].suite, checkoutData[a].city, checkoutData[a].country, checkoutData[a].state, checkoutData[a].zipcode)
        //Should enter card details and place order
        cy.wait(1000)
        checkoutPage.cardinfo()
        //Assert that the order was successfully placed
        cy.get(checkoutPage.orderInvoice).should('be.visible')
    });
    
    it('Should add a product to cart & verify billing data was entered', () => {
        const b = 0
        //Should add a single product to cart
        productsPage.addToCart()
        cy.wait(1000)
        //Should enter billing info and proceed to checkout
        checkoutPage.billing(checkoutData[b].name, checkoutData[b].email, checkoutData[b].address, checkoutData[b].suite, checkoutData[b].city, checkoutData[b].country, checkoutData[b].state, checkoutData[b].zipcode)
        //Assert that on the checkout page billing info was successfully saved
        cy.wait(1000)
        cy.get(checkoutPage.billingBox).should('be.visible')
    });

    it('Should add multiple products to cart & checkout', () => {
        const c = 0
        //Should add 3 products to cart
        productsPage.addMultiToCart()
        //Should enter billing info and proceed to checkout
        checkoutPage.billing(checkoutData[c].name, checkoutData[c].email, checkoutData[c].address, checkoutData[c].suite, checkoutData[c].city, checkoutData[c].country, checkoutData[c].state, checkoutData[c].zipcode)
        //Should enter card details and place order
        checkoutPage.cardinfo()
        //Assert that the order was successfully placed
        cy.get(checkoutPage.orderInvoice).should('be.visible')
    });
})