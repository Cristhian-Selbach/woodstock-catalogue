import { MongoClient } from "mongodb";

export default defineEventHandler(async () => {
  const client = new MongoClient(process.env.STRING_CONNECTION || "");
  const db = client.db("WoodStock");
  const artists = db.collection("artists");
  return artists.find();
});

//mongodb+srv://cristhian:cristhian123@cluster1.qbxal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://crsthian04:cristhian123@woodstock.v29v5pl.mongodb.net/
