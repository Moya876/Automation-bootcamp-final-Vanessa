class SignUp {

    //#region Selectors
    get registerBtn() { return ('#signInOrRegister') }

    //get enrollBtn() { return (`.auth0-lock-tabs-current.auth0-lock-tabs-current`) }
    get enrollBtn() { return ('[role="navigation"] li:nth-child(2)') }
    get emailField() { return (`//input[@id='1-email']`) }
    get passwordField() { return (`//input[@id='1-password']`) }

    get signupBtn() { return (`button[name='submit']`) }

    //#endregion

    //#region Methods

    register(email, password) {
        cy.get(this.enrollBtn).click()
        cy.get(this.emailField).type(email)
        cy.get(this.passwordField).type(password)
        cy.get(this.signupBtn).click()
    }

    //#endregion
}
export default new SignUp()