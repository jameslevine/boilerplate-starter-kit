const express = require("express");
const app = express();

app.get("/helloworld", (request, response) => {
  response.send("Freddie solved this: hello world");
});

module.exports = app;
