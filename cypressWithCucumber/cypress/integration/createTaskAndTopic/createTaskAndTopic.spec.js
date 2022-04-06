// Adding a new task

Given('I am logged in as a teacher', () => {
    cy.teacherLogin()
})

When('I visit the room board', () => {
    cy.goToCourseOverview()
    cy.selectCourse()
    cy.goToRoomOverviewBoard()
})

Then('I am able to create a task in the old task creation page', () => {
    cy.expectOldTaskCreationPageAndCreateNewTask()
})

// Adding a new topic

Given('I am logged in as a teacher', () => {
    cy.teacherLogin()
})

When('I visit the room board', () => {
    cy.goToCourseOverview()
    cy.selectCourse()
    cy.goToRoomOverviewBoard()
})

Then('I am able to create a task in the old task creation page', () => {
    cy.expectOldTopicCreationPageAndCreateNewTopic()
})

// Student can not create and import task and topic

Given('I am logged in as a student', () => {
    cy.studentLogin()
})

When('I visit the room board', () => {
    cy.goToCourseOverview()
    cy.selectCourse()
    cy.goToRoomOverviewBoard()
})

Then('I should not be able to create or import tasks or topics', () => {
    cy.expectNoCreateFABButton()
})