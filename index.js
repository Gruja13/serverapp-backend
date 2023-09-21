const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply CORS middleware
app.use(cors());

// Import your API routes
const apiRoutes = require('./routes/routes');

// Use your API routes with '/api' prefix
app.use('/api', apiRoutes);

// Connect to the database
const connectToDatabase = require('./config/database');
connectToDatabase();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});