import{test,Page,Locator,Browser, chromium} from '@playwright/test'

test('ScreenshotConcept',async()=>{
const browser:Browser=await chromium.launch({headless:false ,channel:'chrome'});
const page:Page = await browser.newPage();

await page.goto('https://www.facebook.com/login/');
await page.screenshot({fullPage:true,path:Date.now()+'homepage.png'});


});
