import{test, Page,Locator ,Browser, chromium, expect} from '@playwright/test'
import exp from 'constants';
import { WebKitBrowser,ChromiumBrowser } from 'playwright'

test('browserLaunch',async()=>{
const browser :Browser=await chromium.launch({headless:false,channel:'chrome'});
const page:Page = await browser.newPage();


await page.goto('https://www.facebook.com/login/');
const email:Locator=await page.locator("#email");


const title =await page.title();
console.log(title);
await expect(page).toHaveTitle('Log in to Facebook')
await expect(email).toBeVisible();

});
