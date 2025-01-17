const { Client } = require('pg');


const connection  = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '',
    database: 'test'
});

connection.connect().then(() => {
    console.log('Connected to database');
} ).catch((err) => {    
    console.log('Error connecting to database', err);
});

connection.query('SELECT country, COUNT(*) FROM person GROUP BY country FETCH FIRST 10 ROW ONLY', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.rows);
    connection.end();
});