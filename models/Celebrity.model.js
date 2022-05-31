//  Add your code here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CelebritySchema = Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const CelebrityModel = mongoose.model('Celebrity', CelebritySchema)

module.exports = CelebrityModel
