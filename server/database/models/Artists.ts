import mongoose, { Schema } from "mongoose";

interface Artist {
  slug: string;
  name: string;
  description: string;
  guitars: mongoose.Types.ObjectId[];
  images: {
    coverImgUrl: string;
    displayImgUrl: string;
  };
}

const ArtistSchema: Schema = new Schema<Artist>({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  guitars: [{ type: Schema.Types.ObjectId, ref: "guitars" }],
  description: { type: String, required: true },
  images: {
    coverImgUrl: { type: String, required: true },
    displayImgUrl: { type: String, required: true },
  },
});

const Artists = mongoose.model<Artist>("artists", ArtistSchema);

export default Artists;
