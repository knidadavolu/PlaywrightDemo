import { Locator, Page} from "playwright";
import { expect } from "playwright/test";
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
export  class HomePage{
readonly getUserNameTitle : Locator;
readonly getLocation : Locator;
readonly getHotel:Locator;
readonly getRoomType : Locator;
readonly getNumberofRooms: Locator;
readonly getCheckInDate:Locator
readonly getCheckOutDate:Locator
readonly getAdultsPerRoom : Locator
readonly getChildrensPerRoom : Locator
readonly getSearchButton:Locator


    private page:Page;

    constructor (page:Page){
    this.page = page;
    this.getUserNameTitle= page.locator('#username_show');
    this.getLocation=page.locator('#location');
    this.getHotel=page.locator('#hotels');
    this.getRoomType=page.locator('#room_type');
    this.getNumberofRooms=page.locator('#room_nos');
    this.getCheckInDate=page.locator('#datepick_in')
    this.getCheckOutDate=page.locator('#datepick_out')
    this.getAdultsPerRoom=page.locator('#adult_room')
    this.getChildrensPerRoom=page.locator('#child_room');
    this.getSearchButton=page.locator('#Submit');
    
}

async verifyTheUser() {
    expect(this.getUserNameTitle).toBeVisible;
    }
 async selectHotelType(){
    await this.verifyTheUser();
    await this.getLocation.selectOption(testdata.Location)
    await this.getHotel.selectOption({index:4})
    await this.getRoomType.selectOption(testdata.RoomType)
    await this.getNumberofRooms.selectOption(testdata.NumberofRooms)
    await this.getCheckInDate.fill(testdata.getCheckInDate);
    await this.getCheckOutDate.fill(testdata.getCheckInDate);
    await this.getAdultsPerRoom.selectOption({value:testdata.getAdultsPerRoom})
    await this.getChildrensPerRoom.selectOption({value:testdata.getChildrensPerRoom})
    await this.getSearchButton.click();
 }
}