const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/FoodDB')

const Db = mongoose.connection;

Db.on('connected', () => {
    console.log("server connected");
})

Db.on('error', (err) => {
    console.log("server error : ", err);
})

Db.on('disconnected', ()=>{
    console.log("server disconnected");
})

module.exports = Db