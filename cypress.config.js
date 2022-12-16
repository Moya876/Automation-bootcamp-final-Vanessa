const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://ui-automation-camp.vercel.app',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //defaultCommandTimeout: 10000
  
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true
  },
  chromeWebSecurity: false
},
env: {
  environment : "QA",
}
});