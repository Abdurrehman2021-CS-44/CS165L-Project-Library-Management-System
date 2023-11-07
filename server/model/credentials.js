const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentials = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId, ref: 'Customer',
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
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


const Credentials = mongoose.model('credentials', credentials);

module.exports = Credentials;
