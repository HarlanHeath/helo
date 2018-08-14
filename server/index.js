require("dotenv").config();
const massive = require("massive");
const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");

const port = 3001;
const app = express();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
