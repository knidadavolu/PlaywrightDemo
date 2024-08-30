import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://demo.automationtesting.in/Frames.html');

const frame1 =await page.frame('SingleFrame');
 frame1?.fill("input[type='text']",'Hello123');
await page.waitForTimeout(5000);



});