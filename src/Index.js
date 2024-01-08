import express from "express";
import connect from "./config/database.js";


const app = express();

app.listen(3010, async () => {
  console.log("Server started at 3010");
  await connect();
  console.log("Mongo db connected");

});
