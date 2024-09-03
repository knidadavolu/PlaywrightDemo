import { expect, type Locator, type Page } from "playwright/test";
import BaseCommands from "../utils/BaseCommands";
export class LoginPage {
  readonly page: Page;
  readonly getuserName: Locator;
  readonly getpassword: Locator
  readonly getLoginButton: Locator
  basecommands: BaseCommands;

  constructor(page: Page) {
    this.page = page;
    this.getuserName = page.locator('#username');
    this.getpassword = page.locator('#password');
    this.getLoginButton = page.locator("//input[@id='login']");
    this.basecommands= new BaseCommands();
  }

  async goToUrl() {
    await this.page.goto("https://adactinhotelapp.com/");
  }

  async loginToTheApplication(username: string, password: string) {
    // await this.getuserName.fill(username);
    //await this.getpassword.fill(password);
    //this.getLoginButton.click();`
    await this.basecommands.inputValueElement(this.getuserName, username);
    await this.basecommands.inputValueElement(this.getpassword, password);
    await this.basecommands.clickOnElement(this.getLoginButton,"click");

  }

  async verifyTitle() {
    const title = await this.page.title
    await console.log(title);
    await expect(title).toEqual("Log in to Facebook");
  }
}