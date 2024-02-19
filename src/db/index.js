import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `database connected database hosted in : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(process.env.MONGODB_URI);
    console.log("error in database connection", error);
    process.exit(1);
  }
};

export default connectDB;
