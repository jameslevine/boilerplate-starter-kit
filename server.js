const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routers = require("./src/routers/router.js");

app.use(express.static(path.join(__dirname, "build")));

app.use("/api", routers);

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, error =>
  error
    ? console.error(error)
    : console.info(
        `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
      )
);
