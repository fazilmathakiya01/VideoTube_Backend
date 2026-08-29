import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

//config dotenv
dotenv.config({
  path: "./.env",
});

const app = express();

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
