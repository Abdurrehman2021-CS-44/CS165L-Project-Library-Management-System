const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
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


const Category = mongoose.model('category', category);

module.exports = Category;

