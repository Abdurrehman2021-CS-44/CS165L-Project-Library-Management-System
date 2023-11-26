const express = require('express');
const router = express.Router();

require('../db/conn');

const Book = require('../model/book');
const Category = require('../model/category');
const Admin = require('../model/admin');
const Credentials = require('../model/credentials');
const Customer = require('../model/customer');
const Order = require('../model/order');
const OrderDetail = require('../model/order_detail');
const Review = require('../model/review');
const Stock = require('../model/stock');
const Transaction = require('../model/transaction');

router.get('/', (req, res) => {
    res.send('AyBook store, a heaven for Book Readers routerr');
});


//======================= With Promises ========================//

// router.post('/about', (req, res) => {

//     const { ISBN, title, author, edition, category_id, price, publisher , img_path} = req.body;

//     if (!ISBN || !title || !author || !edition || !category_id || !price || !publisher || 1img_path) {
//         return res.status(422).json({ error: "Fill all fields" });
//     }

//     Book.findOne({ ISBN: ISBN })
//         .then((bookExist) => {
//             if (bookExist) {
//                 return res.status(422).json({ error: "Book with this ISBN already exists" });
//             }

//             const book = new Book({ ISBN, title, author, edition, category_id, price, publisher, img_path});

//             book.save().then(() => {
//                 res.status(201).json({ message: 'Book added successfully' });
//             }).catch((err) => res.status(500).json({ error: err }));

//         }).catch((err) => { console.log(err); });

// });

//======================= With Async Await ========================//

// CUSTOMER

router.post('/signup', async (req, res) => {

    const { name, CNIC, address, debit_card, mm_yy, cvc, phone } = req.body;

    if (!name || !CNIC || !address || !debit_card || !mm_yy || !cvc || !phone) {
        return res.status(422).json({ error: "Fill all fields" });
    }

    try {
        const customerExist = await Customer.findOne({ CNIC: CNIC });
        if (customerExist) {
            return res.status(422).json({ error: "Customer with this CNIC already exists" });
        }

        const customer = new Customer({ name, CNIC, address, debit_card, mm_yy, cvc, phone });
        // const bookAdd = await book.save();
        if (await customer.save()) {
            res.status(201).json({ message: 'Customer added successfully' });
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
