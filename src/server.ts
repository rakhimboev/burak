import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection successful");
    const PORT = process.env.PORT || 3003;
  })
  .catch((err) => console.log("Error connecting to MongoDB!", err));
