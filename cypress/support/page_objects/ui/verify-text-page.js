class VerifyTextPage {
    go() {
        return cy.visit('http://www.uitestingplayground.com/verifytext')
    }

    textField() {
        return cy.get('.bg-primary')
    }
}

export default new (VerifyTextPage)