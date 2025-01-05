const express = require('express')
const router = express.Router()
const Address = require('../model/userAddressSchema')

router.post('/', async (req, res) => {
    try {
        const useraddress = req.body
        const newaddress = new Address(useraddress)
        await newaddress.save()
        res.status(200).json({ message: "save address sucessfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params
        const response = await Address.find({ user_id })
        if (!response) {
            res.status(404).json({ error: "Address not found !" })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router