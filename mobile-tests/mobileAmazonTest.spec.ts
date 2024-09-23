import { test, expect, Browser, Page, Locator } from "@playwright/test";
import mobilePlaywrightConfig from "../mobile-playwright.config";

test.use(mobilePlaywrightConfig.use || {});

test('Mobile Test',async({page})=>{

});