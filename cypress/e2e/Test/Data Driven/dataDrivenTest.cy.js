/// <reference types="cypress"/>
import contactPage from "../../page/contact.page";
import contactData from "../../data/contact.data";
import loginData from "../../data/login.data";
import Auth from '../../page/Auth.page'

describe('Data driven Contact Us', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products");
    })
    const x = 0
    contactData.forEach((testData) => {
        it(testData.title, () => {
            //Should open website and navigate to contact page
            //Enter contact info on contact form and submit
            contactPage.contactInfo(testData.firstname,
                testData.lastname,
                testData.email,
                testData.subject,
                testData.message)
            //Assert that a popUp message appears after the form is sent
            if (testData.submitted) {
                //verify modal is present
                cy.get(contactPage.popUpMsg).should('be.visible')
            } else {
                //verify modal is not present
                cy.get(contactPage.popUpMsg).should('not.exist')
            }
            

        })
    })

})

// describe('Data driven Auth', () => {
//     beforeEach(() => {
//         cy.visit("https://ui-automation-camp.vercel.app/");
//     })

//     const i = 0
//     it.skip('Should Login with  valid users', () => {
//         cy.get("#signInOrRegister").click();
//         cy.origin(
//             "https://dev-mlluudmotpwoldtv.us.auth0.com",
//             { args: {} },
//             ({ }) => {
//                 Auth.Login(loginData[i].email, loginData[i].password)
//             })
//     });
//})