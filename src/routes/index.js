const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routes");
const postRouter = require("./post.routes");

router.use("/auth", authRouter);
// router.use("/post", postRouter);

module.exports = router;
