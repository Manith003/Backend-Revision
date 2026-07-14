const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.json({
    message: "hello from backend",
  });
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  await noteModel.create({
    title: title,
    content: content,
  });

  res.json({
    message: "notes added successfully.",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete({ _id: id });

  res.json({
    message: "note deleted successfully.",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  await noteModel.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      title: title,
      content: content,
    },
  );

  res.json({
    message: "notes updated succeccfully."
  })
});

module.exports = app;
