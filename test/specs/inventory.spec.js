
//import login
const { login } = require("../function/login");
  
  describe("Saucedemo inventory test with login function", () => {
    // Memeriksa Ketersediaan Produk:
    it('should check product availability in inventory', async () => {
      // Menggunakan fungsi login
      await login('standard_user', 'secret_sauce');
  
      // Periksa ketersediaan produk
      const productName = 'Sauce Labs Backpack';
      const product = $(`//*[text()='${productName}']/ancestor::div[@class='inventory_item']`);
      await expect(product).toExist();
    });
  
    // Menambah Produk ke Keranjang:
    it('should add product to cart in inventory', async () => {
      // Menggunakan fungsi login
      await login('standard_user', 'secret_sauce');
  
      // Buka halaman inventaris
      await browser.url('https://www.saucedemo.com/inventory.html');
  
      // Pilih produk dan tambahkan ke keranjang
      const productName = 'Sauce Labs Backpack';
      const addToCartButton = $(`//*[text()='${productName}']/ancestor::div[@class='inventory_item']//button`);
      await addToCartButton.click();
  
      // Periksa apakah produk ada di keranjang
      await browser.url('https://www.saucedemo.com/cart.html');
      const productInCart = $(`//*[text()='${productName}']`);
      await expect(productInCart).toExist();
    });
  });
  