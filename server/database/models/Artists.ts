import mongoose, { Schema } from "mongoose";

export interface IArtist {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  guitars: mongoose.Types.ObjectId[];
  images: {
    coverImgUrl: string;
    displayImgUrl: string;
  };
}

const artistSchema: Schema = new Schema<IArtist>({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  displayName: { type: String, required: true },
  guitars: [{ type: Schema.Types.ObjectId, ref: "guitars" }],
  description: { type: String, required: true },
  images: {
    coverImgUrl: { type: String, required: true },
    displayImgUrl: { type: String, required: true },
  },
});

const Artist = mongoose.model<IArtist>("artists", artistSchema);

export default Artist;
