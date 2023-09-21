const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://djgrujovic:Kragujevac034@cluster0.tfzaaib.mongodb.net/?retryWrites=true&w=majority';

const connectToDatabase = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  
    mongoose.connection.on('connected', () => {
      console.log(`Connected to MongoDB on ${dbURI}`);
    });
  
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  };
  
  module.exports = connectToDatabase;