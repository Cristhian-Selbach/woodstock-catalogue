import mongoose from "mongoose";
import { type IArtist } from "../../database/models/Artists";
import Guitars, { type IGuitar } from "~/server/database/models/Guitars";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    const slugParam = event.context.params?.slug as string;

    const result: IGuitar[] = await Guitars.find({
      slug: slugParam,
    }).populate<IArtist>("artists");

    if (!result || result.length === 0) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `${slugParam} could not be find`,
      });
    }

    return result[0];
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
