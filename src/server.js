import express from "express";
import connectDB from "./db/db.js";

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
