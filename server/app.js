const express = require('express');
const app = express();

require('./db/connection');

// const Book = require('./model/book');
// const Category = require('./model/category');

// Middleware

const middleware = (req, res, next) => {
    console.log('I am Middleware');
    next();
}

// middleware();

app.get('/', (req, res) => {
    res.send('AyBook store, a heaven for Book Readers')
});

app.get('/about', middleware, (req, res) => {
    res.send('ABOUT AyBook store')
});

app.listen(3000, () => {
    console.log('Server is running at port 3000.')
});
