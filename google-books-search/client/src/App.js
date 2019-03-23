import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { BooksList, BooksListItem } from "./components/BooksList";
import API from "./utils/API";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  }

  searchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  searchSubmit = event => {
    event.preventDefault();
    
    API.getBooks(this.state.bookSearch)
    .then(res => this.setState({ books: res.data.data.items }))
    .catch(err => console.log(err));
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
                onChange={this.searchChange}

                className="form-control"
                id="bookSearch"
                name="bookSearch"
                value={this.state.bookSearch}
                placeholder="Enter Title or Author Here"
                type="text" />
              <button type="button" className="btn btn-primary my-3 float-right" onClick={this.searchSubmit}>Search</button>
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
                    <BooksListItem
                      key={book.title}
                      title={book.title}
                      href={book.link}
                      authors={book.authors}
                      description={book.description}
                      image={book.image} />
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
