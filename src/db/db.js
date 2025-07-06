
import mongoose from "mongoose";
import dotenv from "dotenv";
import { MY_DB } from "../constants.js";
dotenv.config();

// Y -----{ Connect to MongoDB }----- Y //
const connectDB = async () => {
  try {
    const web = await mongoose.connect(`${process.env.MONGODB_URI}/${MY_DB}`);
    console.log(`✅ MongoDB Connected: ${web.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;