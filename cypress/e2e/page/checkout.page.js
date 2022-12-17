class Checkout {

    //#region Selectors
    get nameField() { return ("input[name='name']") }
    get emailField() { return ("input[name='email']") }
    get addressField() { return ("input[name='address1']") }
    get suiteField() { return ("input[name='address2']") }
    get cityField() { return ("input[name='city']") }
    get countryFieldDropDwn() { return ("select[name='country']") }
    get stateField() { return ("input[name='province']") }
    get zipCodeField() { return ("input[name='postalCode']") }

    get contToPayBtn() { return ('.snipcart-base-button__label') }

    get cardNumField() { return ('#card-number') }
    get cvvField() { return ("#cvv") }
    get dateField() { return ("#expiry-date") }

    get placeOrdBtn() { return ('.snipcart-button-primary') }


    get cartIcon() { return ("#top-cart") }
    get checkoutBtn() { return (".snipcart-button-primary.snipcart-base-button.is-icon-right") }
    get billingBox() {return ('.snipcart__box.snipcart-billing-completed.snipcart__box--gray')}
    get orderInvoice() { return ('.snipcart-order__invoice-number') }

    //#endregion

    //#region Methods
    billing(name, email, address, suite, city, country, state, zipcode) {
        //cy.wait(5000)
        cy.get(this.cartIcon).click({ force: true })
        cy.wait(1000)
        cy.get(this.checkoutBtn).click()
        cy.get(this.nameField).type(name)
        cy.get(this.emailField).type(email)
        cy.get(this.addressField).type(address)
        cy.get(this.suiteField).type(suite)
        cy.get(this.cityField).type(city)
        cy.get('.snipcart-typeahead input').eq(0).type(`${country} {enter}`, { force: true })
        cy.get(this.stateField).type(state)
        cy.get(this.zipCodeField).type(zipcode)
        cy.get(this.contToPayBtn).click()
    }
    //payment info
    cardinfo() {
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cardNumField).type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find(this.dateField).type('12 25')
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cvvField).type('123')
        cy.get(this.placeOrdBtn).click()
        cy.get('.snipcart-order__invoice-number').should('be.visible')
        //#endregion
    }
}
export default new Checkout()