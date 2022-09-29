Feature: Assignment for spriteCloud UI Test - sample-app-scenario

    Scenario: scenario 1
        Given I access to sample app page
        When I fill the user access
            | userName | fernandogbaldo |
            | password | pwd            |
        Then I click to login
        And I click to logout


