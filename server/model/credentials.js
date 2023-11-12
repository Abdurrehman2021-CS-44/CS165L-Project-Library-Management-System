const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialsSchema = new Schema({
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


const Credentials = mongoose.model('credentials', credentialsSchema);

module.exports = Credentials;
