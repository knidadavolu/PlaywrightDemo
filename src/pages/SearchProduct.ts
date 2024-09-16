import { test, expect, Page, Locator } from "@playwright/test";
import WrapperMethodsWeb from "../utils/WrapperMethodsWeb";

export class SearchProduct {
  wrapper: WrapperMethodsWeb;
  search_product: Locator;
  search_btn: Locator;
  search_ItemResult: Locator;
  page: Page;

  constructor(wrapper:WrapperMethodsWeb ,page: Page) {
    this.page = page;
    this.wrapper = wrapper;
    this.search_product = page.locator("#twotabsearchtextbox");
    this.search_btn = page.locator("#nav-search-submit-button");
    this.search_ItemResult = page.locator(".a-color-state");
  }

  

  async productSearch(productName: string) {
    await this.search_product.clear();
    await this.wrapper.typeText(this.search_product,productName)
  //  await this.search_product.fill(productName);
    await this.wrapper.clickOnElement(this.search_btn,"click");
  }

  async validateSearchItem(productName: string) {
    const itemvalue: any = await this.search_ItemResult.textContent();
    const received_itemvalue: string = itemvalue.replace(/["\\]/g, "").trim();
    console.log("print the item name " + received_itemvalue);
    expect(received_itemvalue).toBe(productName);
  }
}
