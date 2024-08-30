import { test, Browser, chromium, Page, expect } from '@playwright/test'

test('Handleswindow', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext();
    const page1: Page = await context.newPage();
    await page1.goto("https://demo.automationtesting.in/Windows.html");
    const newPagePromise = context.waitForEvent('page')
    await page1.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > button:nth-child(1)").click();
    const newpage = await newPagePromise;

    const url: string = await newpage.url();
    console.log(url);
    await expect(newpage).toHaveURL(new RegExp("https://www.selenium"));

});