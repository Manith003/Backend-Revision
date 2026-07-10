const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

let notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "notes added successfully",
  });
});

app.get("/notes", (req, res) => {
  res.json({
    message: "notes fetched successfully",
    note: notes,
  });
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
