const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    database: 'furry_friends_db',
    port: 3306
});

module.exports = sequelize;
