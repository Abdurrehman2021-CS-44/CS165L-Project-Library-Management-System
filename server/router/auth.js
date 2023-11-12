const express = require('express');
const router = express.Router();

require('../db/connection');
const Book = require('../model/book');
const Category = require('../model/category');

router.get('/', (req, res) => {
    res.send('AyBook store, a heaven for Book Readers routerr');
});


//======================= With Promises ========================//

// router.post('/about', (req, res) => {

//     const { ISBN, title, author, edition, category_id, price, publisher } = req.body;

//     if (!ISBN || !title || !author || !edition || !category_id || !price || !publisher) {
//         return res.status(422).json({ error: "Fill all fields" });
//     }

//     Book.findOne({ ISBN: ISBN })
//         .then((bookExist) => {
//             if (bookExist) {
//                 return res.status(422).json({ error: "Book with this ISBN already exists" });
//             }

//             const book = new Book({ ISBN, title, author, edition, category_id, price, publisher });

//             book.save().then(() => {
//                 res.status(201).json({ message: 'Book added successfully' });
//             }).catch((err) => res.status(500).json({ error: err }));

//         }).catch((err) => { console.log(err); });

// });

//======================= With Async Await ========================//

router.post('/about', async (req, res) => {

    const { ISBN, title, author, edition, category_id, price, publisher } = req.body;

    if (!ISBN || !title || !author || !edition || !category_id || !price || !publisher) {
        return res.status(422).json({ error: "Fill all fields" });
    }

    try {
        const bookExist = await Book.findOne({ ISBN: ISBN });
        if (bookExist) {
            return res.status(422).json({ error: "Book with this ISBN already exists" });
        }

        const book = new Book({ ISBN, title, author, edition, category_id, price, publisher });
        // const bookAdd = await book.save();
        if (await book.save()) {
            res.status(201).json({ message: 'Book added successfully' });
        }
        else {
            // else na bhi use kro, okay hai, cause error catch() me chla jaye ga
            res.status(500).json({ error: err });
        }

    } catch (err) {
        console.log(err);
    }

});

//======================= Category With Promises ========================//

// router.post('/about', (req, res) => {

//     const { name } = req.body;

//     if (!name) {
//         return res.status(422).json({ error: "Fill all fields" });
//     }

//     Category.findOne({ name: name })
//         .then((categoryExist) => {
//             if (categoryExist) {
//                 return res.status(422).json({ error: "Category with this name already exists" });
//             }

//             const category = new Category({ name });

//             category.save().then(() => {
//                 res.status(201).json({ message: 'category added successfully' });
//             }).catch((err) => res.status(500).json({ error: err }));

//         }).catch((err) => { console.log(err); });

// });

module.exports = router;
