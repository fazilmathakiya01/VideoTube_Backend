require('dotenv').config();
import { DB_NAME } from '../constants';
import mongoose from 'mongoose';
const PATH = process.env.DATABASE_URI

const connectDB = async () => {
    try{
        await mongoose.connect(`${PATH}/${DB_NAME}`)
    }
    catch{
        console.error('Error in Database Connection',error),
        process.exit(1)
    }
}
