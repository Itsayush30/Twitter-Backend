import express from "express";
import { createTweet } from "../../Controllers/tweet-controller.js";
import { toggleLike } from "../../Controllers/like-controller.js";

const router = express.Router();

// /api/v1/tweets POST
router.post("/tweets", createTweet);
router.post("/likes/toggle",toggleLike)

export default router;
