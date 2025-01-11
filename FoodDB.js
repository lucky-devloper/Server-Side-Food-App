const mongoose = require('mongoose')
require('dotenv').config()
const options = {
    retryWrites: true,  // Retry write operations if they fail
};
mongoose.connect(process.env.Database_URL, options)

const Db = mongoose.connection;

Db.on('connected', () => {
    console.log("server connected");
})

Db.on('error', (err) => {
    console.log("server error : ", err);
})

Db.on('disconnected', () => {
    console.log("server disconnected");
})

module.exports = Db