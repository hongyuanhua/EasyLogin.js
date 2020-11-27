"use strict";
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/pub")));

app.get("/example1", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/example1.html"));
});

app.get("/example2", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/example2.html"));
});

app.get("/example3", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.sendFile(path.join(__dirname + "/pub/example3.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});