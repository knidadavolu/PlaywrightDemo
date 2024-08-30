import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://demo.opencart.com/');

const desktops = await page.locator("//a[normalize-space()='Desktops']");

const mac = await page.locator("//a[normalize-space()='Mac (1)']");
//mouse hover
await desktops.hover();

await mac.hover();

//right click 
await mac.click({button:'right'});

await page.waitForTimeout(2000);


});
