class Header {

    //#region Selectors
    get headerLogo() { return ('.chakra-image.css-0') }
    get homeBtn() { return ('#top-home') }
    get aboutBtn() { return ('#top-about') }

    get contactOpt() { return ('#top-contact') }
    get signOutBtn() { return ('#top-sign-out') }

    get cartOpt() { return ('#top-cart') }
    get cartContent() {return ('.snipcart-cart__content')}
    
    //#endregion

    //#region Methods
    logo() {
        cy.get(this.headerLogo).should('be.visible')
        cy.get(this.headerLogo).click()
    }

    home() {
        cy.get(this.homeBtn).should('be.visible')
        cy.get(this.homeBtn).click()
    }

    about() {
        cy.get(this.aboutBtn).should('be.visible')
        cy.get(this.aboutBtn).click()
    }

    contact() {
        cy.get(this.contactOpt).should('be.visible')
        cy.get(this.contactOpt).click()
    }

    signout() {
        cy.get(this.signOutBtn).should('be.visible')
        cy.get(this.signOutBtn).click()
    }

    cart() {
        cy.get(this.cartOpt).should('be.visible')
        cy.get(this.cartOpt).click({force: true})
    }
    //#endregion
}
export default new Header()