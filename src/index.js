import dotenv from "dotenv";
dotenv.config({});

import connectDB from "./db/dbConnection.js"
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server Running At http://localhost:${PORT}`);
  })
})
.catch((error)=>{
  console.log('MongoDB connection Failed',error);
  
})