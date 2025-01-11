const mongoose = require('mongoose');
require('dotenv').config();

const options = {
  retryWrites: true, // Retry write operations if they fail
  ssl: true, // Ensure SSL is enabled for secure connection
};

// Ensure the environment variable is loaded
if (!process.env.Database_URL) {
  console.error("Database_URL is missing in .env file");
  process.exit(1); // Exit if Database_URL is not found
}

mongoose.connect(process.env.Database_URL, options)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

const Db = mongoose.connection;

Db.on('connected', () => {
  console.log("MongoDB connection established");
});

Db.on('error', (err) => {
  console.log("MongoDB error: ", err);
});

Db.on('disconnected', () => {
  console.log("MongoDB connection disconnected");
});

module.exports = Db;
