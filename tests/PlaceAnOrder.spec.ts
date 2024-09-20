import { test, expect, Browser, Page, Locator } from '@playwright/test'
import WrapperMethodsWeb from '../../src/utils/WrapperMethodsWeb'
import { POManager } from '../../src/pageObjectManager/POManager';
const testdata = JSON.parse(JSON.stringify(require('../testData/testdata.json')))
test('place an order ', async () => {
    const base = await new WrapperMethodsWeb();
    const page: Page = await base.launchAndTestBrowser("chrome", false, {})
    const pom = await new POManager(page);
    const loginPage = pom.getLoginPage();
    const search = pom.getserachProduct();
    await base.goToURL(testdata.url);
    await loginPage.login();

})