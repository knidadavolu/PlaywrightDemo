import {test, Locator} from '@playwright/test';
import { Wrapper } from '../src/utils/Wrapper';
import { SearchProduct } from '../src/pages/SearchProduct';
const data = JSON.parse(JSON.stringify(require("../src/testData/orderDetails.json")));

test('wrapper class test', async ({page})=>{
   const wrapper = new Wrapper(page);
   const searchProduct = new SearchProduct(wrapper,page);
   await searchProduct.goToSearch();
   await searchProduct.productSearch(data.productName);
   await searchProduct.validateSearchItem(data.productName);  
});