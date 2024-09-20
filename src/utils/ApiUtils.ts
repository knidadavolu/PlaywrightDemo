import { APIRequestContext } from "playwright/test";

export class ApiUtils {

    requestContext: APIRequestContext;
    public response: any;
    constructor(requestContext: APIRequestContext) {
        this.requestContext = requestContext;
    }

    async getRequest(url: string) {
        this.response = await this.requestContext.get(url);
        return this.response;

    }

    async postRequest(url: string, payload: any) {
        this.response = await this.requestContext.post(url,
            { data: payload }
        )
        return this.response;
    }

    async putRequest(url: string, payload: any) {
        this.response = await this.requestContext.put(url, { data: payload });
        return this.response;
    }

    async getStatusCode() {
        const statuscode = await this.response.status();
        console.log('status code is ' + statuscode);
    }

    async getResponse() {
        const jsonResponse = await this.response.json();
        console.log(jsonResponse);
    }
}
