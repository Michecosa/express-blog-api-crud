const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(post);
});

router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;
