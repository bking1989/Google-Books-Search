import React from "react";

export function BooksList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BooksListItem({
    authors,
    description,
    image,
    bookLink,
    title
}) {
    return (
        <li className="list-group-item mt-0 mb-2 mx-2">
            <div className="row">
                <div className="col text-center">
                    <img alt="" src={image} />
                </div>
                <div className="col-10">
                    <h3>{title}</h3>
                    <h5>{authors}</h5>
                    <p>{description}</p>
                    <a href={bookLink}>Test</a>
                    {/* <a className="btn btn-primary text-white" href={bookLink}>Check It Out</a> */}
                </div>
            </div>
        </li>
    );
}