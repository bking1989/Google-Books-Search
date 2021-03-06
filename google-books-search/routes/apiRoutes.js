const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();
const keys = require("./keys");

var db = require("../models");

// POST-GET route for Google Books API
router.post("/", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: { q: req.body.query, key: keys.googleBooks.api } })
    .then(data => res.send(data.data.items))
});

// POST route for saving books
router.post("/books", (req, res) => {
  db.Books
  .create(req.body)
  .then(data => res.json(data))
  .catch(err => console.log(err))
});

// GET route for getting saved book data
router.get("/books", (req, res) => {
  db.Books
  .find({}).sort({ title: 1 })
  .then(data => res.json(data))
  .catch(err => console.log(err))
});

// DELETE route for removing saved book
router.delete("/books/:id", (req, res) => {
  db.Books
  .deleteOne({ _id: req.params.id })
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

// Final completed route
router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
