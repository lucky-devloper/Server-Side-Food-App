const mongoose = require('mongoose')
const Foodmodel = new mongoose.Schema({
    item: { type: String, required: true },
    title: { type: String, required: true },
    benefit: { type: String, },
    price: { type: Number, default: 100 },
    rating: { type: Number, default: 2 },
    type: { type: String, required: true }
})

const Food = mongoose.model('Food', Foodmodel)
module.exports = Food