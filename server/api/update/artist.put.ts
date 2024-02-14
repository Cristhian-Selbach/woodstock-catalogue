import mongoose from "mongoose";
import Artist from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const body = await readBody(event);

    await Artist.updateOne(
      { _id: body.id },
      {
        slug: body.slug,
        name: body.name,
        displayName: body.displayName,
        description: body.description,
        guitars: body.guitars,
        images: {
          coverImgUrl: body.images.coverImgUrl,
          displayImgUrl: body.images.displayImgUrl,
        },
      }
    );
    return "OK";
  } catch (error) {
    console.log("Error " + error);
    return "err";
  }
});
