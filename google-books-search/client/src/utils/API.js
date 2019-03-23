import axios from "axios";

export default {
    getBooks: function(query) {
      return axios.post("/api/books", { query: query });
    }
  };