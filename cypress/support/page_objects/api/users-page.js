const baseUrl = 'https://petstore.swagger.io/v2'

// Page objects is a common practice and widely used by automated testing projects.
// The concept itself is came from front-end testing, but the pattern can be applied to backend testing.
function createUser(object) {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: `${baseUrl}/user/createWithArray`,
        headers: {

            'Content-Type': 'application/json',
        },
        body: object
    }).as('response')
}

function getUsers(queryParam = []) {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: `${baseUrl}/${queryParam.join('&')}`,
        headers: {
            'Content-Type': 'application/json',
        }
    }).as('response')
}

function loginIntoTheSystem(queryParam = []) {
    cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: `${baseUrl}/${queryParam.join('&')}`, 
        headers: {
            'Content-Type': 'application/json',
        }
    }).as('response')
}

function updateUserInfo(object, queryParam = []) {
    cy.request({
        method: 'PUT',
        failOnStatusCode: false,
        url: `${baseUrl}/user/${queryParam.join('&')}`,
        headers: {

            'Content-Type': 'application/json',
        },
        body: object
    }).as('response')
}


module.exports = { createUser, getUsers, loginIntoTheSystem, updateUserInfo }

