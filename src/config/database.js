import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect("mongodb://twitter_mongodb/twitter_Dev");
};

export default connect;
