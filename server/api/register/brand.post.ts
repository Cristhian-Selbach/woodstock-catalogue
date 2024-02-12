import mongoose from "mongoose";
import Brand, { type IBrand } from "../../database/models/Brands";
import Slug from "../brands/[slug]";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const body = await readBody(event);

    await new Brand<IBrand>({
      name: body.name,
      slug: Slug.name,
      imgUrl: body.imgUrl,
    }).save();

    return "OK";
  } catch (error) {
    console.log("Error " + error);
    return "err";
  }
});
