const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer = new Schema({
    name: {
        type: String,
        required: true,
    },
    CNIC: {
        type: String,
        unique: true,
        minLength: 13,
        maxLength: 13,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    debit_card: {
        type: Number,
        minLength: 16,
        maxLength: 16
    },
    phone: {
        type: String,
        minLength: 11,
        maxLength: 11,
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


const Customer = mongoose.model('customer', customer);

module.exports = Customer;

