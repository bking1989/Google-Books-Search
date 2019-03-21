import React from "react";

export function BooksList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BooksListItem({
    authors,
    description,
    image,
    link,
    title
}) {
    return (
        <li className="list-group-item">
            <img src={image} />
            <h4>{title}</h4>
            <p>{authors}</p>
            <p>{description}</p>
            <a href={link} className="btn btn-primary btn-sm">Check It Out</a>
        </li>
    );
}