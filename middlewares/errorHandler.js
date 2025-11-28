function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    error: true,
    message: "Ma che combini",
    dettagli: err.message,
  });
}

module.exports = errorHandler;
