const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)  // Use DB_URL if available (e.g., for production)
    : new Sequelize(
        process.env.DB_NAME,             // Database name
        process.env.DB_USER,             // Database username
        process.env.DB_PASSWORD,         // Database password
        {
            host: 'localhost',           // Database host
            dialect: 'postgres',         // Database dialect
            port: process.env.DB_PORT || 5432, // Optional: Specify port if needed
        }
    );

module.exports = sequelize;
