const assert = require('assert');

describe('SauceDemo Test',  () => {
  it('should open saucedemo.com and assert the URL', async () => {
    // Buka URL
    await browser.url('https://www.saucedemo.com');

    // Lakukan assertion pada URL
    const currentURL = await browser.getUrl();
    const expectedURL = 'https://www.saucedemo.com/';

    await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
  });
});