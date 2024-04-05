import express from "express";
import connect from "./config/database.js";
import bodyParser from "body-parser";
import passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("Server started at 3000");
  await connect();
  console.log("Mongo db connected");
});
