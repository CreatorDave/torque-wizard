const express = require('express');
const cors = require('cors');
const { categories } = require('./data');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: ['https://creatordave.github.io', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
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