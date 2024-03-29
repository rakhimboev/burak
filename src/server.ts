import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection successful");
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => {
      console.info(`The server is listening on ${PORT}`);
      console.info(`Admin project is listening on http://localhost:${PORT} \n`);
    });
  })
  .catch((err) => console.log("Error connecting to MongoDB!", err));
