import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
export class BookHotelPage {
    readonly page: Page
    readonly getPageTitle: Locator;
    readonly getFirstName: Locator;
    readonly getLastName: Locator;
    readonly getBillingAddress: Locator;
    readonly getCreditCardNo: Locator;
    readonly getCardType: Locator;
    readonly getExpiryDateMonth: Locator;
    readonly getExpiryDateYear: Locator;
    readonly getCVVNumber: Locator;
    readonly getBookNowButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.getPageTitle = page.locator("//td[normalize-space()='Book A Hotel']");
        this.getFirstName = page.locator("#first_name");
        this.getLastName = page.locator("#last_name");
        this.getBillingAddress = page.locator("#address");
        this.getCreditCardNo = page.locator("#cc_num");
        this.getCardType = page.locator("#cc_type");
        this.getExpiryDateMonth = page.locator("#cc_exp_month");
        this.getExpiryDateYear = page.locator("#cc_exp_year");
        this.getCVVNumber = page.locator("#cc_cvv");
        this.getBookNowButton = page.locator("#book_now");
    }

    async verifyTheTitle() {
        expect(this.getPageTitle).toBeVisible;
    }

    async bookAHotel() {
        await this.verifyTheTitle();
        await this.getFirstName.fill(testdata.firstName);
        await this.getLastName.fill(testdata.lastName);
        await this.getBillingAddress.fill(testdata.billingAddress);
        await this.getCreditCardNo.fill(testdata.creditCardNo);
        await this.getCardType.selectOption({ value: testdata.cardType });
        await this.getExpiryDateMonth.selectOption({ value: testdata.expMonth });
        await this.getExpiryDateYear.selectOption({ value: testdata.expYear });
        await this.getCVVNumber.fill(testdata.cvv);
        await this.getBookNowButton.click();

    }

}