const express = require("express");
const app = express();
module.exports = app;
app.get("/", (request, response) => {
  response.send("7-10-2021");
});
