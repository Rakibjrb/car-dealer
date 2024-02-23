require("dotenv").config();
const cors = require("cors");

const middlewares = (express, app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: process.env.Origin,
      credentials: true,
    })
  );
};

module.exports = middlewares;
