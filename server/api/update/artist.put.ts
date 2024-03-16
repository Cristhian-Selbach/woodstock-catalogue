import Artist from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
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
