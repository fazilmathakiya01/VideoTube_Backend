class Apiresponse{
    constructor(statusCode, message = "success", data){
        this.statusCode = statusCode,
        this.message = message,
        this.data = data,
        this.statusCode = 400 > statusCode
    }
}

export { Apiresponse }