import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import VerifyTextPage from '../../page_objects/ui/verify-text-page'


Given('I access to verify text page', function () {
    VerifyTextPage.go()
})

When('I validate that contains {string}', function (text) {

    VerifyTextPage.textField()
    .should('contain', text)
    .should('be.visible')

})

