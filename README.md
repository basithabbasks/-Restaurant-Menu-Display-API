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
# Spice & Slice — Restaurant Menu Display API

About
-----
Spice & Slice is a small demo project that implements a simple Restaurant Menu Display API using Node.js and Express, plus a minimal static frontend that fetches data from the API.

Technologies
------------
- Node.js + Express
- HTML, CSS, vanilla JavaScript (frontend)

Repository
----------
https://github.com/basithabbasks/-Restaurant-Menu-Display-API

Project structure
-----------------
```
restaurant-menu-api/
├─ public/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
├─ package.json
├─ README.md
└─ server.js
```

Quick start
-----------
Prerequisites: Node.js (14+), npm

Clone and install:

```powershell
git clone https://github.com/basithabbasks/-Restaurant-Menu-Display-API.git
cd restaurant-menu-api
npm install
```

Run the server (default port 3000):

```powershell
npm start
```

Then open the frontend in your browser:

http://localhost:3000/

Environment
-----------
- The server uses `process.env.PORT` if set. To run on a different port:

```powershell
$env:PORT=4000; npm start
```

API Endpoints
-------------
- GET /menu — returns all menu items
- GET /menu/vegetarian — returns only vegetarian items
- GET /menu/categories — returns unique categories and item counts

Example requests
----------------
Get all menu items:

```bash
curl http://localhost:3000/menu
```

Get vegetarian items:

```bash
curl http://localhost:3000/menu/vegetarian
```

Get categories:

```bash
curl http://localhost:3000/menu/categories
```

Frontend
--------
The `public/index.html` page fetches `/menu` on load and displays the items. It is served statically by `server.js`.

Contributing
------------
- Feel free to open issues or submit pull requests.
- If you add features, please include tests (if applicable) and update this README.

License
-------
This project is published under the MIT license. See the `LICENSE` file.

Author
------
Your Name

