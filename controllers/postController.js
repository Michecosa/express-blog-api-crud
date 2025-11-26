const posts = require("../data/posts");

const index = (req, res) => {
  res.json(posts);
};

const show = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(post);
};

const store = (req, res) => {
  res.send("Creazione di un nuovo post");
};

const update = (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
};

const destroy = (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
