import type { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  try {
    await mongoose.connect(process.env.STRING_CONNECTION!);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
};
