import { request,test,expect } from "playwright/test";
import { ApiUtils } from "../utils/ApiUtils";

test('api getRequest',async()=>{
const requestContext=await request.newContext();
const api =await new ApiUtils(requestContext);
const response=await api.getRequest('https://reqres.in/api/users/2');
api.getStatusCode();
api.getResponse();




})

