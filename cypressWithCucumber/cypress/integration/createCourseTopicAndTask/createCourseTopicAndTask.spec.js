// Adding a new topic

Given('I am logged in as a teacher', () => {
    cy.teacherLogin()
})

When('I visit the rooms overview', () => {
    cy.goToRoomsOverview()
})

When('I visit the room board', () => {
    cy.selectRoom()
    cy.goToRoomBoard()
})

When('I add a topic', () => {
    cy.clickOnCreateTopic()
})

Then('I am able to create a topic in the old topic creation page', () => {
    cy.expectOldTopicCreationPageAndCreateNewTopic()
})

// Adding a new task

When('I visit the rooms overview',()=>{
    cy.goToRoomsOverview()
})

When('I visit the room board', () => {
    cy.selectRoom()
    cy.goToRoomBoard()
})

When('I add a task', () => {
    cy.clickOnCreateTask()
})

Then('I am able to create a task in the old task creation page', () => {
    cy.expectOldTaskCreationPageAndCreateNewTask()
})

// Student can not create and import topics or tasks

Given('I am logged in as a student', () => {
    cy.studentLogin()
})

Then('I should not be able to create or import topics or tasks', () => {
    cy.expectNoCreateFABButton()
})