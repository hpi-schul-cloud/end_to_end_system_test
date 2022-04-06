Cypress.Commands.add('goToRoomsOverview',()=>{
    cy.get('[data-testid="Course-Overview"]').click()
})

Cypress.Commands.add('goToCreateRoom',()=>{
    cy.get('[data-testid="add-course-button"]').click()
    cy.get('[data-testid="fab_button_add_course"]').click()
})

Cypress.Commands.add('selectCourse',()=>{
    //strangely the id of the course is the testid, not sure if it should stay that way
    cy.get('[data-testid="0000dcfbfb5c7a3f00bf21ab"]').click()
})

Cypress.Commands.add('goToRoomView',()=>{
    cy.get('[data-testid="room"]').click()
})

Cypress.Commands.add('goToCreateTopic',()=>{
    cy.get('[data-testid="add-content-button"]').click()
    cy.get('[data-testid="fab_button_add_lesson"]').click()
})

Cypress.Commands.add('goToCreateTask',()=>{
    cy.get('[data-testid="add-content-button"]').click()
    cy.get('[data-testid="fab_button_add_task"]').click()
})
