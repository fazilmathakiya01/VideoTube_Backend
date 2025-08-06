import dotenv from 'dotenv'
dotenv.config({
    path: './.env',
})

import connectDB from "./db/dbConnection.js"

connectDB()