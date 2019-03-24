const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: String,
    image: String,
    url: { type: String, required: true, unique: true }
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;