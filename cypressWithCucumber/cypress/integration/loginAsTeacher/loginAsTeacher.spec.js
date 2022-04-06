Given('I am on the login page', () => {
    const url = 'https://nbc-main.cd.dbildungscloud.dev'
    cy.visit(url)
})

When('I enter my email and password', () => {
    cy.get('[data-testid="username"]').eq(1).type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
})

And('I click on login button', () => {
    cy.get('[data-testid="submit-login"]').eq(1).click()
})

Then('I see the home page', () => {
    cy.contains('Hallo Cord Carl!')
})
