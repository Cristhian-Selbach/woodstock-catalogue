import db from "../database/connection";

export default defineEventHandler(async () => {
  let guitars = db.collection("guitars");
  return guitars.find({}).toArray();
});
