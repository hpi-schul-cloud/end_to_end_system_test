Feature: Add task or topic to the room board by the teacher

    As a teacher, I want to add tasks and topic directly on the board so that I don't have to jump back and forth between pages.

    Scenario: Adding a new task
        Given I am logged in as a teacher
        When I visit the room board
        Then I am able to create a task in the old task creation page   //to be maintained until when migrating to the nuxt


    Scenario: Adding a new topic
        Given I am logged in as a teacher
        When I visit the room board
        Then I am able to create a topic in the old topic creation page //to be maintained until when migrating to the nuxt


    Scenario: Student can not create and import task and topic
        Given I am logged in as a student
        When I visit the room board
        Then I should not be able to create or import tasks or topics
