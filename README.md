# Spice & Slice — Restaurant Menu Display API

## About the Restaurant
**Spice & Slice** is a cozy eatery serving a fusion of classic Italian favorites and Indian-inspired dishes. We focus on fresh ingredients, bold flavors, and a friendly dining experience.

## Project Description
This project implements a simple Restaurant Menu Display API using **Node.js** and **Express.js** and a frontend HTML page that fetches data from the API using `fetch()`. The API provides endpoints to get all menu items, vegetarian items, and menu categories with counts.

**Technologies used:** Node.js, Express.js, HTML, CSS, JavaScript.

## Menu Categories Available
- Appetizer
- Main Course
- Dessert
- Beverage

## Project Structure
```
restaurant-menu-api/
├─ public/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
├─ .gitignore
├─ package.json
├─ README.md
└─ server.js
```

## API Documentation

### GET /menu
- **Method:** GET
- **Description:** Returns a JSON array with all menu items.
- **Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato, basil and mozzarella."
  }
]
```

### GET /menu/vegetarian
- **Method:** GET
- **Description:** Returns only vegetarian menu items (`isVegetarian: true`).
- **Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato, basil and mozzarella."
  }
]
```

### GET /menu/categories
- **Method:** GET
- **Description:** Returns unique categories and how many items are in each category.
- **Sample Response:**
```json
{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 3 },
    { "name": "Dessert", "itemCount": 1 },
    { "name": "Beverage", "itemCount": 1 }
  ]
}
```

## Installation & Setup Instructions

1. Clone the repository:
   ```bash
   git clone <REPO_URL>
   cd restaurant-menu-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server (port 3000):
   ```bash
   npm start
   ```

4. Open the frontend:
   Visit `http://localhost:3000/` in your browser.

5. API endpoints:
   - `http://localhost:3000/menu`
   - `http://localhost:3000/menu/vegetarian`
   - `http://localhost:3000/menu/categories`

## Features
- Express server with three GET endpoints (`/menu`, `/menu/vegetarian`, `/menu/categories`).
- Simple static frontend using `fetch()` to load and display menu data.
- Vegetarian items are labeled with a visual badge.
- Error handling in frontend fetch requests.

## GitHub Repository Link
Add your GitHub repository URL here after pushing the project.

## Author Information
- Your Name

