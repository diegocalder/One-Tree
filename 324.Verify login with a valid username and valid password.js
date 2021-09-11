
describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1440, 758)
    
       cy.visit('https://app.qase.io/login')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').click()
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('diegocalderon22@gmail.com')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputPassword').type('S1lvestre')
    
       cy.get('.col-lg-4 > .form-signin > .row > .col-lg-12 > #btnLogin').click()
    
       cy.visit('https://app.qase.io/projects')
    
       cy.get('.app-menu-container > .app-menu-block > .nav-bottom-item > .user-menu > #user-menu').click()
    
       cy.get('.light > #app > .p-0 > .app-menu > .app-menu-container').click()
    
    })
   
   })
   