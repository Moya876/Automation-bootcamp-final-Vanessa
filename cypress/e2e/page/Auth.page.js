class Authentication {

    //#region Selectors
    get registerBtn() { return ('#signInOrRegister') }

    //get emailField() { return ('div.auth0-lock-input-block.auth0-lock-input-email') }
    get emailField() { return ("input[placeholder='yours@example.com']") }

    get passwordField() { return ('div.auth0-lock-input-block.auth0-lock-input-show-password') }

    //get loginBtn() { return (`.auth0-label-submit`) }
    get loginBtn() { return ('button[id="1-submit"]') }
    get logOutBtn() { return ('#top-sign-out') }

    //#endregion

    //#region Methods

    Login(email, password) {
        //cy.get(this.emailField).should('be visible')
        cy.get(this.emailField).type('vanessarussell1989@gmail.com')
        cy.get(this.passwordField).type('Password@123')
        cy.get(this.loginBtn).click()
        //cy.get('https://ui-automation-camp.vercel.app/')
    }
    Logout() {
        //cy.get(this.emailField).should('be visible')
        cy.get(this.emailField).type('vanessarussell1989@gmail.com')
        cy.get(this.passwordField).type('Password@123')
        cy.get(this.loginBtn).click()
        cy.get(this.logOutBtn).should('be.visible')
        cy.get(this.logOutBtn).click()
    }
    //#endregion
}
export default new Authentication()