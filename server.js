/*
import express from 'express';
import path from 'path'
import {fileURLToPath} from 'url'
import { TwitRouter } from './src/twit/twit.controller.js';  

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

app.set('views', path.join(__dirname, '/src/twit/views'));
app.set('view engine', 'ejs');

async function main() {
    app.use(express.json());
    app.use('/api/twits', TwitRouter);  

    app.get('/profile', (req, res) => {
        res.render('profile', {
            user: {
                name: 'Artem',
                age: 13,
                country: 'Ukraine',
                school: 'Sofijvsko-Borshagivski-Lyceum',
                family:'Mom:Armine, Dad:Oleg, Brother:Misha',
                proffesion:'IT - TECHNOLOGY',
                phone:'Phone number: +380 97 490 17 74 ',
                adress:'Zavodska 11',
                tg:'Telegram: @wrsmuzi1',
ModelPhone:'IPhone 8',
ModelNote: 'DELL'
            }
        });
    });

    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not Found' });
    });

    const port = 3552;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}/profile`);
    });
}

main();

*/

























const express = require('express');
const path = require('path');
const twitRouter = require('./twit.router');  // Роутер з папки src

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Віддаємо HTML-сторінку
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'public', 'index.html')); 
});
app.use(express.urlencoded({ extended: true }));

app.use('/twits', twitRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



/*const express = require('express');
const path = require('path');
const twitRouter = require('./twit.router');  // Роутер з папки src

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Віддаємо HTML-сторінку
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'public', 'index.html')); 
});
app.use(express.urlencoded({ extended: true }));

app.use('/twits', twitRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); */


































