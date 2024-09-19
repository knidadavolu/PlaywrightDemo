import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { POManager } from "../src/pageObjectManager/POManager";
import WrapperMethodsWeb from "../src/utils/WrapperMethodsWeb";

const data = JSON.parse(
  JSON.stringify(require("../src/testData/orderDetails.json")));


const authFile= "src/config/auth.json";

let wrapperMethodsWeb:WrapperMethodsWeb;
let page:Page;
let pomMaager:POManager;

test.beforeAll(async()=>{
const wrapperMethodsWeb =new WrapperMethodsWeb();
const page:Page=await wrapperMethodsWeb.launchAndTestBrowser("chrome",false,{})
const pomMaager: POManager = new POManager(page)
});
test("Amazon login Page", async () => {
     const loginPage = pomMaager.getLoginPage();
     await page.goto("");
     await loginPage.login(data.useremail,data.password);
     await loginPage.loginValidation();
     await page.context().storageState({path:authFile})
});

/*test("Login with auth file",async({browser})=>{
  const context = await browser.newContext({storageState:authFile});
  const page = await context.newPage();
  await page.goto("");
});*/

test("Amazon Page Order Flow ", async () => {

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
