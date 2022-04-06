// Adding a new course

Given('I am logged in as a teacher', () => {
    cy.teacherLogin()
})

When('I visit the rooms overview', () => {
    cy.goToRoomsOverview()
})

Then('I am able to create a course in the old course creation page', () => {
    cy.goToCreateRoom()
    cy.expectOldCourseCreationPageAndCreateNewCourse()
})

// Going to the room view

When('I visit the room view', () => {
    cy.selectCourse()
    cy.goToRoomView()
})

// Adding a new topic

When('I add a topic', () => {
    cy.goToCreateTopic()
})

Then('I am able to create a topic in the old topic creation page', () => {
    cy.expectOldTopicCreationPageAndCreateNewTopic()
})

// Adding a new task

When('I add a task', () => {
    cy.goToCreateTask()
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