
import mongoose from "mongoose";
import dotenv from "dotenv";
import { MY_DB } from "../constants.js";
dotenv.config();

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
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB Error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;