import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGOD_URI}/${DB_NAME}?appName=Cluster0`
    );
    console.log("MongoDB HOST:", connectionInstance.connection.host);
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR :", error);
    process.exit(1);
  }
};

export default connectDB;
