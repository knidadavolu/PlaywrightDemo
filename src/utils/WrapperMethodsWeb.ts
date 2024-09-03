import { expect, Locator, Page } from "playwright/test";
import { Browser, BrowserContext, BrowserType, LaunchOptions, chromium, firefox, webkit } from "playwright/test";

export default class WrapperMethodsWeb {
    public page!: Page;

    async launchAndTestBrowser(browserType: string, headless: boolean, options: LaunchOptions): Promise<Page> {
        let browser: Browser;
        switch (browserType) {
            case 'chrome':
                browser = await chromium.launch({ headless: headless, ...options });
                break;
            case 'firefox':
                browser = await firefox.launch({ headless: headless, ...options });
                break;
            case 'webkit':
                browser = await webkit.launch({ headless: headless, ...options });
                break;
            default:
                throw new Error('Unsupported browser type! Please use "chromium", "firefox", or "webkit".');
        }
        //browser = await chromium.launch({ headless: false, channel: 'chrome' });
        this.page = await browser.newPage();
        return this.page;
    }

    //to go back the browser 
    public async goBack() {
        await this.page.goBack();
    }

    //to press combination of buttons eg: 'Control + C','Control+V'
    async pressKeys(keys: string) {
        await this.page.keyboard.press(keys);
    }
    //to press a single key eg:('Enter')
    async pressKey(key: string): Promise<void> {
        await this.page.keyboard.down(key);
        await this.page.keyboard.up(key);
    }

    //type text eg: typeText('Hi, there!')    
    async typeText(text: string): Promise<void> {
        await this.page.keyboard.type(text);
    }

    //to refresh the page
    public async refresh() {
        await this.page.reload();
    }

    //to go forward
    public async goForward() {
        await this.page.goForward();
    }

    //navigate to url
    public async navigateTo(url: string) {
        await this.page.goto(url);
    }

    //get Url of the page
    public async getUrl() {
        const url = await this.page.url
        console.log("Url is :" + url);
        return url;
    }
    
    //waiting for element to visible
    async waitForVisibility(element: Locator) {
        await element.waitFor({ state: "visible" });
    }

    //waiting for an element to be hidden
    async waitForInvisibility(element: Locator) {
        await element.waitFor({ state: "hidden" });
    }
    
    //taking a screenshot
    async takeScreenshot(path: string) {
        await this.page.screenshot({ path });
    }

    // get element Text 
    public async getText(element: Locator) {
        const text = await element.textContent();
        console.log("Text of the  Element is :" + text);
        return text;
    }

    //to click the element 
    public async clickOnElement(element: Locator, type: string) {
        switch (type.toLowerCase()) {
            case "click":
                await element.click({});
                break
            case "right click":
                await element.click({ button: 'right' });
                break;
            case "double click":
                await element.dblclick();
                break;
            default:
                break;
        }
    }

    //to pass the value 
    public async inputValueElement(element: Locator, value: string) {
        await element.waitFor();
        await element.fill(value);
    }
    
    //clear the text field
    public async clear(element: Locator) {
        await element.clear();
    }
    
    //  getTitle
    async getTitle(): Promise<string> {
        return this.page.title();
    }

    //checking a checkbox
    async check(locator: Locator) {
        await locator.waitFor();
        await locator.check();
    }

    //Unchecking a checkbox
    async unCheck(element: Locator) {
        await element.waitFor();
        await element.uncheck();
    }

    //isChecked
    async isChecked(element: Locator): Promise<boolean> {
        await element.waitFor();
        return await element.isChecked();
    }

    //isVisible
    async isVisible(element: Locator): Promise<boolean> {
        await element.waitFor();
        return await element.isVisible();
    }

    //isHidden
    async isHidden(element: Locator): Promise<boolean> {
        await element.waitFor();
        return await element.isHidden();
    }

    //isDisabled
    async isDisable(element: Locator): Promise<boolean> {
        await element.waitFor();
        return await element.isDisabled();
    }

    //getting attribute value

    async getAttribute(element: Locator, attribute: string) {
        return await element.getAttribute(attribute);
    }


    //Mouse hover
    public async mouseHover(element: Locator) {
        await element.waitFor();
        await element.hover();
    }

    //drag and drop
    public async dragAndDrop(src: Locator, target: Locator) {
        await src.dragTo(target);
    }

    //select option from dropdown -->
    //option---> paramater to pass the value we need to select 
    public async selectOption(element: Locator, type: string, option: string) {
        switch (type.toLowerCase()) {
            case "value":
                await element.selectOption({ value: option });
                break
            case "Index":
                let indexValue = Number(option);
                await element.selectOption({ index: indexValue });
                break;
            case "text":
                await element.selectOption({ label: option });
                break;
            default:
                break;
        }
    }

    //handling alert
    async alerts() {
        this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            // Handling different dialog types
            switch (dialog.type()) {
                case 'alert':
                    await dialog.accept(); // Automatically accept alert dialogs
                    break;
                case 'confirm':
                    await dialog.accept(); // Accepting confirm dialog, or use dialog.dismiss() to cancel
                    break;
                case 'prompt':
                    await dialog.accept('Sample input'); // Accept prompt with input, or use dialog.dismiss() to cancel
                    break;
            }
        })
    }


}








