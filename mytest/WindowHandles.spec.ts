import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('Handleswindow',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const context =await browser.newContext();
const page1:Page=await context.newPage();
await page1.goto("https://www.facebook.com/login/");
await page1.locator("a[title='Sign up for Facebook']").click({button:'right'});
await page1.keyboard.down('ArrowDown');
const newPagePromise=context.waitForEvent('page')
await page1.keyboard.down('Enter');
await page1.keyboard.up('Enter');
const page2=await newPagePromise
await page1.locator("a[title='Log in to Facebook']").click({button:'right'})
await page1.keyboard.down('ArrowDown');
const newPagePromise2=context.waitForEvent('page')
await page1.keyboard.down('Enter');
await page1.keyboard.up('Enter');
const page3=await newPagePromise2
await page1.waitForTimeout(3000);
console.log(page1.title);
console.log(page2.title);
console.log(page3.title);

});