const express = require("express");
const middlewares = require("./controllers/middlewares/middlewares");
const app = express();

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "car dealer server is working fine",
  });
});

//used build in middlewares
app.use(middlewares);

module.exports = app;
