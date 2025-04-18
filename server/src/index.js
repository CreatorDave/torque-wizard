const express = require('express');
const cors = require('cors');
const { categories } = require('./data');

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

// Get subcategories for a category
app.get('/api/categories/:id/subcategories', (req, res) => {
  const category = categories.find(c => c.id === req.params.id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category.subcategories);
});

// Get subcategory by ID
app.get('/api/categories/:categoryId/subcategories/:subcategoryId', (req, res) => {
  const category = categories.find(c => c.id === req.params.categoryId);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  
  const subcategory = category.subcategories.find(s => s.id === req.params.subcategoryId);
  if (!subcategory) {
    return res.status(404).json({ message: 'Subcategory not found' });
  }
  
  res.json(subcategory);
});

// Search endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  
  if (!query) {
    return res.json([]);
  }
  
  const results = [];
  
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      if (subcategory.specifications) {
        subcategory.specifications.forEach(spec => {
          if (
            spec.name.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query) ||
            subcategory.name.toLowerCase().includes(query)
          ) {
            results.push({
              id: spec.id,
              name: spec.name,
              categoryId: category.id,
              subcategoryId: subcategory.id,
              category: category.name,
              subcategory: subcategory.name,
              description: `${spec.name} for ${category.name} - ${subcategory.name}`,
              torqueValue: Math.floor(Math.random() * 100) + 10, // Mock data
              unit: 'Nm',
              notes: `This is a sample torque specification for ${spec.name}`,
              lastUpdated: new Date().toISOString()
            });
          }
        });
      }
    });
  });
  
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 