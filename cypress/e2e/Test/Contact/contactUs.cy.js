/// <reference types="cypress"/>
import contactPage from "../../page/contact.page";
import contactUsData from "../../data/contactUs.data";

describe('These tests covers the Contact Page scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products");
    })
    
    it('shoud fill out contact us form and submit', () => {
        const x = 0
        //Should open website and navigate to contact page
        //Enter contact info on contact form and submit
        contactPage.sendContactMsg(contactUsData[x].firstname, contactUsData[x].lastname, contactUsData[x].email, contactUsData[x].subject, contactUsData[x].message)
        //Assert that a popUp message appears after the form is sent
        cy.get(contactPage.popUpMsg).should('be.visible')
    })

    it('shoud click email option', () => {
        //Should open website and navigate to contact page
        //Should click the email option on contact page
        contactPage.emailUs()
    })

    it('shoud click linkedin option', () => {
        //Should open website and navigate to contact page
        //Should click the linkedIn option on contact page
        contactPage.linkedinOpt()
    })

    it('shoud click twitter option', () => {
        //Should open website and navigate to contact page 
        //Should click the twitter option on contact page
        contactPage.TwitterOpt()
    })
    const y = 0
    it('shoud fill out contact us with invalid email and get an error when trying to submit', () => {
        //Should open website and navigate to contact page
        //Enter contact info on contact form and submit
        contactPage.errorContact(contactUsData[y].firstname, contactUsData[y].lastname, contactUsData[y].subject, contactUsData[y].message)
        //Assert that an error appears 
        //cy.get(contactPage.emailError).should('have.text', 'Email is invalid')
    })
})
