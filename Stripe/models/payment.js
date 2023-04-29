const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    accountLink: {
        type: String,
        required: true
    },
    paymentsReceived: [
        {
            type: String
        }
    ]
});
module.exports = mongoose.model('Payment', paymentSchema);