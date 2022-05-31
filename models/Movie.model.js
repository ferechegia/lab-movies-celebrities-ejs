//  Add your code here

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [Number]
});

const movieModel = mongoose.model('movie', movieSchema)

module.exports = movieModel

