import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="http://www.google.com/books">Google Books</a>
            <div className="collapse navbar-collapse" id="navbar-list">
                <ul className="navbar-nav ml-3">
                    <li className="nav-item"><a href="http://www.google.com/books" className="nav-link active px-3">Search</a></li>
                    <li className="nav-item"><a href="http://www.google.com/books" className="nav-link active px-3">Saved</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;