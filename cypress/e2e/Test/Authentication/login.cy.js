/// <reference types="cypress"/>
import loginData from '../../data/login.data'

import signUp from '../../page/signUp.page'


describe('Authentication scenarios for login feature', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Should Login with a valid user", () => {
    cy.get(signUp.registerBtn).click();
    //Login on to site.
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('[type="email"]').type("test1@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
      }
    );
  });

  it("Should not login with invalid email and correct password", () => {
    //Should click sign in or register button
    cy.get("#signInOrRegister").click();
    //Attempt to login 
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('[type="email"]').type("test.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
        //Assert error for invalid email
        cy.get('.auth0-lock-error-invalid-hint').should('be.visible')
      });
  });

  it("Should be able to click forget password and submit reset request", () => {
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
    //Attempt to login on to site.
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('[type="email"]').type("test1@tester.com");
        cy.get('[type="password"]').type("Password", { log: false });
        cy.get("[name=submit]").click();
        //Assert that user wasn't logged in
        cy.get('.animated.fadeInUp').should('be.visible')
        //Click forget password feature
        cy.get(".auth0-lock-alternative-link").click();
        //send reset password to valid email
        cy.get(".auth0-label-submit").click();
        ///Assert that reset password email was sent
        cy.get('.animated.fadeInUp').should('be.visible')


      });
  });



});





