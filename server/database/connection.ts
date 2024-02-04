import mongoose from "mongoose";
const uri = process.env.STRING_CONNECTION || "mongodb://localhost:27017";
export default mongoose.connect(uri);
