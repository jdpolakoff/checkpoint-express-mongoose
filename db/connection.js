var mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema(
  {
    name: String,
    publisher: String,
    age: Number,
    active: Boolean
  }
)

mongoose.model('Author', AuthorSchema)
mongoose.connect("mongodb://localhost/authors")

module.exports = mongoose
