const express = require("express");
const app = express();
module.exports = app;
app.get("/", (request, response) => {
  let date=new Date();
  response.send(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
});
