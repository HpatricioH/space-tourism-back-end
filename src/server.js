const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();

const PORT = process.env.PORT;

// Server Routes
const crewRoutes = require('./v1/routes/crewRoutes');

// Middleware
app.use(cors());

// Routes
app.use('/api/v1/crew', crewRoutes);

// Run Server
app.listen(PORT, () => {
  console.log(`🚀 Server Running in port ${PORT}`);
});
