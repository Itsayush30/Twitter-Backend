import express from "express";
import { createTweet } from "../../Controllers/tweet-controller.js";
import { toggleLike } from "../../Controllers/like-controller.js";
import { createComment } from "../../Controllers/comment-controller.js";

const router = express.Router();

// /api/v1/tweets POST
router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", createComment);

export default router;
