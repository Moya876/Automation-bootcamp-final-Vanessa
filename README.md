# Automation-Project Vanessa Russell

This Automation suite is for the site `https://ui-automation-camp.vercel.app` done at QualityWorks UI Automation Bootcamp

The automation was done with the cypress automation tool

## Dependencies
1. NodeJS v12, v14 or above
2. NPM v6 or above
3. Chrome browser

## Getting Started
Clone the repository & install dependencies
```
$ git clone 
$ cd Automation-bootcamp-final-Vanessa
$ npm install
```

## Folder Structure
- cypress/e2e/data: Data files which includes data that is entered in various tests.
- cypress/e2e/page: Page object files which include element selectors and functions that are used in tests.
- cypress/e2e/test: Test files which include the actual tests.

## Test Execution
Execute the Cypress GUI


``npx cypress open 
``

Execute the Cypress via commandline

``npx cypress run 
``

To executes all tests in the Chrome browser and generates a Mochawesome report.

``npm test
``

## Execute a specific test file
Without Report 

``
npx cypress run --spec cypress/e2e/Test/Cart/cart.cy.js 
``

OR

With Report

``
npm run test:spec cypress/e2e/Test/Data\ Driven/dataDrivenTest.cy.js 
``

## Test Scenarios

Test scenarios were used to automate sections of the website they were grouped in folders that are located in the test folder namely:
- Add to cart
- Authentication
- Cart
- Checkout
- Contact
- DataDriven
- Filter & Sort
- Header links
- Product Details
- Product Gallery
- Search

