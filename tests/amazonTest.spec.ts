import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { chromium } from "@playwright/test";
import { POManager } from "../src/pageObjectManager/POManager";
import WrapperMethodsWeb from "../src/utils/WrapperMethodsWeb";

const data = JSON.parse(
  JSON.stringify(require("../src/testData/orderDetails.json"))
);

test("Amazon Web Page", async () => {
   const wrapperMethodsWeb =new WrapperMethodsWeb();
   const page:Page=await wrapperMethodsWeb.launchAndTestBrowser("chrome",false,{})
   const pomMaager: POManager = new POManager(page);


  // Login Page

     /* 
     const loginPage = pomMaager.getLoginPage();
     await loginPage.goTo();
     await loginPage.login(data.useremail,data.password);
     await loginPage.loginValidation();
     */

  // Search Page
  const searchProduct = pomMaager.getserachProduct();
  await searchProduct.goToSearch();
  await searchProduct.productSearch(data.productName);
  await searchProduct.validateSearchItem(data.productName);

  // Select Product page and Cart to Cart Page
  const selectProductPage = pomMaager.getProductPage();
  const newPage = await selectProductPage.selectProduct(data.modelName);
  console.log("new page is :", newPage);
  if (newPage) {
    console.log(" print 1234 ");
    pomMaager.setNewPage(newPage);
    const addingProductToCart = pomMaager.getaddingToCartPage();
    if (addingProductToCart) {
      console.log("print6");
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
    } else {
      throw new Error("addingToCart is not initialized");
    }
  } else {
    throw new Error("new tab did not open as expected");
  }
});
