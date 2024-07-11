const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://rekhaanagodar:Rekha%40123@cluster0.jgj60je.mongodb.net/CleanEase';

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports =mongoose