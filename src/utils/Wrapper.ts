import { Locator, Page } from "playwright/test";
export class Wrapper {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //click

  async click(locator:Locator){
    await locator.waitFor();
    await locator.click();
  }

  //navigating to a URL

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  //type text in to input field

  async typeText(locator: Locator, text: string) {
    await locator.waitFor();
    await locator.fill(text);
  }

  //getting the current URL

  async getURL() {
    return this.page.url();
  }

  //waiting for element to visible

  async waitForVisibility(locator: Locator) {
    await locator.waitFor({ state: "visible" });
  }

  //waiting for an element to be hidden

  async waitForInvisibility(locator: Locator) {
    await locator.waitFor({ state: "hidden" });
  }

  //getting the text content

  async getText(locator: Locator) {
    return await locator.textContent();
  }

  //selecting a value from dropdown

  async selectOption(locator: Locator, value: string) {
    await locator.selectOption(value);
  }

  //taking a screenshot

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path });
  }

  //checking a checkbox
  async check(locator: Locator) {
    await locator.waitFor();
    await locator.check();
  }

  //Unchecking a checkbox
  async unCheck(locator: Locator) {
    await locator.waitFor();
    await locator.uncheck();
  }

  //isChecked
  async isChecked(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return await locator.isChecked();
  }

  //isVisible
  async isVisible(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return await locator.isVisible();
  }

  //isHidden
  async isHidden(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return await locator.isHidden();
  }

  //isDisabled
  async isDisable(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return await locator.isDisabled();
  }

  //getting attribute value

  async getAttribute(locator: Locator, attribute: string) {
    return await locator.getAttribute(attribute);
  }


  //hovering 

  async hover(locator:Locator){
    await locator.waitFor();
    await locator.hover();
  }
  
  //clear text
  async clear(locator:Locator){
    await locator.waitFor();
    await locator.clear();
  }

  //  getTitle
  async getTitle():Promise<string>{
    return this.page.title();
  }

  //Drag and drop

  async dragAndDrop(sourceLocator:Locator,targerLocator:Locator){
    await sourceLocator.dragTo(targerLocator);
  }




}
