Feature: Login to the NBC Schulcloud as a Main Teacher

    As a main teacher I want to login to the schulcloud application so that I can create an online course

    Scenario: login as Teacher
        Given I am on the login page
        When I enter email and password
        And I click on login button
        Then I see the home page


    