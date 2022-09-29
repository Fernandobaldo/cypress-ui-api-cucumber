import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import InputTextPage from '../../page_objects/ui/text-input-page'


Given('I access to text input page', function () {
    InputTextPage.go()
})

When('I input a text', function (table) {
    const { text } = table.rowsHash();
    InputTextPage.inputText().type(text)
        .should('be.visible')
})

Then('I click to updating the button', function () {
    InputTextPage.updatingBtn().click()
        .should('be.visible')
})
 
