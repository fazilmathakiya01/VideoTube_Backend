import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

//config dotenv
dotenv.config({
  path: "./.env",
});


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
    app.on("error",(error)=>{
      console.log(" SERVER ERROR !!")
      throw error
    })
  });
})
.catch((error)=>{
  console.log("MONGODB CONNECTION FAILED !!", error)
})
