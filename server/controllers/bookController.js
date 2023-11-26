const express = require('express');
const router = express.Router();

const fs = require('fs');

require('../db/conn');

const Book = require('../model/book');


//===================  CREATE BOOK  =========================//

async function createBook(req, res) {

    const { ISBN, title, author, edition, category_id, price, publisher, img_path } = req.body;
    
    if (!ISBN || !title || !author || !edition || !category_id || !price || !publisher || !img_path) {
        return res.status(422).json({ error: "Fill all fields" });
    }

    try {
        const bookExist = await Book.findOne({ ISBN: ISBN });
        if (bookExist) {
            return res.status(422).json({ error: "Book with this ISBN already exists" });
        }

        const book = new Book({ ISBN, title, author, edition, category_id, price, publisher, img_path });
        

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
}

//===================  GET BOOK  =========================//

async function getBooks(req, res) {

    try {
        const books = await Book.find({});
        res.status(200).json({ status: 'Ok', data: books });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to fetch books' });
    }

}


module.exports = {
    createBook,
    getBooks,
};

