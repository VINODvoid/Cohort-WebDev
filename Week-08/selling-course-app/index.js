const express = require("express");

const app = express();

app.post("/users/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/users/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

app.get("/users/purchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

app.post("/course/purchase", function (req, res) {
  res.json({
    message: "purchase courses",
  });
});

app.get("/courses", function (req, res) {
  res.json({
    message: "courses endpoint",
  });
});

app.listen(8000);
