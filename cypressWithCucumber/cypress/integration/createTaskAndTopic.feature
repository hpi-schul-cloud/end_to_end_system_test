Feature: Add task or topic to the room board by the teacher

    As a teacher, I want to add tasks and topic directly on the board so that I don't have to jump back and forth between pages.

    Scenario: Adding a new task
        Given I am logged in as a teacher
        When I visit the room board
        Then I am able to create a task

        When I create a new task
        Then the old task creation page is being used   //to be maintained late when migrating to the nuxt

    Scenario: Adding a new topic
        Given I am logged in as a teacher
        When I visit the room board
        Then I am able to create a lesson

        When I create a new lesson
        Then the old lesson creation page is being used

    Scenario: Student can not create and import task and topic
        Given I am logged in as a student
        When I visit the room board
        Then I can`t create or import tasks or lessons

