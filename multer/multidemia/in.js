
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());




// Route to handle registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // For simplicity, log data. In real apps, validate and save to a database.
    console.log('Registration Data:', { username, email, password });

    // Respond with a success message
    res.json({ message: 'Registration successful!', data: { username, email } });
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on http://localhost:${PORT}");
});