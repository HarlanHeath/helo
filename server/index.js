require("dotenv").config();
const massive = require("massive");
const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");
const session = require("express-session");

const port = 3001;
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post("/register", controller.newUser);
app.post("/login", controller.loginUser);
app.get("/posts", controller.allPosts);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
