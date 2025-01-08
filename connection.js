const { Client } = require('pg');

const db = new Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "123456789",
    database: "salaryArtem_db"
});

db.connect()
    .then(() => console.log('Підключення до бази даних успішне'))
    .catch(err => console.error('Помилка підключення до бази даних', err.stack));

module.exports = db; // Експортуємо db правильно



/*
const { Client } = require('pg');

const db = new Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "123456789",
    database: "salaryArtem_db"
});

db.connect()
    .then(() => console.log('Підключення до бази даних успішне'))
    .catch(err => console.error('Помилка підключення до бази даних', err.stack));

module.exports = db;
*/