import mongoose from "mongoose";
import Brands from "../../database/models/Brands";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    return Brands.find({});
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    return "err";
  }
});
