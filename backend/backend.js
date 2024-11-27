const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'Prathmesh312@',  // Replace with your MySQL password
  database: 'Voting'  // Replace with your database name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Query to list all tables
connection.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error('Error fetching tables:', err);
  } else {
    console.log('Tables in the database:', results);
  }
  connection.end();
});
