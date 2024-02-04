const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");

describe('Saucedemo Login Tests using POM', () => {
    beforeEach(async () => {
        Page.open('/')
      });
    
    it('should login successfully with valid credentials', async () => {
      await LoginPage.login('standard_user', 'secret_sauce');
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
  
    it('should show error for invalid username', async () => {
      await LoginPage.login('invalid_user', 'secret_sauce');
      await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
  
    it('should show error for invalid password', async () => {
      await LoginPage.login('standard_user', 'invalid_password');
      await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
  });