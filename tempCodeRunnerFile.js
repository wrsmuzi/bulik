const client = require('./connection.js');
const express = require('express');
const app = express();

const port = 3400;

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});

client.connect();


app.get('/', (req, res) => {
    res.send('Ласкаво просимо на головну сторінку!');
});


app.get('/user', (req, res) => {
    client.query('SELECT salary, name, country,profession,locations FROM salaries', (error, results) => {
        if (!error) {
            console.log('Результати запиту:', results.rows);


            const salaries = results.rows.map(row => row.salary).join(', ');
            const names = results.rows.map(row => row.name).join(', ');
            const countries = results.rows.map(row => row.country).join(', ');
            const profession = results.rows.map(row => row.profession).join(', ');
            const locations = results.rows.map(row => row.locations).join(', ');

            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Information about 2024 year</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 20px;
                            padding: 20px;
                            background-color:rgb(0, 0, 0);
                        }
                        h1 {
                            color: #333;
                            font-size:35;
        margin-left:100px;
        text-transform:uppercase;



                        }
                        p {
                            font-size: 26px;
                            color: white;
                            border:red 1px solid
                        }
                    </style>
                </head>
                <body>
                    <h1>Information about 2024 year</h1>
                    <p><strong>Salaries ofWorkMan:</strong> ${salaries}</p>
                    <p><strong>Names of workers:</strong> ${names}</p>
                    <p><strong>Countries of WorkMan:</strong> ${countries}</p>
                   <p><strong>Profession of WorkMan:</strong> ${profession}</p>
                    <p><strong>Locations of WorkMan:</strong> ${locations}</p>
                </body>
                </html>
            `);
        } else {
            console.error('Помилка при виконанні запиту', error.stack);
            res.status(500).send('Внутрішня помилка сервера');
        }
    });
});
