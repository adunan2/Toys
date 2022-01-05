describe('Search elements',()=>
    {
        beforeEach(()=>{
            cy.visit('/')
        })
    it ('Login',()=>{
        cy.fixture('index').then((index)=>{
            cy.get('#username').type('akore');
            cy.get('#password').type('1');
            cy.get('#login').click();
            cy.get('.dropdown-toggle > .d-flex > .pr-3').click();
            cy.get('.dropdown-search-field').type('QA-CPD');
            cy.get('[data-name="QA-CPD"] > .pr-3').click();
            cy.get(':nth-child(1) > [href="/client/3428/inventory/"]').click();
            cy.get('#searchDevicesInput').type('27727227').enter;
        })
    })

    
})
        

