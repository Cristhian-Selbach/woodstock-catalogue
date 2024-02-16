import Guitars from "../database/models/Guitars";
import Artists from "../database/models/Artists";
import mongoose from "mongoose";
import Fuse from "fuse.js";

export default defineEventHandler(async (event): Promise<any> => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const query = getQuery(event).query as string;

    const guitars = await Guitars.find();
    const artists = await Artists.find();

    const joinTables = [...guitars, ...artists];

    const options = {
      keys: ["brand", "model", "name", "slug", "displayName"],
      threshould: 1,
      includeScore: true,
      minScore: 100,
      location: 0,
      distance: 100,
    };

    const fuse = new Fuse(joinTables, options);
    const result = fuse.search(query);

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
