import mongoose, { Schema } from "mongoose";

export interface IBrand {
  name: string;
  imgUrl: string;
}

const brandSchema: Schema = new Schema<IBrand>({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const Brand = mongoose.model<IBrand>("brands", brandSchema);

export default Brand;
