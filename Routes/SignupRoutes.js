const express = require('express')
const router = express.Router()
const Signup = require('../model/signUpschema')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    try {
        const signupdata = req.body
        const newsignup = new Signup(signupdata)
        await newsignup.save()
        res.status(200).json({ message: "Create account Sucessfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:email/:password', async (req, res) => {
    try {
        const { email, password } = req.params
        
        const user = await Signup.findOne({ email })
        
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const isPasswordmatch = await bcrypt.compare(password, user.password)

        if (!isPasswordmatch) {
            return res.status(404).json({ error: "Incorrect Password" })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router