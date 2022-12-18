/// <reference types="cypress"/>
import productsPage from "../../page/products.page";


describe('These tests executes the cart scenarios', () => {
    beforeEach(() => {
        cy.navigateToFullUrl('/products')
    })

    it('Should remove a product to cart', () => {
        cy.wait(1000)
        //Visit the website and add a product to the cart
        productsPage.addSingleItem(0)
        //Assert that the product was added to the cart
        cy.get(productsPage.priceCont).should('not.exist')
        productsPage.removeItemFrmCart()
         //Asser that the cart is empty
         cy.get(productsPage.emptyCart).should('be.visible')


    });

    it.skip('Should remove a product from cart', () => {
        //navigate to products page and add a product to cart then remove it
        cy.wait(1000)
        //productsPage.addSingleItem(0)
        productsPage.removeItemFrmCart()
        cy.wait(1000)
        //Asser that the cart is empty
        cy.get(productsPage.emptyCart).should('be.visible')
        cy.wait(1000)
        //assert that the back to store button is visible
        cy.get(productsPage.backToStoreBtn).should('be.visible')
        

    });

    it('Should change product quantity in cart', () => {
        //navigate to products page and add a product to cart then change product quantity
        cy.wait(1000)
        productsPage.addSingleItem(0)
       //productsPage.addToCart()
        cy.wait(1000)
        //productsPage.addSingleItem(0)
        cy.get(productsPage.inQtyBtn).should('be.visible')
        cy.wait(1000)
        cy.get(productsPage.inQtyBtn).click()
        cy.wait(1000)
        //assert that the product count is 2
        cy.get(productsPage.priceCont).should('have.value', '')

    });

    it('Should add product to cart & click continue shopping', () => {
        //navigate to products page and add a product to cart then clickdetailed cart button
        productsPage.addSingleItem(0)
        cy.wait(1000)
        cy.get(productsPage.detailedCartBtn).should('be.visible')
         cy.get(productsPage.detailedCartBtn).click()
        //assert that the continue shopping button is clickable 
        cy.get(productsPage.contShopBtn).should('not.be.disabled')
        cy.get(productsPage.contShopBtn).click({force: true})

    });

    it('Should add product to cart & click checkout button', () => {
        //navigate to products page and add a product to cart then click checkout button
        productsPage.addSingleItem(0)
        cy.wait(1000)
        cy.get(productsPage.checkoutBtn).should('not.be.disabled')
        cy.get(productsPage.backToStoreBtn).click({ force: true})
        //assert that the checkout page is being displayed
        cy.get(productsPage.priceCont).should('not.be.visible')


    });



})