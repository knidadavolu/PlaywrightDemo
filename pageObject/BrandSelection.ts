import { test, expect, Page, Locator } from '@playwright/test'

export class BrandSelection {
  select_brand: Locator;
  page: Page;
  choose_brandName: string;
  checkBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.select_brand = page.locator("#brandsRefinements ul li");
    this.choose_brandName = '#brandsRefinements ul li';
    this.checkBox = page.locator('input[type="checkbox"]');

  }

  async selectBrand(brandName: string) {

    const listOfBrand: string[] = await this.page.$$eval(this.choose_brandName, elements => elements.map(element => element.textContent?.trim().toLowerCase() || ''));
    console.log(`list the product name ${listOfBrand}`);

    const brandCound = await this.select_brand.count();

    for (let i = 0; i < brandCound; i++) {
      await this.select_brand.nth(i).allTextContents();
      //const brandCheckBox:Locator = this.select_brand.filter({hasText:brandName}).locator('input[type="checkbox"]');
      //const isCheckboxVisible= await listOfBrand.isVisible();
      if (listOfBrand.includes(brandName.toLowerCase())) {
        await this.select_brand.locator(".a-expander-prompt").click();
        const brandCheckBox: Locator = await this.select_brand.filter({ hasText: brandName }).first().locator('input[type="checkbox"]');
        console.log(brandCheckBox.count());
        console.log(`print the checkboxx ${brandCheckBox}`);

        //const brandCheckBox = await this.select_brand.locator('input[type="checkbox"]');

        await brandCheckBox.check();
        console.log(`brand ${brandName} check box is checked `)
        expect(brandCheckBox).toBeChecked();
      }
      else {
        console.log(`brand ${brandName} check box is not checked `)
        //  expect(isCheckboxVisible).toBeTruthy();

      }

    }

  }

}