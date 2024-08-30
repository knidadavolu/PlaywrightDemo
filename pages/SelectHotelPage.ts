import { Locator, Page} from "playwright";
import { expect } from "playwright/test";

export  class SelectHotelPage{
    readonly page:Page
    readonly getSelectHotelTitle: Locator;
    readonly getRadioButton : Locator;
    readonly getContinueButton:Locator;
   

    constructor(page:Page){
        this.page =page;
        this.getSelectHotelTitle = page.locator(".login_title");
        this.getRadioButton=page.locator("#radiobutton_0");
        this.getContinueButton=page.locator("#continue");
    }

    async verifyTheTitle() {
        expect(this.getSelectHotelTitle).toBeVisible;
 }

    async selectTheHotel(){
     await this.verifyTheTitle();
     await this.getRadioButton.click();
     await this.getContinueButton.click();
    }
}