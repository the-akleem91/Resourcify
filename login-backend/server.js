// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy user data
const users = [
  {
    email: 'alex@email.com',
    password: 'password123',
  },
];

// Login route
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
