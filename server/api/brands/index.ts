import Brands, { type IBrand } from "../../database/models/Brands";

export default defineEventHandler(async (event) => {
  try {
    return Brands.find<IBrand>({});
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    throw "err";
  }
});
