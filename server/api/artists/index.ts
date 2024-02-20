import mongoose from "mongoose";
import Artists, { type IArtist } from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    const artists: IArtist[] = await Artists.find({});
    return artists;
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
