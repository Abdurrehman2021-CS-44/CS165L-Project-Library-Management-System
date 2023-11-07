const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    ISBN: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    edition: {
        type: Number,
        min: 0,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId, ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);


const Book = mongoose.model('book', book);

module.exports = Book;

