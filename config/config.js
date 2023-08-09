require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "abhi",
    password: "",
    database: "butter_fly",
    host: "https://ec2.aws.com",
    dialect: "mysql",
  },
};
