const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '',
    user: 'root',
    password: '',
    database: ''
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected');
})