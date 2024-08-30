
import{test,Browser, chromium, Page, expect} from '@playwright/test'


test('HandlesAlert',async()=>{
const browser :Browser = await chromium.launch({headless:false ,channel:'chrome'});
const page:Page=await browser.newPage()

await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog',async dialog=>{
   expect(dialog.accept);
})
 page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await page.waitForTimeout(5000);
    expect(dialog.dismiss());
 })
await page.click("//button[normalize-space()='Confirm Box']");
//await page.waitForTimeout(5000);












});
