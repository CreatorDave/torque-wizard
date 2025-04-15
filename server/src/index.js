const express = require('express');
const cors = require('cors');
const { categories } = require('./data');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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