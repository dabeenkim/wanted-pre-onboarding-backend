require("dotenv").config();
require("express-async-errors");

const express = require("express");
const routes = require("./src/routes");
const logger = require("./src/middleware/logger");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cookieParser());
app.use(express.json());
app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});
app.listen(PORT, () => {
  logger.info(`${PORT} 포트번호로 서버가 실행되었습니다.`);
});
