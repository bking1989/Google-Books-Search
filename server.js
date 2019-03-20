// Set up our dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8081;
const app = express();

// Define our middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define our static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define our API routes

// Designate our PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});