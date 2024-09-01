import {test,expect,Browser,Page, Locator} from '@playwright/test'
import { chromium} from '@playwright/test'
import { LoginPage } from '../pageObject/LoginPage';

test('login page', async()=>{
    
    const browser:Browser= await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    try{
    await page.goto("https://www.amazon.in/");
    /*const signIn_Hover:Locator = await page.locator("#nav-link-accountList-nav-line-1");
    const signIn_click:Locator = await page.locator("#nav-flyout-ya-signin .nav-action-inner");
    const signIn_emailId:Locator= await page.locator("#ap_email_login");
    const continue_btn:Locator= await page.locator(".a-button-input");
    const password:Locator = await page.locator("#ap_password");
    const signIn_submit:Locator = await page.locator("#signInSubmit");
    const serarch_product:Locator = await page.locator("#twotabsearchtextbox");*/
    const select_brand:Locator = await page.getByTestId("91049095031");
    const loginpage:LoginPage = new LoginPage(page);
    loginpage.login(username,password);
   /* await signIn_Hover.hover();
    await signIn_click.click();
    await signIn_emailId.fill("venkatcruze777@gmail.com");
    await continue_btn.click();
    await password.fill("Venkatesh@123");
    await signIn_submit.click();*/
    
    const currentPage_title:string = await page.title();

    if(!currentPage_title.includes('Amazon Sign In')){
        throw new Error ('login is failed');
    }
    else{
        console.log("Login is passed")
    }
    }
    catch (error){
      console.error('Error during in sing_in',error)
    }
      
});

test('search product', async()=>{
    const browser:Browser= await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
   const serarch_product:Locator = await page.locator("#twotabsearchtextbox");
   await serarch_product.fill("mobile");


});

test('filter the mobile brand', async()=>{
    
     
    async function checkbrand(brand:string) {
        const browser:Browser= await chromium.launch({headless:false});
         const page:Page = await browser.newPage();
         const brandselect:Locator = await page.getByTestId("91049095031");
        console.log( brandselect.allTextContents());

        
        const brandCheckBox:Locator = brandselect.filter({hasText:brand}).locator (".a-checkbox");
        const brandexits:Locator = await brandCheckBox;
        await brandexits.isVisible();

        if(brandexits){
           await brandCheckBox.check();
        }
        else{
            console.log('${brand} checkbox not found');
        }
         

    }
  
});

