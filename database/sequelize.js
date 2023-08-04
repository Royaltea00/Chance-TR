const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const sqlport   = process.env.SQL_PORT;
const host      = process.env.DB_HOST;
const db        = process.env.DB_NAME;
const pwd       = process.env.DB_PASSWORD;
const username  = process.env.DB_USER;

const sequelize = new Sequelize(db, username, pwd, {
  host: host,
  dialect: 'mysql',
  port: sqlport,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
