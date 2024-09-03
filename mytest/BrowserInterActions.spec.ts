import{test, Page,Locator ,Browser, chromium, expect} from '@playwright/test'
import { WebKitBrowser,ChromiumBrowser } from 'playwright'
import { title } from 'process';
import { BaseCommands } from '../utils/BaseCommands';

test('browserLaunch',async()=>{
const browser :Browser=await chromium.launch({headless:false,channel:'chrome'});
const page:Page = await browser.newPage();


await page.goto('https://www.facebook.com/login/');
const tilte = await page.title();
console.log(title);
await page.goto('https://www.google.co.in/');

await page.reload();
await page.goBack();
page.goForward
page.close
browser.close




});