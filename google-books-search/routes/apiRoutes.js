const axios = require("axios");
const router = require("express").Router();

require("dotenv").config();
const keys = require("./keys.js")

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: { q: req.param.query, key: keys.googleBooks.api } })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
