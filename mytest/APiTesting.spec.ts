import { ApiUtils } from "../utils/ApiUtils.spec";

import { test, expect } from '@playwright/test';  



test('getAPi using uitls',async() => {
   const baseUrl='https://reqres.in/api/';
   const api= await new ApiUtils();
   const response:any =await api.getRequest('https://reqres.in/api/users?page=2','');
    await api.validateStatusCode(response,200);
})
