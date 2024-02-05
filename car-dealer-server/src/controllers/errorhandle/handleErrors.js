const routeNotFound = (req, _res, next) => {
  const error = new Error(`no route matched : ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

const handleErrors = (err, _req, res, _next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: `Error : ${err.message}` || "Internal Server Error",
    error: err.errors,
  });
};

module.exports = { routeNotFound, handleErrors };
