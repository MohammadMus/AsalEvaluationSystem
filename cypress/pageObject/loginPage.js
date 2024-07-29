// Add all the locators and methods for the login page


class LoginPage {
    visit() {
      cy.visit('http://172.22.1.141:8089/'); 
    }
  
    getUsernameField() {
      return cy.get(cy.fixture(locators).then((data)=>{
        this.login.getUsernameField
      }));
    }
  
    getPasswordField() {
      return cy.get('input[name="password"]');
    }
  
    getLoginButton() {
      return cy.get('button[type="submit"]');
    }

    getHeaderImages(){
        //return cy.get('header img');
        return cy.fixture(locators).then((data)=>{
          this.login.
        })
    }
  
    getTitle(){
        return cy.get('.text-xl');
    }

    enterUsername(username) {
      this.getUsernameField().type(username);
    }
  
    enterPassword(password) {
      this.getPasswordField().type(password);
    }
  
    clickLogin() {
      this.getLoginButton().click();
    }
  
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }
  
    getErrorMessage() {
        return cy.get('.font-medium'); 
      }
  }
  
  export default LoginPage;