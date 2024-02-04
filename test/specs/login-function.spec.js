// Function to perform login
const login = async (username, password) => {
  await browser.url('https://www.saucedemo.com/');

  // Input username and password
  await $('#user-name').setValue(username);
  await $('#password').setValue(password);

  // Click login button
  await $('#login-button').click();
};

// Test suite for Saucedemo Login
describe('Saucedemo Login Tests', () => {
  it('should login successfully with valid credentials', async () => {
    // Using login function
    await login('standard_user', 'secret_sauce');

    // Assertion on the URL or any other element to verify successful login
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
  });

  it('should show error for invalid username', async () => {
    // Using login function
    await login('invalid_user', 'secret_sauce');

    // Assertion on the error message
    const errorMessage = await $('//*[@data-test="error"]');
    await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
  });

  it('should show error for invalid password', async () => {
    // Using login function
    await login('standard_user', 'invalid_password');

    // Assertion on the error message
    const errorMessage = await $('//*[@data-test="error"]');
    await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
  });
});
