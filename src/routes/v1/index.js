import express from "express";
import { createTweet } from "../../Controllers/tweet-controller.js";

const router = express.Router();

// /api/v1/tweets POST
router.post("/tweets", createTweet);

export default router;
