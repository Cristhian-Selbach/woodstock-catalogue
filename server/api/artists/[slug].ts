import mongoose from "mongoose";
import Artists from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    const slugParam = event.context.params?.slug as string;

    const result = await Artists.find({
      slug: slugParam,
    });

    if (!result || result.length === 0) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `${slugParam} could not be find`,
      });
    }

    return result;
  } catch (error) {
    setResponseStatus(event, 400);
    console.log("Error " + error);
    return "err";
  }
});
