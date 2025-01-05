const mongoose = require('mongoose')
const cartschema = new mongoose.Schema({
    user_id: { type: String, required: true },
    product_id: { type: String, required: true },
    title: { type: String, required: true },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
})

const Cart = mongoose.model('Cart', cartschema)
module.exports = Cart