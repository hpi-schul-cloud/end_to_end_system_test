describe('Login to the NBC Schulcloud as a Main Teacher',() =>{
    
    context('when I login to the nbc schulcloud',()=>{
        it('shows me the home page',()=>{
            cy.teacherVisitTheLoginPage()
            cy.teacherEntersUserCredentials()
            cy.teacherClicksOnLoginButton()
            cy.expectHomePageVisible()


        })
    })

})
