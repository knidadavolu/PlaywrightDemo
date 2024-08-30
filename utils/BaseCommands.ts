import { expect, Locator, Page } from "playwright/test";
import { Browser, BrowserContext, BrowserType, LaunchOptions, chromium, firefox, webkit } from "playwright/test";

export default class BaseCommands {
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

    //types text eg: typeText('Hi, there!')    
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

    // get element Text 
    public async getElementText(locator: Locator) {
        const text = await locator.textContent();
        console.log("Text of the  Element is :" + text);
        return text;
    }

    //to click the element 
    public async click(element: Locator, type: string) {
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
        await element.fill(value);
    }
    //clear the text field
    public async clear(element: Locator) {
        await element.clear();
    }

    //Mouse hover
    public async mouseHover(element: Locator) {
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








