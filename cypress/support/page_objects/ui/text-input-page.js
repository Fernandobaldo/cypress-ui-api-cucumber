class TextInputPage {
    go() {
        return cy.visit('http://www.uitestingplayground.com/textinput')
    }

    inputText() {
        return cy.get('#newButtonName')
    }

    updatingBtn() {
        return cy.get('#updatingButton')
    }
}

export default new (TextInputPage)