/// <reference types="cypress"/>
import productsPage from "../../page/products.page";


describe('These tests executes the cart scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products")
    })

    it('Should remove a product from cart', () => {
        //navigate to products page and add a product to cart then remove it
        productsPage.removeFrmCart()
        //Asser that the cart is empty
        cy.get(productsPage.emptyCart).should('be.visible')
        //assert that the back to store button is visible
        cy.get(productsPage.backToStoreBtn).should('be.visible')
        //Assert that the product in cart grid is not visible
        //cy.get(productsPage.prodInCart).should('not.be.visible')

    });

    it('Should change product quantity in cart', () => {
        //navigate to products page and add a product to cart then change product quantity
        //productsPage.addToCart()
        productsPage.addSingleItem(0)
        cy.get(productsPage.inQtyBtn).should('be.visible')
        cy.get(productsPage.inQtyBtn).click()
        //assert that the product count is 2
        cy.get(productsPage.priceCont).should('have.value', '')

    });

    it('Should add product to cart & click continue shopping', () => {
        //navigate to products page and add a product to cart then clickdetailed cart button
        productsPage.addToCart()
        // cy.get(productsPage.detailedCartBtn).should('be.visible')
         //cy.get(productsPage.detailedCartBtn).click()
        //assert that the continue shopping button is clickable 
        cy.get(productsPage.contShopBtn).should('not.be.disabled')
        cy.get(productsPage.contShopBtn).click()

    });

    it('Should add product to cart & click checkout button', () => {
        //navigate to products page and add a product to cart then click checkout button
        productsPage.addSingleItem(0)
        //cy.wait(5000)
        cy.get(productsPage.checkoutBtn).should('not.be.disabled')
        //cy.get(productsPage.backToStoreBtn).click({ force: true})
        //assert that the checkout page is being displayed
        //cy.get(productsPage.priceCont).should('not.be.visible')


    });



})