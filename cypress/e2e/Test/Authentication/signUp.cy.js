/// <reference types="cypress"/>
import signUp from '../../page/signUp.page'


describe('Authentication', () => {
  it('Should create a new user', () => {
    cy.visit('/')
    cy.get("#signInOrRegister").click();
    //Sign up as a new user.
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: { signUp } },
      ({ }) => {
        let randString = (Math.random() + 1).toString(36).substring(7)
        const email = `${randString}@gmail.com`
        cy.get('[role="navigation"] li.auth0-lock-tabs-current').click()
        cy.get('[role="navigation"] li:nth-child(2)').click()
        //Enter valid email & password
        cy.get('[type="email"]').type(email);
        cy.get('[type="password"]').type("Password1", { log: false });
        //Submit for account creation
        cy.get("[name=submit]").click();
        cy.wait(5000)
        //Assert that user account was created and user is taken to the products page 
      });
      cy.get('#top-home').should('be.visible')
  })

  it('Should not create an account with an email that already signed up', () => {
    cy.visit('/')
    cy.get("#signInOrRegister").click();
    //Attempt the signup procress
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: { signUp } },
      ({ }) => {
        cy.get('[role="navigation"] li.auth0-lock-tabs-current').click()
        cy.get('[role="navigation"] li:nth-child(2)').click()
        //Enter email that was already registered
        cy.get('[type="email"]').type("vanessa.russell@coolcash.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        //Submit info that was entered
        cy.get("[name=submit]").click();
        cy.wait(5000)
        //Assert error and User account wasn't created
        cy.get('.animated.fadeInUp').should('be.visible')
      });
  })

  it('Should not create an account with an invalid email', () => {
    cy.visit('/')
    cy.get("#signInOrRegister").click();
    //Attempt the sign up procress
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: { signUp } },
      ({ }) => {
        cy.get('[role="navigation"] li.auth0-lock-tabs-current').click()
        cy.get('[role="navigation"] li:nth-child(2)').click()
        //Enter ivalid email & a valid password
        cy.get('[type="email"]').type("test.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        //Submit the info
        cy.get("[name=submit]").click();
        //assert error for invalid credentials
        cy.get('.auth0-lock-error-invalid-hint').should('be.visible')
      });
  })
})