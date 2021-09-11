describe('test_name', function() {

   it('what_it_does', function() {
  
      cy.viewport(1440, 701)
   
      cy.visit('https://app.qase.io/login')
   
      cy.get('.form-signin > .row > .text-start > .forgot:nth-child(1) > small').click()
   
      cy.visit('https://app.qase.io/password/reset')
   
      cy.get('body > #auth > .row').click()
   
      cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('pruebas.onetree+luis@gmail.com')
   
      cy.get('.col-lg-4 > .form-signin > .row > .col-lg-12 > .btn').click()
   
      cy.visit('https://app.qase.io/password/reset')
   
   })
  
  })