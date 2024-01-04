const express = require("express");
const connect = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");

app.listen(3010, async () => {
  console.log("Server started at 3010");
  await connect();
  console.log("Mongo db connected");
  const tweet = await Tweet.create({
    content: "Third tweet",
    //userEmail: "abc.com",
  });
  console.log(tweet);
});
