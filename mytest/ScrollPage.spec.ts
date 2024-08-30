import{test,Page,Locator,Browser, chromium} from '@playwright/test'
import { dirname } from 'path';


test('scroll a page ',async()=>{
const browser:Browser =await chromium.launch({headless:false,channel:'chrome'});
const page:Page= await browser.newPage();

await page.goto('https://www.amazon.in/');
 const about =await   page.getByText('Facebook');
 await about.hover();
 await about.click
 await page.screenshot({path:'homepage.png'})









});