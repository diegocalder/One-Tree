describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1440, 701)
    
       cy.visit('https://app.qase.io/login')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('pruebas.onetree+luis@gmail.com')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputPassword').click()
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputPassword').type('Test2021')
    
       cy.get('.col-lg-4 > .form-signin > .checkbox > .custom-control > .custom-control-indicator').click()
    
       cy.get('.col-lg-4 > .form-signin > .checkbox > .custom-control > .custom-control-input').check('on')
    
       cy.get('.col-lg-4 > .form-signin > .row > .col-lg-12 > #btnLogin').click()
    
       cy.visit('https://app.qase.io/projects')
    
       cy.get('.app-menu-container > .app-menu-block > .nav-bottom-item > .user-menu > #user-menu').click()
    
       cy.get('.user-menu > .user-menu-block > .user-menu-section:nth-child(3) > .user-menu-item > a').click()
    
       cy.visit('https://app.qase.io/login')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('pruebas.')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputEmail').type('pruebas.onetree+luis@gmail.com')
    
       cy.get('.row > .col-lg-4 > .form-signin > .form-group > #inputPassword').type('Test2021')
    
       cy.get('.col-lg-4 > .form-signin > .row > .col-lg-12 > #btnLogin').click()
    
       cy.visit('https://app.qase.io/projects')
    
    })
   
   })
   