import mongoose from "mongoose";
import Model, { type IModel } from "../../database/models/Models";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );

    const body = await readBody(event);

    await new Model<IModel>({
      name: body.name,
      slug: body.slug,
      imgUrl: body.imgUrl,
    }).save();

    return "OK";
  } catch (error) {
    console.log("Error " + error);
    return "err";
  }
});
