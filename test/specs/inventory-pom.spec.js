const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page");

describe('Saucedemo Login Tests using POM', () => {
    beforeEach(async () => {
        Page.open('/')
      });

    it('should check product availability in inventory', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        const productName = 'Sauce Labs Backpackasa';
        await expect(InventoryPage.isProductVisible(productName)).toBeTruthy();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      });

      it('should add product to cart in inventory', async () => {
        // Navigate to the Inventory page
        //await browser.url('https://www.saucedemo.com/inventory.html');
        await Page.open('/inventory.html')
    
        const productName = 'Sauce Labs Backpack';
        await InventoryPage.clickAddToCartButton();
    
        // Verify that the shopping cart badge has been updated
        const cartBadgeText = await InventoryPage.getShoppingCartBadgeText();
        await expect(cartBadgeText).toBe('1');
      });
    
  });