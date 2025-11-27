const posts = require("../data/posts");

const index = (req, res) => {
  const tag = req.query.tag;
  let filteredPosts = posts;

  if (tag) {
    const tagUpper = tag.toUpperCase();
    filteredPosts = posts.filter((post) =>
      post.tags.map((tag) => tag.toUpperCase()).includes(tagUpper)
    );
  }

  res.json(filteredPosts);
};

const show = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(post);
};

const store = (req, res) => {
  const { title, content, image, tags } = req.body;

  if (!title || !content || !image) {
    return res.status(400).json({
      error: true,
      message: "title, content e image sono obbligatori",
    });
  }

  if (tags && !Array.isArray(tags)) {
    return res.status(400).json({
      error: true,
      message: "tags deve essere un array.",
    });
  }

  const newPost = {
    id: posts[posts.length - 1].id + 1,
    title,
    content,
    image,
    tags,
  };

  posts.push(newPost);

  return res.status(201).json(newPost);
};

const update = (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
};

const destroy = (req, res) => {
  const id = Number(req.params.id);
  const obiettivo = posts.find((post) => post.id === id);

  if (!obiettivo) {
    return res
      .status(404)
      .json({ error: true, message: "Obiettivo non trovato" });
  }

  posts.splice(posts.indexOf(obiettivo), 1);
  console.log("Obiettivo rimosso. Nuova lista operativa: ", posts);

  res.status(204).send();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
