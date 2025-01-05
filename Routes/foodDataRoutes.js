const express = require('express')
const router = express.Router()
const Food = require('../model/foodschema')

router.post('/', async (req, res) => {
    try {
        const fooddata = req.body
        const newfoodData = new Food(fooddata)
        await newfoodData.save()
        res.status(200).json(newfoodData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const response = await Food.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:foodtype', async (req, res) => {
    try {
        const { foodtype } = req.params
        const response = await Food.find({ type: foodtype });
        if (!response) {
            res.status(200).json({ error: "Item not avaliable" })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
