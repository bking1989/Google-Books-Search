# Google-Books-Search
A web application that searches Google Books built with React

## Table of Contents
1. [Overview](#overview)
2. [Technology Used](#technology-used)
3. [How It Works](#how-it-works)

## Overview
As part of a code boot camp assignment, I was tasked with creating an application using the JavaScript library [React](https://reactjs.org/). This application was supposed to have at least two 'pages', which are not individual HTML files but rather routes that are defined using React's router package. These routes are as followed:

1. **Search** - a main page that housed the search engine feature and its results
2. **Saved** - a page that listed all of the books saved by visitors who used the application

The application's search feature had to be powered by [Google Books](https://books.google.com/) via an API, and the data that it would give back had to be able to be saved through using JavaScript and a virtual database built on [MongoDB](https://www.mongodb.com/).

## Technology Used

As mentioned in the previous section, this assignment came with some assigned pieces of technology. In addition to the usual coding languages (e.g., HTML, CSS, JavaScript, [Node.js](https://nodejs.org), [NPM](https://npmjs.com)), the application would require using the following:

1. **React** - a modular, component-based JavaScript library that uses a 'virtual DOM' to help construct user interfaces
2. **Google Books API** - an application programmable interface (API) that would allow the user to run search queries for books
3. [**Express.js**](https://expressjs.com/) - a web framework for Node.js that allows us to set up routes for the data that our API and database use
4. [**Mongoose**](https://mongoosejs.com/) - an object-modeling package that makes it easier to create datasets for our MongoDB database
5. MongoDB - An open-source, document-oriented, non-relational system for virtual databases

## How It Works
The final version of this application is hosted courtesy of [Heroku](https://www.heroku.com/), and can be seen [here](https://guarded-ravine-91972.herokuapp.com/).

When the user visits the site, they're created with a basic search engine page. From there, they can search for books via keywords and queries - most preferably a book title or author. After the search is ran, the results will show up in the container beneath the search bar. The results includes the book's title, author, a thumbnail of the cover, and a link to the information page.

Users also have the option of saving a book for later viewing. The application's second route then displays all of the saved books, and gives the users the option of removing saved books from their list.
