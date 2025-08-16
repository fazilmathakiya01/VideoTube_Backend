import cookieParser from "cookie-parser"
import express from "express"
import limitsInkb from "constants"
import cors from "cors"

const app = express()

app.use(express.json({limit: limitsInkb}))
app.use(cookieParser())
app.use(express.static('Public'))

app.use(express.
    urlencoded({
        extended:true,
        limit:limitsInkb
    }))

app.use(
    cors({
        credentials:true,
        origin:process.env.CORS_ORIGIN
    }))

// import routes
import userRouter from './routes/user.routes.js'

// routes declaration 
app.use("/api/v1/users",userRouter)

export { app }