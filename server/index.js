require("dotenv").config();
const massive = require("massive");
const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");

const port = 3001;
const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post("/register", controller.newUser);
app.post("/login", controller.loginUser);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
