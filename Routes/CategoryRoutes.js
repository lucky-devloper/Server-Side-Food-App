const express = require('express')
const router = express.Router()
const Category = require('../model/verityschema')

router.post('/', async (req, res) => {
    try {
        const item = req.body
        const newitem = new Category(item)
        await newitem.save()
        res.status(200).json(newitem)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const response = await Category.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router