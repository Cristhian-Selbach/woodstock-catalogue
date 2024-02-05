import mongoose from "mongoose";
import Guitar from "../database/models/Guitars";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const body = await readBody(event);

    await new Guitar({
      slug: body.slug,
      brand: body.brand,
      name: body.name,
      model: body.model,
      artists: body.artists,
      description: body.description,
      images: {
        coverImgUrl: body.images.coverImgUrl,
        displayImgUrl: body.images.displayImgUrl,
      },
      stats: {
        ergonomy: body.stats.ergonomy,
        tone: body.stats.tone,
        construction: body.stats.construction,
        costBenefit: body.stats.costBenefit,
      },
    }).save();

    return "OK";
  } catch (error) {
    console.log("Error " + error);
    return "err";
  }
});
