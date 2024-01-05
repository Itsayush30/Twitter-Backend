const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    contents: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },
    hashtags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hashtags",
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema); //creating model
module.exports = Tweet;

//mongoose will make Tweet plural, we dont need to kdo that
