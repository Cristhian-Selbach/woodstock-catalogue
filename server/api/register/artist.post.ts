import Artist, { type IArtist } from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    await new Artist<IArtist>({
      slug: body.slug,
      name: body.name,
      displayName: body.displayName,
      description: body.description,
      guitars: body.guitars,
      images: {
        coverImgUrl: body.images.coverImgUrl,
        displayImgUrl: body.images.displayImgUrl,
      },
    }).save();

    return "OK";
  } catch (error) {
    console.log("Error " + error);
    return "err";
  }
});
