Feature: Assignment for spriteCloud API Test

    Scenario: 1 Create and validate the user data
        Given I create an user
            | id         | 1              |
            | username   | fernandobaldo1 |
            | firstName  | fernando       |
            | lastName   | baldo          |
            | email      | test@test.com  |
            | password   | 123            |
            | phone      | 938632000      |
            | userStatus | 2              |
        When I get user by username
            | usernamePath | true |
        Then The user should contain
            # if the second row value is 'true' it means that the value must be the same as in the 'I create an user' fields step
            # if not, must match the value filled in on the second row
            | statusCode | 200  |
            | id         | true |
            | username   | true |
            | firstName  | true |
            | lastName   | true |
            | email      | true |
            | password   | true |
            | phone      | true |
            | userStatus | true |

    Scenario: 2 Create user login the system and update the user data
        Given I create an user
            | id         | 1              |
            | username   | fernandobaldo2 |
            | firstName  | fernando       |
            | lastName   | baldo          |
            | email      | test@test.com  |
            | password   | 123            |
            | phone      | 938632000      |
            | userStatus | 2              |
        When I get user by username
            | usernamePath | true |
        Then The user should contain
            # if the second row value is 'true' it means that the value must be the same as in the 'I create an user' fields step
            # if not, must match the value filled in on the second row
            | statusCode | 200  |
            | id         | true |
            | username   | true |
            | firstName  | true |
            | lastName   | true |
            | email      | true |
            | password   | true |
            | phone      | true |
            | userStatus | true |
        Then I login into the system
            | usernamePath | true |
            | passwordPath | true |
        # You can update a single or multiple fields
        And I update some info
            | firstName | Fernando       |
            | lastName  | Baldo          |
            | email     | Baldo@test.com |
        And I get user by username
            | usernamePath | true |
        # After updating the fields you should declare which are the new values and which are the same values(following the 'true' logical)
        And The user should contain
            | statusCode | 200            |
            | id         | true           |
            | username   | true           |
            | firstName  | Fernando       |
            | lastName   | Baldo          |
            | email      | Baldo@test.com |
            | password   | true           |
            | phone      | true           |
            | userStatus | true           |

    Scenario: 3 Create a user and try to GET an invalid user
        Given I create an user
            | id         | 1              |
            | username   | fernandobaldo3 |
            | firstName  | fernando       |
            | lastName   | baldo          |
            | email      | test@test.com  |
            | password   | 123            |
            | phone      | 938632000      |
            | userStatus | 2              |
        # if I set the usernamePath !== to 'true' should return not found(404)
        When I get user by username
            | usernamePath | false |
        Then The user should contain
            | statusCode | 404 |
