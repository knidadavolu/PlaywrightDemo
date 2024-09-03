import test, {Browser, chromium, Page}from '@playwright/test';
import BaseCommands from '../utils/BaseCommands';
import { PageObjectManager } from '../PageObjectManager/PageObjectManager';
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))


test('browserLaunch',async()=>{
    const basecommands=new BaseCommands();
    const page:Page=await basecommands.launchAndTestBrowser("chrome",false,{});
    const pom= await new PageObjectManager(page);
    const loginPage=await pom.getLoginPage();
    const homePage =await pom. getHomePage();
    await loginPage.goToUrl();
    await loginPage.loginToTheApplication(testdata.username,testdata.password);
    await homePage.selectHotelType();
});