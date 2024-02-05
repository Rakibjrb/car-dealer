const cors = require("cors");

const middlewares = (express, app) => {
  app.use(express.json());
  app.use(cors());
};

module.exports = middlewares;
