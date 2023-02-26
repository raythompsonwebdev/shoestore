const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

app.use(morgan("dev"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use("/", serveStatic(path.join(__dirname, "build")));

// Catch all routes and redirect to the index file
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 8000;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`server started ${port}`);