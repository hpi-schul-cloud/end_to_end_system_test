Feature: Login to the NBC Schulcloud

    As a user I want to login to the schulcloud application of lower saxony So that I can create an online course

    Scenario: login as Admin
        Given I am on the login page of NBC
        When I enter adminEmail and password
        And I click on login button
        Then I see the dashboard

    Scenario: login as Teacher
        Given I am on the login page of NBC
        When I enter teacherEmail and password
        And I click on login button
        Then I see the dashboard

    Scenario: login as Student
        Given I am on the login page of NBC
        When I enter studentEmail and password
        And I click on login button
        Then I see the dashboard
