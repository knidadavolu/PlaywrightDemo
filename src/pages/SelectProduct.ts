import { Locator, Page } from 'playwright/test';

export class SelectProducts {
  productsNameLocator: Locator;
  addToCartLocator: Locator;
  page: Page;

  // newPage: Page | undefined;

  constructor(page: Page) {
    this.page = page;
    this.productsNameLocator = page.locator("[data-cy='title-recipe'] .a-size-medium");
    this.addToCartLocator = page.locator("#a-autoid-1-announce");
  }

  async selectProduct(modelName: string): Promise<Page | undefined> {
   try{
    await this.page.waitForLoadState('domcontentloaded');
    const productcount = await this.productsNameLocator.count();
    console.log('count of product is ', productcount)
    for (let i = 0; i < productcount; i++) {
      //await this.productsNameLocator.nth(i).waitFor({ state: 'visible' });
      const mobileName = await this.productsNameLocator.nth(i).textContent();
      console.log(`Product ${i}: ${mobileName}`);

      if(mobileName?.toLowerCase().includes(modelName.toLowerCase())) {
        console.log('matching product found', mobileName);
       const productLocator= this.productsNameLocator.nth(i);
       await productLocator.scrollIntoViewIfNeeded();

        await this.productsNameLocator.nth(i).waitFor({state: 'visible'});
        const [newPage] = await Promise.all([
          this.page.context().waitForEvent('page', { timeout: 80000 }),
          productLocator.click()
        ]);

        await newPage.waitForLoadState('domcontentloaded');
        return newPage;
      }
      }
      console.log('no matching product');
        return undefined;}
        catch(error){
          console.log('Error selecting product',error);
          return undefined;
        }

    }
  }



