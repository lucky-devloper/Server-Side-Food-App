const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const signUpschema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

signUpschema.pre('save', async function (next) {
    const Login = this
    if (!Login.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        Login.password = await bcrypt.hash(Login.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})
const Signup = mongoose.model('Login', signUpschema)
module.exports = Signup