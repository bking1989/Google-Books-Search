const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
