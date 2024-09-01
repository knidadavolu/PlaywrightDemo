import { test, expect, Page, Locator } from '@playwright/test';
export class insuranceDrop{
    page:Page;
    insuranceDrop:Locator;
    allCarrior:Locator;
    dataMap: Map<string,string>;

    constructor (page:Page){
       this.page =page;
       this.insuranceDrop = page.locator('[placeholder="Insurance carrier and plan"]');
       this.allCarrior = page.locator('[data-testid="insurance-carriers-list"] [aria-label="All carriers"] li');
       this.dataMap= new Map();
    }

// Selects a value from a dropdown
async selectDropdown(dropdowntype :string , dropdownValue : string = "random"){
    let randomText: string;
    console.log('print 1')

    await this.page.goto("https://healthcare.ascension.org/");
    await this.page.waitForLoadState("networkidle");
    
    console.log('print 1');

    await this.insuranceDrop.click();

    console.log('print 1')

    if (dropdownValue == "random") {
        await this.page.waitForLoadState("domcontentloaded");

        const options = await this.allCarrior.allTextContents();

        console.log(`option value is `, options)
        if(options.length ==0){
            throw new Error('No option is found');
        }

        const randomIndex = Math.floor(Math.random() * options.length);
        console.log(`random text is `,randomIndex);
        const randomText = options[randomIndex];
        console.log(`random Text is : `, randomText);
        this.dataMap.set(dropdowntype,randomText);

        console.log(dropdowntype);
        

        //await this.allCarrior.locator (`option:has-text("${randomText}")`).click();


        //this.dataMap.set("randomDropText", randomText || "");

        await this.allCarrior.locator(`text="${randomText}"`).click();
    }
    else{
        this.dataMap.set(dropdowntype,dropdownValue);
        await this.allCarrior.locator(`text=${dropdownValue}`).click();
    }
    } 
    }
  
 
  


