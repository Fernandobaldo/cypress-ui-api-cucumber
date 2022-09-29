import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import sampleAppPage from '../../page_objects/ui/sample-app-page'


Given('I access to sample app page', function () {
    sampleAppPage.go()
})

When('I fill the user access', function (table) {
    const { userName, password } = table.rowsHash();
    sampleAppPage.userName().type(userName)
        .should('be.visible')

    sampleAppPage.password().type(password)
        .should('be.visible')
    cy.wrap(userName).as("username")

})

Then('I click to login', function () {
    sampleAppPage.loginBtn().click({ force: true })
        .should('be.visible')
    sampleAppPage.loginMsg().contains("Welcome, " + this.username + "!")
        .should('be.visible')

})

Then('I click to logout', function () {
    sampleAppPage.loginBtn().click({ force: true })
        .should('be.visible')
    sampleAppPage.loginMsg().contains("User logged out.")
        .should('be.visible')
})

