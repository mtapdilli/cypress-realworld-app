/// <reference types="Cypress" />


describe('skip cra UI login',()=>{
    beforeEach(()=>{
        cy.task("db:seed");
        console.log('beforeEach');
        cy.visit('http://localhost:3000')

        cy.request({method: 'POST',url: 'http://localhost:3001/login',
        body: {
            type:"LOGIN",
            username:"Katharina_Bernier",
            password:"s3cret"
        }})        

    })
    it('skip UI login',()=>{
        



        
        cy.get('span').contains('My Account').click()
        
    })
})