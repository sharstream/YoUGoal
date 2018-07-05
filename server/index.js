import express from "express";
import path from "path";
import bodyParser from "body-parser";
// import mongoose from "mongoose";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMIddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.PORT || 5000;

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMIddleware(compiler));
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));