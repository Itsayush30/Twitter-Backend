const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema); //creating model
module.exports = Tweet;

//mongoose will make Tweet plural, we dont need to kdo that
