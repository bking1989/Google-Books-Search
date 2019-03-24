import React from "react";

export function SavedList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function SavedListItem({
    authors,
    description,
    image,
    url,
    title
}) {
    return (
        <li className="list-group-item mt-0 mb-2 mx-2">
            <div className="row">
                <div className="col-sm-2 text-center">
                    <img alt="" src={image} />
                </div>
                <div className="col">
                    <h3>{title}</h3>
                    <h5>{authors}</h5>
                    <p>{description}</p>
                </div>
                <div className="col-sm-2 text-center">
                    <a href={url} className="btn btn-primary text-white mb-2" target="_blank" rel="noopener noreferrer">Check It Out</a>
                </div>
            </div>
        </li>
    );
}