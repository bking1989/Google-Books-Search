import React, { Component } from "react";
import { SavedList, SavedListItem } from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount = () => {
        API.getSaved()
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      }

    render() {
        return (
            <div>
                <div className="card mb-3" id="resultsCard">
                    <h5 className="card-title m-3">Saved Books</h5>
                    {!this.state.savedBooks.length ? (
                        <h5 className="text-center">Sorry, there are no saved books!<br /><br /></h5>
                        ) : (
                        <SavedList>
                            {this.state.books.map(book => {
                                return (
                                    <SavedListItem
                                    key={book.id}
                                    title={book.title}
                                    url={book.url}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image} />
                                    );
                                })}
                        </SavedList>
                    )}
                </div>
            </div>
        );
    }
}

export default Saved;