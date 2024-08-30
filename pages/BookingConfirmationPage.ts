import { time, timeStamp } from "console";
import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BookingConfirmationPage {
    readonly page: Page
    readonly getPageTitle: Locator;
    readonly getMyIternary: Locator;
    readonly getLogoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getPageTitle = page.locator("//td[@class='login_title']");
        this.getMyIternary = page.locator("#my_itinerary");
        this.getLogoutBtn = page.locator("a[href='Logout.php']");
    }

    async verifyTheTitle() {
        expect(this.getPageTitle).toBeVisible;
    }

    async goToMyIternary() {
        this.verifyTheTitle();
        await this.getMyIternary.click();
        await this.page.screenshot({ fullPage: true, path: Date.now() + 'BookingConfirmation.png' })
        await this.getLogoutBtn.click();
    }
}
