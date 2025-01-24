const express = require('express');
const app = express();
require("dotenv").config();
const userRoutes = require('./routes/userRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database Connection
require('./db/db');

// Routes
app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);


// Server Connection  
app.listen(process.env.PORT, () => {
  console.log('App listening on port 3000!');
});