const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    name: {
        type: String,
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


const Admin = mongoose.model('admin', admin);

module.exports = Admin;
