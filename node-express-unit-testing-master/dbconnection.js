var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'welcome',
    database: 'node-express-mysql'
});
module.exports = connection;