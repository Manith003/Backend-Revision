const express = require("express");

const app = express();
app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "notes added successfully",
  });
});

app.get('/notes',(req, res)=>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

app.patch('/note-update/:id',(req, res)=>{
    let index = req.params.id
    let {title, content} = req.body
    notes[index].title = title
    notes[index].content = content

    res.json({
        message: "notes are updated.",
    })
})

app.delete('/note-delete/:id',(req, res)=>{
    let index = req.params.id
    delete notes[index]

    res.json({
        message: "notes deleted sucessfully"
    })
})

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
