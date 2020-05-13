const mysql = require('mysql');
const DB_CONFIG = require('../conf');
const co = require('co-mysql');

const pool = mysql.createPool(DB_CONFIG);

module.exports = co(pool);
