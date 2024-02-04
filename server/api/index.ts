import mongoose from "mongoose";

export default defineEventHandler(async () => {
  const uri = process.env.STRING_CONNECTION || "mongodb://localhost:27017";
  await mongoose.connect(uri);

  const Artists = mongoose.connection.collection("Artists");

  return Artists.find({}).toArray();
});
