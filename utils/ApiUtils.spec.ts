import { APIRequestContext, APIResponse, request, Response } from "playwright"
import { expect } from "playwright/test";


export class ApiUtils {

    public apiContext!: APIRequestContext;
    public response!:any;
    

    constructor(){
        
    }

    async getRequest(url: string,params:any){
        try {
        this.response =   await this.apiContext.get(url,{params:params});
        } catch (error) {
            console.error(error);
        }
        return this.response;
    }
    async validateStatusCode(response:any , expectedStatusCode:number):Promise<void>{
        const status = await response.status();
       expect(status).toBe(expectedStatusCode);
     }

    // async postRequest(endPoint:string,body:any){
    //     let response: any;
    //     try {
    //     this.response =   await this.apiContext.post(endPoint,{data:body});
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     return response;  
    // }
    // async putRequest(endPoint:string,body:any){
    //     let response: any;
    //     try {
    //      response =   await this.apiContext.put(endPoint,{data:body});
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     return response;  
    // }

    // async deleteRequest(endPoint:string){
    //     try {
    //      this.response =   await this.apiContext.put(endPoint);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     return this.response;  
    // }

    

}












