describe('Login Page Test', () => {
    beforeEach(function () {
      // Load both fixture data before proceeding to tests
      cy.fixture('locators').then((locatorsData) => {
        this.locators = locatorsData;
      });
  
      cy.fixture('userData').then((userData) => {
        this.userData = userData;
      });
  
      // Prevent Cypress from failing the test on DataTables error
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('DataTable is not a function')) {
          return false;
        }
        return true;
      });

      
    
      // Visit the login page
      cy.visit('https://eval.asaltech.com/');
    });
  
    it('verify the title form', function () {
      // Verify the title form
      cy.get(this.locators.login.title).invoke('text').then((text) => {
        let textNoSpace = text.trim();
        expect(textNoSpace).to.equal('Sign in to Employee Evaluation');
      });
    });
  
    it('Test invalid user name, invalid password', function () {
      cy.get(this.locators.login.username).type(this.userData.invalidUsername);
      cy.get(this.locators.login.password).type(this.userData.invalidPassword);
      cy.get('.btn').click();

     /* .then((text)=>{
        cy.get(this.locators.login.errorMessage).should('contain', 'try Error! Your login attempt was not successful, try again!!') 
      } )
*/
});

});