const { test, expect } = require('@playwright/test');

test('BrowserInteractions',async({page})=>{
    await page.goto('https://www.facebook.com/login/');
    await page.navigateTo("https://www.google.co.in/");
});