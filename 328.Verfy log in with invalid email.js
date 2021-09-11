describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1440, 701)
    
       cy.visit('https://app.qase.io/login')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').click()
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('diegocalderon22@gmaail.com')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputPassword').type('S1lvestre')
    
       cy.get('body > #auth > .row').click()
    
       cy.get('.col-lg-4 > .form-signin > .row > .col-lg-12 > #btnLogin').click()
    
       cy.visit('https://app.qase.io/login')
    
    })
   
   })