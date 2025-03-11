import { Express } from "express";
class apiError extends Error{
    public data: any;
    public success: boolean;
    constructor(public status:number , public message:string , public errors?:any , public stack?: any){
        super(message)
        this.status = status
        this.errors = errors
        this.data = null
        this.message = message
        this.success = false
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default apiError;


