import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { BooksList, BooksListItem } from "./components/BooksList";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  }

  searchChange = event => {
    const { name, value } = event.target;
    this.setState = ({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Jumbotron />
          <div className="card" id="searchCard">
            <h5 className="card-title m-3">Book Search</h5>
            <div className="form-group m-3">
              <input
              className="form-control"
              id="bookSearch"
              name="bookSearch"
              placeholder="Enter Title or Author Here"
              onChange={this.searchChange}
              type="search"
              value={this.state.bookSearch} />
              <button type="submit" className="btn btn-primary my-3 float-right">Search</button>
            </div>
          </div>
          <br />
          <div className="card" id="resultsCard">
            <h5 className="card-title m-3">Results</h5>
            {!this.state.books.length ? (
              <h5 className="text-center">Sorry, no results can be found!<br /><br /></h5>
            ) : (
              <BooksList>
                {this.state.books.map(book => {
                  return (
                    <BooksListItem />
                  );
                })}
              </BooksList>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
