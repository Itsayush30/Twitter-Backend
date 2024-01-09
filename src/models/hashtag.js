import mongoose from "mongoose";

const hashtagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tweets",
      },
    ],
  },
  { timestamps: true }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema); //creating model
export default Hashtag;

//mongoose will make Tweet plural, we dont need to kdo that
