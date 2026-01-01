const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    try {
        const url = process.env.DATABASE_URL;
        console.log('Testing connection to:', url.split('@')[1]); // Log host part for safety
        const connection = await mysql.createConnection(url);
        console.log('Successfully connected to the database.');
        const [rows] = await connection.execute('SELECT 1 + 1 AS result');
        console.log('Query result:', rows[0].result);
        await connection.end();
    } catch (error) {
        console.error('Failed to connect to the database:', error.message);
    }
}

testConnection();
