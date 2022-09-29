class SampleAppPage {
    go() {
        return cy.visit('http://www.uitestingplayground.com/sampleapp')
    }

    userName() {
        return cy.get('input[placeholder="User Name"]')
    }

    password() {
        return cy.get('input[placeholder="********"]')
    }

    loginBtn() {
        return cy.get('#login')
    }

    loginMsg() {
        return cy.get('#loginstatus')
    }

}

export default new (SampleAppPage)