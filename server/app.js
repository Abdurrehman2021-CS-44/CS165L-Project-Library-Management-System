const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb://127.0.0.1:27017/AyBooks';

mongoose.set("strictQuery", true);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(() => {
    console.log('Database connection successful.')
}).catch((err) => {
    console.log(`Database connection error: ${err}`)
});

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
