import test, { Browser, chromium, Page } from "playwright/test";
import { insuranceDrop } from "../pageObject/insuranceDrop";

test('drop down page', async()=>{
    
    const browser:Browser= await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    const health:insuranceDrop= new insuranceDrop(page);
    //await page.goto("https://healthcare.ascension.org/");

    //health.selectDropdown();

});