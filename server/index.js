import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// import webpack from "webpack";
// import webpackMiddleware from "webpack-dev-middleware";
// import webpackHotMiddleware from "webpack-hot-middleware";
// import webpackConfig from "../webpack.config.dev";

const app = express();
// const compiler = webpack(webpackConfig);
const port = process.env.PORT || 8000;
// Define middleware here
// app.use(webpackMiddleware(compiler, {
//     hot: true,
//     publicPath: webpackConfig.output.publicPath,
//     noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//mongoConnector
mongoose.connect(`mongodb://localhost/youGoal`);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));