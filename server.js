const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));
const posts = require("./data/posts");
const postsRouter = require("./routers/posts");

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
