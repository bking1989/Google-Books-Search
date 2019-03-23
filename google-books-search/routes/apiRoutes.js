const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const keys = require("./keys")

router.post("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: { q: req.body.query, key: keys.googleBooks.api } })
    .then(data => res.send(data.data.items))
});

module.exports = router;
