describe('Saucedemo Login Tests', () => {
    it('should login successfully with valid credentials', async () => {
      await browser.url('https://www.saucedemo.com/');
  
      // Input valid username and password
      await $('#user-name').setValue('standard_user');
      await $('#password').setValue('secret_sauce');
  
      // Click login button
      await $('#login-button').click();
  
      // Assertion on the URL or any other element to verify successful login
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('should show error for invalid username', async () => {
        await browser.url('https://www.saucedemo.com/');
    
        // Input invalid username and valid password
        await $('#user-name').setValue('invalid_user');
        await $('#password').setValue('secret_sauce');
    
        // Click login button
        await $('#login-button').click();
    
        // Assertion on the error message
        const errorMessage = await $('//*[@data-test="error"]');
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
      });

      describe('Saucedemo Login Tests', () => {
        it('should show error for invalid password', async () => {
          await browser.url('https://www.saucedemo.com/');
      
          // Input valid username and invalid password
          await $('#user-name').setValue('standard_user');
          await $('#password').setValue('invalid_password');
      
          // Click login button
          await $('#login-button').click();
      
          // Assertion on the error message
          const errorMessage = await $('//*[@data-test="error"]');
          await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        });
      });
  });