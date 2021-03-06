/// <reference path="../api/KiiContext.ts"/>

module Kii {
    export interface HttpClient {
        setUrl(url : string);

        setMethod(method : string);
        
        setContentType(value : string);

        setHeader(key : string, value : string);

        setKiiHeader(context : KiiContext, authRequired : boolean);

        sendText(text : string) : Promise<HttpResponse>;
        
        sendJson(method : string, url : string, json : any) : Promise<HttpResponse>;
        sendJson(json : any) : Promise<HttpResponse>;

        send(method : string, url : string) : Promise<HttpResponse>;
        send() : Promise<HttpResponse>;
        
    }

    export interface HttpResponse {
        status : number;
        headers : any;
        body : any;
    }

    export interface HttpError {
        status : number;
        code : string;
        message : string;
        // original response
        headers : any;
        body : any;
    }
}