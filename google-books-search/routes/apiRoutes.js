const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const keys = require("./keys")

router.post("/books", (req, res) => {
  console.log(req.body.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter", { params: { q: req.body.query, key: keys.googleBooks.api } })
    .then(data => console.log(data.data.items));
});

module.exports = router;
