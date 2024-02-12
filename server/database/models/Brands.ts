import mongoose, { Schema } from "mongoose";

export interface IBrand {
  name: string;
  slug: string;
  imgUrl: string;
}

const brandSchema: Schema = new Schema<IBrand>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const Brand = mongoose.model<IBrand>("brands", brandSchema);

export default Brand;
