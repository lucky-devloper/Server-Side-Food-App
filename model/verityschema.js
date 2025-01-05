const mongoose = require('mongoose')
const varityschema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true }
})

const Category = mongoose.model('Category', varityschema)
module.exports = Category