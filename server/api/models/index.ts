import mongoose from "mongoose";
import Models from "../../database/models/Models";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    return Models.find({});
  } catch (error) {
    setResponseStatus(event, 400);
    console.log("Error " + error);
    return "err";
  }
});
