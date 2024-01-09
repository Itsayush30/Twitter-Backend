import mongoose from "mongoose";

const tweetSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema); //creating model
export default Tweet;

//mongoose will make Tweet plural, we dont need to kdo that
