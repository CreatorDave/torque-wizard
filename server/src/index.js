const express = require('express');
const cors = require('cors');
const { categories } = require('./data.js');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: ['https://creatordave.github.io', 'http://localhost:3000', 'https://torque-wizard-frontend.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Get category by ID
app.get('/api/categories/:id', (req, res) => {
  const category = categories.find(c => c.id === req.params.id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 