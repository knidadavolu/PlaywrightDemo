import { test, expect, Page, Locator } from '@playwright/test';

export class AddingToCart {
   page: Page;
   addTocart_productTitle: Locator;
   addToCart_productPrice: Locator;
   addToCart_quality: Locator;
   addToCart_button: Locator;
   addToCart_close: Locator;
   newPage: Page;

   constructor(page: Page) {
      this.page = page;
      this.newPage = page;
      this.addTocart_productTitle = page.locator("#titleSection");
      this.addToCart_productPrice = page.locator('#tp_price_block_total_price_ww .a-price-whole');
      this.addToCart_quality = page.locator("select[name='quantity']");
      this.addToCart_button = page.locator("[id='add-to-cart-button']").last();
      this.addToCart_close = page.locator("#attach-close_sideSheet-link");

   }
   async selectQuality(qualityNumber: string) {

      await this.addToCart_quality.selectOption({ value: qualityNumber });
      const selecedValue = await this.addToCart_quality.inputValue();
      expect(selecedValue).toBe(qualityNumber);
   }

   async validateTiltle() {
      const cart_productTile = await this.addTocart_productTitle.textContent();
      console.log(`Add to cart title name ${cart_productTile}`);
   }

   async validatePrice() {
      const cart_ProductPrice = await this.addToCart_productPrice.textContent();
      console.log(`Add to cart product price ${cart_ProductPrice}`);
   }

   async addToCart() {
      await this.newPage.waitForLoadState();
      await this.addToCart_button.click();
   }

   async addToCartClose() {
      await this.newPage.waitForLoadState();
      await this.addToCart_close.click();
   }

}