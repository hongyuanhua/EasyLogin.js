"use strict";
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/pub")));

app.get("/index", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/index.html"));
});

app.get("/example", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/example.html"));
});

app.get("/documentation", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/documentation.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
