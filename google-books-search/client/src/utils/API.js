import axios from "axios";
require("dotenv").config();
const keys = require("./keys")

export default {
    getBooks: function(query) {
      return axios.get("/api/books", {params: { q: query, key: keys.googleBooks.api } });
    }
  };