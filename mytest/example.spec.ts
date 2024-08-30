import { test, expect ,Page,Browser,chromium} from '@playwright/test';
import { PlaywrightDevPage } from '../pages/PlaywrightDevpage';
import { LoginPage } from '../pages/LoginPage';

test('getting started should contain table of contents', async () => {
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage() 
const loginPage = new LoginPage(page);
await loginPage.goToUrl();
//await loginPage.loginToTheApplication();
await loginPage.verifyTitle
//const playwrightDev = new PlaywrightDevPage(page);
  //await playwrightDev.goto();
  // await playwrightDev.getStarted();
  // await expect(playwrightDev.tocList).toHaveText([
  //   `How to install Playwright`,
  //   `What's Installed`,
  //   `How to run the example test`,
  //   `How to open the HTML test report`,
  //   `Write tests using web first assertions, page fixtures and locators`,
  //   `Run single test, multiple tests, headed mode`,
  //   `Generate tests with Codegen`,
  //   `See a trace of your tests`
  // ]);
});