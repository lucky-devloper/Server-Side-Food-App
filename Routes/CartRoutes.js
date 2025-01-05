const express = require('express')
const router = express.Router()
const Cart = require('../model/cartschema')

router.post('/', async (req, res) => {
    try {
        const cartitem = req.body
        const newcartItem = new Cart(cartitem)
        await newcartItem.save()
        res.status(200).json(newcartItem)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params
        const response = await Cart.find({user_id})
        if (!response) {
            return res.status(404).json({error:"Not Item Avaliable!"})
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { quantity } = req.body
        const response = await Cart.findByIdAndUpdate(id, { quantity: quantity }, {
            new: true,
            runValidators: true
        })
        if (!response) {
            res.status(404).json({ error: "Not found item" })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await Cart.findByIdAndDelete(id)
        res.status(200).json({ message: "Delete Item sucessfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
