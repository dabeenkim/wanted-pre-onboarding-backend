const PostController = require("../controllers/post.controller");
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const postController = new PostController();

/**
 * 게시글 전체조회
 */
router.get("/", postController.getPost);

/**
 * 게시글 작성
 */
router.post("/", authMiddleware, postController.createPost);

/**
 * 게시글 상세조회
 */
router.get("/:postId", postController.getDetailPost);

/**
 * 게시글 수정
 */
router.patch("/:postId", authMiddleware, postController.modifyPost);

/**
 * 게시글 삭제
 */
router.delete("/:postId/remove", authMiddleware, postController.removePost);

module.exports = router;
