const express = require("express")
const app = express()
const mongoose = require('mongoose')
var Schema = require('./db/connection.js')
const Author = Schema.Author


app.listen(4000, () => {
  console.log("app listening on port 4000")
})

module.exports = app

app.get("/authors", (req, res) => {
  var authors = Author.find({})
  res.send(authors)
})

app.post("/authors", (req, res) => {
  var author = new Author()
  author.save({name: req.body.name})
  .then(res.send(author))
})

app.get("/authors/:_id", (req, res) => {
  var author = Author.findOne({id: req.params._id})
  res.send(author)
})

app.put("/authors/:_id", (req, res) => {
  var author = Author.findOneAndUpdate({id: req.params._id})
  author.save()
  .then(res.send(author))
})

app.delete("/authors/:_id", (req, res) => {
  var author = Author.findOne({id: req.body.params._id})
  author.destroy()
})
