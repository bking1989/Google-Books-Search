import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="http://www.google.com/books">Google Books</a>
            <ul className="navbar-nav ml-auto ml-sm-3 d-block">
                <li className="nav-item d-inline-block"><a href="http://www.google.com/books" className="nav-link active px-3">Search</a></li>
                <li className="nav-item d-inline-block"><a href="http://www.google.com/books" className="nav-link active px-3">Saved</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;