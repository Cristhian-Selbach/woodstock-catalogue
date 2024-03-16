import { type IArtist } from "../../database/models/Artists";
import Guitars from "~/server/database/models/Guitars";

export default defineEventHandler(async (event) => {
  try {
    const slugParam = event.context.params?.slug as string;

    const result = await Guitars.findOne({
      slug: slugParam,
    }).populate<{ artists: IArtist[] }>("artists");

    if (!result) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `${slugParam} could not be find`,
      });
    }

    const guitartWithArtists = result.toJSON();

    return {
      ...guitartWithArtists,
      artists: guitartWithArtists.artists as unknown as IArtist[],
    };
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
