const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();

const PORT = process.env.PORT;

// Middleware
app.use(cors());

// Run Server
app.listen(PORT, () => {
  console.log(`🚀 Server Running in port ${PORT}`);
});
