Cypress.Commands.add('teacherlogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})

Cypress.Commands.add('studentlogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('schueler@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})

Cypress.Commands.add('adminlogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('admin@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})