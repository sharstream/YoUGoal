const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 5000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));