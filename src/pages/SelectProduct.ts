import { Locator, Page } from "playwright/test";

export class SelectProducts {
  productsNameLocator: Locator;
  addToCartLocator: Locator;
  page: Page;

  // newPage: Page | undefined;
  constructor(page: Page) {
    this.page = page;
    this.productsNameLocator = page.locator(
      "[data-cy='title-recipe'] .a-size-medium"
    );
    this.addToCartLocator = page.locator("#a-autoid-1-announce");
  }

  async selectProduct(modelName: string) {
    await this.page.waitForLoadState("domcontentloaded");
    const productcount = await this.productsNameLocator.count();
    console.log("count of product is ", productcount);
    for (let i = 0; i < productcount; i++) {
      const mobileName = await this.productsNameLocator.nth(i).textContent();
      console.log(`Product ${i}: ${mobileName}`);

      if (mobileName?.toLowerCase().includes(modelName.toLowerCase())) {
        console.log("matching product found", mobileName);
        await this.addToCartLocator.waitFor({ state: "visible" });
        this.page.waitForTimeout(3000);
        await this.addToCartLocator.click();
        await this.addToCartLocator.waitFor({ state: "visible" });
      }
    }
  }
}
