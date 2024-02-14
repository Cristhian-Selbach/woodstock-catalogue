import mongoose from "mongoose";
import Artists from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    return Artists.find({});
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    return "err";
  }
});
