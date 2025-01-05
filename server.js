const express = require('express')
const app = express()
const Db = require('./FoodDB')
const bodyparser = require('body-parser')
const cors = require('cors')
const Foodrouter = require('./Routes/foodDataRoutes')
const SignupRouter = require('./Routes/SignupRoutes')
const Cartrouter = require('./Routes/CartRoutes')
const CategoryRouter = require('./Routes/CategoryRoutes')
const AddressRouter = require('./Routes/AddressRoutes')

app.use(bodyparser.json())
app.use(cors());

app.get('/app', (req, res) => {
    res.send("The base URl is : http://localhost:3000/app")
})

app.use('/app/food', Foodrouter)
app.use('/app/signup', SignupRouter)
app.use('/app/cart', Cartrouter)
app.use('/app/item', CategoryRouter)
app.use('/app/address', AddressRouter)

app.listen(3000, () => {
    console.log("server running on https://localhost:3000");
})
