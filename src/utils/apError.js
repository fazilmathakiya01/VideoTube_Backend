class Apierror extends Error{
    constructor(
        message = "This Msg Will Be overwrited ",
        errors=[],
        statusCode,
        stack
    ) {
        super(message)
        this.message=message
        this.errors = errors,
        this.statusCode = statusCode,
        this.success = false,
        this.data = null

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { Apierror }