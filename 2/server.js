const express = require("express")

const app = express()

app.get('/home',(req, res)=>{
 res.json({
    message: "welcome to home page."
 })
})

app.get('/about',(req, res)=>{
 res.json({
    message: "welcome to about page."
 })
})


app.listen(3000,()=>{
console.log("server is running at 3000")
})