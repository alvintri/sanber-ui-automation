class InventoryPage {
    getProductByName(name) {
      return $(`//*[text()='${name}']/ancestor::div[@class='inventory_item']`);
    }
  
    get addToCartButton() {
      return $('.btn_primary.btn_inventory');
    }
  
    get shoppingCartBadge() {
      return $('.shopping_cart_badge');
    }
  
    async isProductVisible(productName) {
      const product = this.getProductByName(productName);
      await product.waitForDisplayed();
      return product.isDisplayed();
    }
  
    async clickAddToCartButton() {
      await this.addToCartButton.click();
    }
  
    async getShoppingCartBadgeText() {
      return this.shoppingCartBadge.getText();
    }
  }
  
  module.exports = new InventoryPage();
  