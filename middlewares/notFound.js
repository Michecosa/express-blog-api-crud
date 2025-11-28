function notFound(req, res, next) {
  res.status(404).json({
    error: true,
    message: "Endpoint non trovato",
  });
}

module.exports = notFound;
