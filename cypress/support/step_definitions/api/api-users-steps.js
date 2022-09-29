import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const { createUser, getUsers, loginIntoTheSystem, updateUserInfo } = require('../../page_objects/api/users-page');
const { CreateUserBean } = require('../../dto/CreateUpdateUserBean');

Given('I create an user', function async(table) {
    const data = table.rowsHash();
    const { id, username, firstName, lastName, email, password, phone, userStatus } = data

    const newUser = new CreateUserBean()

        .setId(id || this.id)
        .setUsername(username || this.username)
        .setFirstName(firstName || this.firstName)
        .setLastName(lastName || this.lastName)
        .setEmail(email || this.email)
        .setPassword(password || this.password)
        .setPhone(phone || this.phone)
        .setUserStatus(userStatus || this.userStatus)

    const newUsers = [newUser];

    createUser.call(this, newUsers);
    
    cy.wrap(username).as('usernamePath');
    cy.wrap(password).as('passwordPath');
    cy.wrap(data).as('dataaPath');
    cy.get('@response').then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('ok')
    })
});

When('I get user by username', function async(table) {
    const data = table.rowsHash();
    const { usernamePath } = data
    const queryParam = [];

    if (usernamePath) {
        if (usernamePath !== 'true') {
            queryParam.push(`user/${usernamePath}`);
        } else {
            queryParam.push(`user/${this.usernamePath}`);
        }
    }

    getUsers.call(this, queryParam);
    
});

Then('The user should contain', function async(table) {
    cy.get('@response').then((response) => {
        cy.log(response)
        const data = table.rowsHash();
        const { statusCode, id, username, firstName, lastName, email, password, phone, userStatus } = data
        const found = response.body;
        if (statusCode === 200) {
            expect(response.status).to.be.oneOf([200, 404]);
        } else {
            expect(response.status).to.eq(parseInt(statusCode, 10));
            if (id) {
                if (id !== 'true') {
                    expect(found.id).to.be.equal(parseInt(id))
                } else {
                    expect(found.id).to.be.equal(parseInt(this.dataaPath.id))
                }
            }
            if (username) {
                if (username !== 'true') {
                    expect(found.username).to.be.equal(username)
                } else {
                    expect(found.username).to.be.equal(this.dataaPath.username)
                }
            }
            if (firstName) {
                if (firstName !== 'true') {
                    expect(found.firstName).to.be.equal(firstName)
                } else {
                    expect(found.firstName).to.be.equal(this.dataaPath.firstName)
                }
            }
            if (lastName) {
                if (lastName !== 'true') {
                    expect(found.lastName).to.be.equal(lastName)
                } else {
                    expect(found.lastName).to.be.equal(this.dataaPath.lastName)
                }
            }
            if (email) {
                if (email !== 'true') {
                    expect(found.email).to.be.equal(email)
                } else {
                    expect(found.email).to.be.equal(this.dataaPath.email)
                }
            }
            if (password) {
                if (password !== 'true') {
                    expect(found.password).to.be.equal(password)
                } else {
                    expect(found.password).to.be.equal(this.dataaPath.password)
                }
            }
            if (phone) {
                if (phone !== 'true') {
                    expect(found.phone).to.be.equal(phone)
                } else {
                    expect(found.phone).to.be.equal(this.dataaPath.phone)
                }
            }
            if (userStatus) {
                if (userStatus !== 'true') {
                    expect(found.userStatus).to.be.equal(userStatus)
                } else {
                    expect(found.userStatus).to.be.equal(parseInt(this.dataaPath.userStatus))
                }
            }
        }
    });
})

When('I login into the system', function async(table) {
    const data = table.rowsHash();
    const { usernamePath, passwordPath } = data
    const queryParam = [];

    if (usernamePath) {
        if (usernamePath !== 'true') {
            queryParam.push(`user/login/${usernamePath}`);
        } else {
            queryParam.push(`user/login/?${this.usernamePath}`);
        }
    }
    if (passwordPath) {
        if (passwordPath !== 'true') {
            queryParam.push(`${passwordPath}`);
        } else {
            queryParam.push(`${this.passwordPath}`);
        }
    }

    loginIntoTheSystem.call(this, queryParam);
});

Then('I update some info', function async(table) {
    const data = table.rowsHash();
    const { id, username, firstName, lastName, email, password, phone, userStatus } = data
    const queryParam = [];

    const newUser = new CreateUserBean()

        .setId(id || this.dataaPath.id)
        .setUsername(username || this.dataaPath.username)
        .setFirstName(firstName || this.dataaPath.firstName)
        .setLastName(lastName || this.dataaPath.lastName)
        .setEmail(email || this.dataaPath.email)
        .setPassword(password || this.dataaPath.password)
        .setPhone(phone || this.dataaPath.phone)
        .setUserStatus(userStatus || this.dataaPath.userStatus)

    queryParam.push(`${this.dataaPath.username}`);

    updateUserInfo.call(this, newUser, queryParam);

});