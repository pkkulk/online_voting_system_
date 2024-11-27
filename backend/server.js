const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // To allow requests from the React frontend
app.use(bodyParser.json()); // Parse JSON bodies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Your MySQL username
    password: 'Prathmesh312@', // Your MySQL password
    database: 'Voting', // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Endpoint to handle form data submission
app.post('/login', (req, res) => {
    const {
        username,
        about,
        firstName,
        lastName,
        email,
        address,
        country,
    } = req.body;

    // Insert form data into the database
    const sql = `INSERT INTO user (name, about, fname, lname, email, address, country)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        username,
        about,
        firstName,
        lastName,
        email,
        address,
        country,
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).send('Error saving data to database');
        }
        res.status(200).send('Form data saved successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
