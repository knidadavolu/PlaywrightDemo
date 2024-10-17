import { test, expect, Browser, Page, Locator } from "@playwright/test";

import { POManager } from "../../src/pageObjectManager/POManager";
import path from "path";

const data = JSON.parse(
  JSON.stringify(require("../src/testData/orderDetails.json"))
);

const authFile = "src/config/auth.json";

/*test("Login with auth file",async({browser})=>{
  const context = await browser.newContext({storageState:authFile});
  const page = await context.newPage();
  await page.goto("");
});*/

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
test("Amazon Web Page", async ({ page }) => {
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

  // Select Product page and Cart to Cart Page
 /*const selectProductPage = pomMaager.getProductPage();
  const newPage = await selectProductPage.selectProduct(data.modelName);
  console.log('new page is :', newPage);
  if (newPage) {
      pomMaager.setNewPage(newPage);
      const addingProductToCart = pomMaager.getaddingToCartPage();
      if (addingProductToCart) {
          await addingProductToCart.selectQuality(data.qualityNumber);
          await addingProductToCart.validateTiltle();
          await addingProductToCart.validatePrice();
          await addingProductToCart.addToCart();
          await addingProductToCart.addToCartClose();

          const cartPagevalidation = pomMaager.getCartPage();
          if (cartPagevalidation) {
              await cartPagevalidation.goToCartPage();
              await cartPagevalidation.validateCartPage();
              //await cartPagevalidation.validateCartPage_title(data.modelName);
              //await cartPagevalidation.validateTotalPrice(data.qualityNumber);
          }

      }

      else {
          throw new Error('addingToCart is not initialized');
      }

  }

  else {
      throw new Error('new tab did not open as expected');
  }

*/
});
