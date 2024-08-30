import{test,Browser, chromium, Page, expect,Frame} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://demo.automationtesting.in/Frames.html');


await page.click("//a[normalize-space()='Iframe with in an Iframe']");
const parentFrame =await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'});


const innerFrame  =  parentFrame?.childFrames();

await console.log('number of frame   :' + innerFrame?.length);

await innerFrame[0].locator("input[type='text']").fill('Hello123');

//await innerFrame[0].locator("input[type='text']").fill('Hello123')
await page.waitForTimeout(5000);

});