//  DTO pattern is not a common practice in automated tests projects or even on JavaScript, but it can be a good practice when we are structuring a project that can be increase soon.
// The idea of DTO pattern is to have a `Bean objects` that uses JavaScript ES6 classes that have the `request body` contract of a microservice/resource, that can set default values or set fields content when instanced on `step definition`.

class CreateUserBean {
    constructor(
        id,
        username,
        firstName,
        lastName ,
        email,
        password,
        phone,
        userStatus
    ){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.userStatus = userStatus;
    }

    setId(id) {
        if (id) this.id = id;
        return this;
    }

    setUsername(username) {
        if (username) this.username = username;
        return this;
    }

    setFirstName(firstName) {
        if (firstName) this.firstName = firstName;
        return this;
    }

    setLastName(lastName) {
        if (lastName) this.lastName = lastName;
        return this;
    }

    setEmail(email) {
        if (email) this.email = email;
        return this;
    }

    setPassword(password) {
        if (password) this.password = password;
        return this;
    }

    setPhone(phone) {
        if (phone) this.phone = phone;
        return this;
    }

    setUserStatus(userStatus) {
        if (userStatus) this.userStatus = userStatus;
        return this;
    }
}

module.exports = { CreateUserBean }
