import mongoose from "mongoose";
import Artists, { type IArtist } from "../../database/models/Artists";
import { type IGuitar } from "../../database/models/Guitars";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    const slugParam = event.context.params?.slug as string;

    const result: IArtist[] = await Artists.find({
      slug: slugParam,
    }).populate<IGuitar>("guitars");

    if (!result || result.length === 0) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `${slugParam} could not be find`,
      });
    }

    return result;
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
