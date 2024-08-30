import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://testautomationpractice.blogspot.com/');

//value
     //await page.locator("#country").selectOption({value:'india'});

// Visible Text
 //await page.locator("#country").selectOption({label:'India'});
 //visible text --2
// await page.locator("#country").selectOption("India");

//Index 
await page.locator("#country").selectOption({index:4});


await page.locator('#colors').selectOption(['Green','Yellow','White']);

await page.waitForTimeout(5000);


});