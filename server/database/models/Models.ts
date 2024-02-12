import mongoose, { Schema } from "mongoose";

export interface IModel {
  name: string;
  slug: string;
  imgUrl: string;
}

const modelSchema: Schema = new Schema<IModel>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const Model = mongoose.model<IModel>("models", modelSchema);

export default Model;
