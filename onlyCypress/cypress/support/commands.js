// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('teacherVisitTheLoginPage', () => {
    const url = 'https://nbc-main.cd.dbildungscloud.dev'
    cy.visit(url)
})


Cypress.Commands.add('teacherEntersUserCredentials', () => {
    cy.get('[data-testid="username"]').eq(1).type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')


})

Cypress.Commands.add('teacherClicksOnLoginButton', () => {
    cy.get('[data-testid="submit-login"]').eq(1).click()


})

Cypress.Commands.add('expectHomePageVisible', () => {
    
    cy.contains('Hallo Cord Carl!')
})
