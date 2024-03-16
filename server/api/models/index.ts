import Models, { type IModel } from "../../database/models/Models";

export default defineEventHandler(async (event) => {
  try {
    return Models.find<IModel>({});
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
