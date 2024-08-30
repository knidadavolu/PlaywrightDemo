const {test, expect} = require ('@playwright/test');
const { loadESLint } = require('eslint');

test('Locators',async({page})=>{
await page.goto('https://www.facebook.com/login/');
await page.navigate("https://www.google.co.in/");
await page.locator("//a[text()='Sign up for Facebook']").click();
 page.goForward();
 const urltext =await page.url;
console.log(urltext);
await page.reload();
await page.viewportSize();
await page.getByRole('button',{})
await page.fill("input[name='firstname']","hari");
//await page.getByRole('textbox', { name: 'lastname' }).fill("hari@123");
await page.fill("input[name='lastname']",'haran');
});
