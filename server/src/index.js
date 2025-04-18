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

// Get all torque specs
app.get('/api/torque-specs', (req, res) => {
  const { categoryId, subcategoryId } = req.query;
  
  let specs = [];
  
  if (categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    if (subcategoryId) {
      const subcategory = category.subcategories.find(s => s.id === subcategoryId);
      if (!subcategory) {
        return res.status(404).json({ message: 'Subcategory not found' });
      }
      specs = subcategory.items;
    } else {
      specs = category.subcategories.flatMap(s => s.items);
    }
  } else {
    specs = categories.flatMap(c => c.subcategories.flatMap(s => s.items));
  }
  
  res.json(specs);
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
      if (subcategory.items) {
        subcategory.items.forEach(item => {
          if (
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query) ||
            subcategory.name.toLowerCase().includes(query)
          ) {
            results.push(item);
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