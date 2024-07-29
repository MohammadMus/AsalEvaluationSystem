
//import LoginPage from '../../pageObject/loginPage';
/*describe('Login Page', () => {
  //const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('http://172.22.1.141:8089/');

    cy.fixture('locators').then((data) => {
      this.data = data;
    })
  
  });

 /* it('verify the number of header images', () => 
    {
      cy.get(this.data.login.asalLogo).should('have.length', 1);
       // loginPage.getHeaderImages().should('have.length',3);
    });*/
    
   /* it('verify the title form', () =>{
        //loginPage.getTitle().invoke('text').then((text) => {
            //let textNoSpace = text.trim() ;
            //expect(textNoSpace).to.equal('Sign in to Employee Evaluation');
            cy.get(this.data.).
       // });
    })
/*
  it('should display an error message with invalid user name , invalid password', () => {
    cy.fixture('user').
    then((user) => {
      loginPage.login(user.invalidUsername, user.invalidPassword);
    });
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Error');
  });

  it('should display an error message with invalid user name , valid password', () => {
    cy.fixture('user').
    then((user) => {
      loginPage.login(user.invalidUsername, user.validPassword);
    });
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Error');
  });

  it('should display an error message with valid user name , invalid password', () => {
    cy.fixture('user').
    then((user) => {
      loginPage.login(user.validUsername, user.invalidPassword);
    });
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Error');
  });


  it('should login successfully with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUsername, user.validPassword);
    });
    cy.url().should('include', '/Employee'); // Adjust the URL as per your application
  });

  */
//});