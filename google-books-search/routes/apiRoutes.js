const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const keys = require("./keys")

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: { q: req.query, key: keys.googleBooks.api } })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
