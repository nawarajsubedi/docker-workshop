
// Include Sequelize module
const Sequelize = require('sequelize')
// Creating new Object of Sequelize

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST
  }
);

// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize