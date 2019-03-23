const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const keys = require("./keys")

router.post("/books", (req, res) => {
  console.log("THEBODY",req.body)
  axios
    // .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter", { params: { key: keys.googleBooks.api } })
    .get(`https://www.googleapis.com/books/v1/volumes?q=harrys&key=AIzaSyBh-Yp72QxUwzpd615cvAY_xnSpZpwoyWY`)
    .then(data => res.json(data))
    // .catch(err => console.log(err));
});

module.exports = router;
