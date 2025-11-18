const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory menu data
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, basil and mozzarella."
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Creamy tomato-based curry with tender chicken pieces."
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 250,
    isVegetarian: true,
    description: "Char-grilled cottage cheese cubes marinated in spices."
  },
  {
    id: 4,
    name: "Garlic Bread",
    category: "Appetizer",
    price: 150,
    isVegetarian: true,
    description: "Toasted bread with garlic butter and herbs."
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 120,
    isVegetarian: true,
    description: "Soft syrup-soaked sweet dumplings."
  },
  {
    id: 6,
    name: "Fish Fry",
    category: "Main Course",
    price: 380,
    isVegetarian: false,
    description: "Crispy spiced fried fish served with lemon wedges."
  },
  {
    id: 7,
    name: "Masala Chai",
    category: "Beverage",
    price: 60,
    isVegetarian: true,
    description: "Hot spiced tea brewed with milk."
  }
];

// Middleware to serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint: GET /menu - returns all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// Endpoint: GET /menu/vegetarian - returns only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const vegItems = menu.filter(item => item.isVegetarian === true);
  res.json(vegItems);
});

// Endpoint: GET /menu/categories - returns unique categories with counts
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(counts).map(name => ({ name, itemCount: counts[name] }));
  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`Restaurant Menu API server is running on http://localhost:${PORT}`);
});
