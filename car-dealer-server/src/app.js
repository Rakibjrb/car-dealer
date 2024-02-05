const express = require("express");
const middlewares = require("./controllers/middlewares/middlewares");
const testimonialRoutes = require("./routes/testimonials/testimonials");
const {
  routeNotFound,
  handleErrors,
} = require("./controllers/errorhandle/handleErrors");
const featuredRoutes = require("./routes/featured/featured");
const app = express();

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "car dealer server is working fine",
  });
});

//used build in middlewares
middlewares(express, app);

//testimonial routes
app.use(testimonialRoutes);

//featured product routes
app.use(featuredRoutes);

//not matched routes
app.all("*", routeNotFound);

//handle internal server errors
app.use(handleErrors);

module.exports = app;
