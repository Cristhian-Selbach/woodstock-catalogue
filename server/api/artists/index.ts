import Artists, { type IArtist } from "../../database/models/Artists";

export default defineEventHandler(async (event) => {
  try {
    const artists: IArtist[] = await Artists.find({});
    return artists;
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
