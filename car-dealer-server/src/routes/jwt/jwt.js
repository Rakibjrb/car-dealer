const jwt = require("express").Router();
const { signToken } = require("../../controllers/middlewares/jwt/jwt");

jwt.post("/api/generate-token", signToken);

module.exports = jwt;
