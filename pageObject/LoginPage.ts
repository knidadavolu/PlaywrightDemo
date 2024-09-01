
import { test, expect, Page, Locator } from '@playwright/test';

export class LoginPage {
    signIn_Hover: Locator;
    signIn_click: Locator;
    signIn_emailId: Locator;
    continue_btn: Locator;
    password: Locator;
    signIn_submit: Locator;
    page: Page;



    constructor(page: Page) {
        this.page = page;

        this.signIn_Hover = page.locator("#nav-link-accountList-nav-line-1");
        this.signIn_click = page.locator("#nav-flyout-ya-signin .nav-action-inner");
        this.signIn_emailId = page.locator("#ap_email_login");
        this.continue_btn = page.locator(".a-button-input");
        this.password = page.locator("#ap_password");
        this.signIn_submit = page.locator("#signInSubmit");
    }

    async goTo() {
        await this.page.goto("https://www.amazon.in/");

    }
    async login(useremail: string, password: string) {
        await this.signIn_Hover.hover();
        await this.signIn_click.click();
        await this.signIn_emailId.fill(useremail);
        await this.continue_btn.click();
        await this.password.fill(password);
        await this.signIn_submit.click();
    }
    async loginValidation() {
        const currentPage_title: string = await this.page.title();
        const expectedPate_title: string = "Amazon Signin"
        console.log('Page Title is ' + currentPage_title)

        if (!currentPage_title.includes(expectedPate_title)) {
            throw new Error('login is failed');
            expect(currentPage_title).not.toBe(expectedPate_title);
        }
        else {
            console.log("Login is passed")
        }
    }
    catch(error: any) {
        console.error('Error during in sing_in', error)
    }

}
