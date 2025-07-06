import connectDB from "./db/db.js";
import { app } from "./app.js";

const port = process.env.PORT || 8080;

// Y -----{ Connect to MongoDB & start the server }----- Y //
connectDB()
  .then(() => {
    app.listen(port, () => console.log(`🚀 Server running on port http://localhost:${port}`))
      .on("error", (error) => console.error("❌ Server Error:", error.message));
  })
  .catch((error) => console.error("❌ MongoDB Connection Error:", error.message));
