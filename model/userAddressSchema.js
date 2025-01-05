const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    fullname: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    phone: {
        type: Number, required: true, validate: {
            validator: function (value) {
                return /^[0-9]{10}$/.test(value.toString())
            },
            message: props => `${props.value} is not a valid Phone numbar!`
        }
    },
    location: { type: String, required: true }
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address