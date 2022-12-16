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


 
});





