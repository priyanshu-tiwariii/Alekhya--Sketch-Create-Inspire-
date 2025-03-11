class apiResponse {
    constructor(public data : any , public status : number, public message : string , public success : boolean){
        this.data = data
        this.status = status
        this.message = message
        this.success = success
    }

}

export default apiResponse;