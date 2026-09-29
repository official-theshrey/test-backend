const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    title: String,
    desc: String
})
const notemodel = mongoose.model('note',noteSchema)

module.exports = notemodel