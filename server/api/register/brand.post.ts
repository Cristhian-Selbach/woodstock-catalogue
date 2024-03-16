import Brand, { type IBrand } from "../../database/models/Brands";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    await new Brand<IBrand>({
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
