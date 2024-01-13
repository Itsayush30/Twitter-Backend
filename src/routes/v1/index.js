import express from "express";
import { createTweet, getTweet } from "../../Controllers/tweet-controller.js";
import { toggleLike } from "../../Controllers/like-controller.js";
import { createComment } from "../../Controllers/comment-controller.js";
import { signup, login } from "../../Controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authentication.js";

const router = express.Router();

// /api/v1/tweets POST
router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", authenticate, createComment);
router.post("/signup", signup);
router.post("/login", login);

export default router;
