import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  devices,
} from "@playwright/test";
import mobilePlaywrightConfig from "../../playwright-mobile.config";
import { POManager } from "pageObjectManager/POManager";
import path from "path";

test.use(mobilePlaywrightConfig);

const data = JSON.parse(
  JSON.stringify(require("../src/testData/orderDetails.json"))
);

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status == "failed") {
    const screenshotPath = path.join(
      __dirname,
      `./screenshots/${testInfo.title.replace(/\s+/g, "_")}_failed.png`
    );
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });
  }
});

test("Mobile Execution Amazon Web Page", async ({ page }) => {
  const pomMaager: POManager = new POManager(page);

  /*const loginPage = pomMaager.getLoginPage();
    await page.goto("https://www.amazon.in/");
    await loginPage.login(data.useremail,data.password);
    await loginPage.loginValidation();
    await page.context().storageState({path:authFile})*/

  const searchProduct = pomMaager.getserachProduct();
  await searchProduct.goToSearch();
  await searchProduct.productSearch(data.productName);
  await searchProduct.validateSearchItem(data.productName);
});
