import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// Y -----{ Middlewares }----- Y //  
app.use(cors());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb",extended:true}));
app.use(express.static("public"));
app.use(cookieParser())

// Y -----{ Routes }----- Y //
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user", userRoute);

export { app };