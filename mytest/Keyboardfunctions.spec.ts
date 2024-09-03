import{test,Browser, chromium, Page, expect} from '@playwright/test'
import BaseCommands from "../utils/WrapperMethodsWeb";
test('HandlesAlert',async()=>{
    const basecommands =await new BaseCommands();
    const page:Page=await basecommands.launchAndTestBrowser("chrome",false,{})

await page.goto('https://gotranscript.com/text-compare');

await page.fill('//textarea[@placeholder="Paste one version of the text here."]','Welcome to Automation');

// for combination of two buttons we use---> press , 
//for single single we use ---> down and up, down(press), up(release)

await basecommands.pressKeys('Control+A',);
await basecommands.pressKeys('Control+A');
await basecommands.pressKeys('Control+A')
//await page.keyboard.press('Control+A');
await basecommands.pressKeys('Control+C')
//await page.keyboard.press('Control+C');
//tab
await basecommands.pressKey('Tab')
// await page.keyboard.down('Tab');
// await page.keyboard.up('Tab');
await basecommands.pressKeys('Control+V');
//await page.keyboard.press('Control+V');

await page.waitForTimeout(1000);


}); 
