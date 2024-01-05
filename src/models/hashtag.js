const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tweets",
    },
  },
  { timestamps: true }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema); //creating model
module.exports = Hashtag;

//mongoose will make Tweet plural, we dont need to kdo that
