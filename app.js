require("dotenv").config();

const express = require("express");
const routes = require("./src/routes");
const logger = require("./src/middleware/logger");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  logger.info(`${PORT} 포트번호로 서버가 실행되었습니다.`);
});
