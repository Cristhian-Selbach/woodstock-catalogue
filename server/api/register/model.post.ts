import Model, { type IModel } from "../../database/models/Models";

export default defineEventHandler(async (event) => {
  try {
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
