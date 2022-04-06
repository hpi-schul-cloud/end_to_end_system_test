Cypress.Commands.add('expectOldCourseCreationPageAndCreateNewCourse',()=>{
    cy.contains('Kurs anlegen')
})

Cypress.Commands.add('expectOldTopicCreationPageAndCreateNewTopic',()=>{
    cy.contains('Neues Thema')
})

Cypress.Commands.add('expectOldTaskCreationPageAndCreateNewTask',()=>{
    cy.contains('Neue Aufgabe')
})

Cypress.Commands.add('expectNoCreateFABButton',()=>{
    cy.get('[data-testid="add-content-button"]').should('not.exist');
})
