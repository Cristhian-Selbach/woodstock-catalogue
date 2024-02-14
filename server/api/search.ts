import Guitars from "../database/models/Guitars";
import Artists from "../database/models/Artists";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const query = getQuery(event).query;

    const foundGuitars = await Guitars.find({
      $or: [
        { brand: { $regex: query, $options: "i" } },
        { model: { $regex: query, $options: "i" } },
        { name: { $regex: query, $options: "i" } },
      ],
    });

    const foundArtists = await Artists.find({
      name: { $regex: query, $options: "i" },
    });

    const result = [...foundGuitars, ...foundArtists];

    if (!result || result.length === 0) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `no results for ${query}`,
      });
    }

    return result;
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    return "err";
  }
});
