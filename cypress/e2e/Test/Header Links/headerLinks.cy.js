/// <reference types="cypress" />
import headerPage from "../../page/header.page";
import signUpPage from "../../page/signUp.page";
import productsPage from "../../page/products.page";
import contactPage from "../../page/contact.page";


describe('Ensure header links work', () => {
    beforeEach(() => {
        cy.navigateToFullUrl('/products')
    })
    it('should click cart icon', () => {
        //on product page click cart icon
        headerPage.cart()
        //Assert that cart Icon was clicked
        cy.get(productsPage.cartHeader).should('be.visible')
    })

    it('should click header logo', () => {
        //On products page click the site logo
        headerPage.logo()
    })

    it('should click home button', () => {
        //On product page click the home button
        headerPage.home()
    })

    it('should click about button', () => {
        //on header link options select about
        headerPage.about()

    })

    it('should click contact button', () => {
        //on header links click contact option
        headerPage.contact()
        //assert that user is on contact page
        cy.get(contactPage.contactMsg).should('have.text', 'Want to get in touch?')

    })

    

    it('should signout of the application', () => {
        //Click signout button from header links
        headerPage.signout()
        //assert user was signed out
        cy.get(signUpPage.registerBtn).should('be.visible')
    })
})