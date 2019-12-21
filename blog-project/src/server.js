import express from "express";

const app = express();

app.set("view engine", "pug");

app.get("/pug", (req, res) => {
  res.render("test");
});
app.get("/pug2", (req, res) => {
  res.render("test2");
});

app.get("/", (req, res) => {
  res.send("Hello Node");
  // C#
});

app.get("/gh", (req, res) => {
  res.send("This page is GH page!!");
  // html file
});

app.listen(3000, () => console.log("server start"));
