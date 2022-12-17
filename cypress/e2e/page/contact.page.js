class Contact {

    //#region Selectors
    get contactBtn() { return ('#top-contact') }
    get contactMsg() { return ('.chakra-heading.css-z59od')}

    get firstNameField() { return ('#firstName') }
    get lastNameField() { return ('#lastName') }
    get emailField() { return ('#email') }
    get subjectField() { return ('#subject') }
    get msgField() { return ('#message') }
    get msgBtn() { return ('button.chakra-button.css-vs0e4t') }
    //get logOutBtn() { return ('#top-sign-out') }
    get popUpMsg() { return ('#toast-1-description') }
    get emailBtn() { return (".chakra-stack:nth-child(3) a:nth-child(1)") }
    get linedinBtn() { return (".chakra-stack:nth-child(3) a:nth-child(3)") }
    get twitterBtn() { return (".chakra-stack:nth-child(3) a:nth-child(5)") }
    get emailError() {return ('#field-\:rh\:-feedback')}

    //#endregion

    //#region Methods

    contactInfo(firstname, lastname, email, subject, message) {
        cy.get(this.contactBtn).click()
        cy.get(this.firstNameField).invoke('val', firstname)
        cy.get(this.lastNameField).invoke('val', lastname)
        cy.get(this.emailField).invoke('val', email)
        cy.get(this.subjectField).invoke('val', subject)
        cy.get(this.msgField).invoke('val', message)
        cy.get(this.msgBtn).click()
    }
    emailUs() {
        cy.get(this.contactBtn).click()
        cy.get(this.emailBtn).should('be.visible')
        cy.get(this.emailBtn).click()
    }
    linkedinOpt() {
        cy.get(this.contactBtn).click()
        cy.get(this.linedinBtn).should('be.visible')
        cy.get(this.linedinBtn).click()
    }
    TwitterOpt() {
        cy.get(this.contactBtn).click()
        cy.get(this.twitterBtn).should('be.visible')
        cy.get(this.twitterBtn).click()
    }
    errorContact(firstname, lastname, subject, message) {
        cy.get(this.contactBtn).click()
        cy.get(this.firstNameField).type(firstname)
        cy.get(this.lastNameField).type(lastname)
        cy.get(this.emailField).type('vrussell.coolcorp')
        cy.get(this.subjectField).type(subject)
        cy.get(this.msgField).type(message)
        cy.get(this.msgBtn).click()
    }
}
export default new Contact()