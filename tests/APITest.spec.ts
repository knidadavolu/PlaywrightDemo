import { request,test,expect } from "playwright/test";
import { ApiUtils } from "../src/utils/ApiUtils";

test('api getRequest',async()=>{
const requestContext=await request.newContext();
const api =await new ApiUtils(requestContext);
const response=await api.getRequest('https://reqres.in/api/users/2');
api.getStatusCode();
api.getResponse();
})


test('api postResquest',async()=>{
    const requestContext=await request.newContext();
    const api =await new ApiUtils(requestContext);
    const response=await api.postRequest('https://reqres.in/api/users','{"name": "morpheus","job": "leader"}');
    api.getStatusCode();
    api.getResponse();

 })

