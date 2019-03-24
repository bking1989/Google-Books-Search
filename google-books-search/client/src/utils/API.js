import axios from "axios";

export default {
    getBooks: function(query) {
      return axios.post("/api/books", { query: query });
    },

    getSaved: function() {
      return axios.get("/api/saved");
    }
  };