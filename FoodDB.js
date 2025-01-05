const mongoose = require('mongoose')
require('dotenv').config()
// mongoose.connect(process.env.DatabaseLocal_URL)  this is a local database storage 
mongoose.connect(process.env.Database_URL)     // this is online database storage

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