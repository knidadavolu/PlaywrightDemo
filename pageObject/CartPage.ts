import { test, expect, Page, Locator } from '@playwright/test';
import { parse } from 'path';

export class CartPage {
    page: Page;
    goToCartPageLocator: Locator;
    cartPage_productTitle: Locator;
    cartPage_price: Locator;
    cartPage_total: Locator;
    cartPage_quantity:Locator;
    constructor(page: Page) {
        this.page = page;
        this.goToCartPageLocator = page.locator("#nav-cart");
        this.cartPage_productTitle = page.locator(".a-unordered-list span.a-truncate .a-truncate-full");
        this.cartPage_price = page.locator(".a-unordered-list span.sc-price");
        this.cartPage_quantity = page.locator("span.a-dropdown-prompt");
        this.cartPage_total = page.locator("#sc-subtotal-amount-activecart");     
            

    }

    async goToCartPage() {
        this.goToCartPageLocator.click();
    }

     async validateCartPage(){
       await this.page.waitForLoadState('domcontentloaded');
       const cartTitle = await this.cartPage_productTitle.textContent();
       const price = await this.cartPage_price.textContent();
       const cartquanity = await this.cartPage_quantity.textContent();

       const pricevalue = parseFloat(price?.replace(/[^0-9.-]+/g,'') || '0');
       console.log(`cart page price value is `, pricevalue);

       const qualityvalue = parseInt(cartquanity || '0',10);
       console.log(` cart page quantity value is `, qualityvalue);

       const expectedTotal = pricevalue * qualityvalue;
       console.log(`expected totla is `, expectedTotal);

       const cartTotal = await this.cartPage_total.textContent();
       const cartTotalAmount= parseFloat(cartTotal?.replace(/[^0-9.-]+/g,'') || '0');

       console.log(` actual totla amount`, cartTotalAmount)

       expect(expectedTotal).toEqual(cartTotalAmount);


     }}
