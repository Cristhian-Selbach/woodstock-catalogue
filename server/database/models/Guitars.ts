import mongoose, { Schema } from "mongoose";

type statsValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface IGuitar {
  slug: string;
  brand: string;
  name: string;
  model: string;
  artists: mongoose.Types.ObjectId[];
  description: string;
  images: {
    coverImgUrl: string;
    displayImgUrl: string;
  };
  stats: {
    ergonomy: statsValue;
    tone: statsValue;
    construction: statsValue;
    costBenefit: statsValue;
  };
}

const guitarSchema: Schema = new Schema<IGuitar>({
  slug: { type: String, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  model: { type: String, required: true },
  artists: [{ type: Schema.Types.ObjectId, ref: "Artists" }],
  description: { type: String, required: true },
  images: {
    coverImgUrl: { type: String, required: true },
    displayImgUrl: { type: String, required: true },
  },
  stats: {
    ergonomy: { type: Number, required: true },
    tone: { type: Number, required: true },
    construction: { type: Number, required: true },
    costBenefit: { type: Number, required: true },
  },
});

const Guitar = mongoose.model<IGuitar>("guitars", guitarSchema);

export default Guitar;
