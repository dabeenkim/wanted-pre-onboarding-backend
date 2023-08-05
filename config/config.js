require("dotenv").config();

const env = process.env;

const config = {
  development: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    host: env.MYSQL_HOST,
    dialect: "mysql",
  },

  test: {
    username: env.MYSQL_USERNAME_TEST,
    password: env.MYSQL_PASSWORD_TEST,
    database: env.MYSQL_DATABASE_TEST,
    host: env.MYSQL_HOST_TEST,
    dialect: "mysql",
  },

  production: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    host: env.MYSQL_HOST,
    dialect: "mysql",
  },
};

module.exports = config;
