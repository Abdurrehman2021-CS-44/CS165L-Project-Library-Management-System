const express = require('express');
const router = express.Router();

require('../db/conn');

const Customer = require('../model/customer');



//===================  CREATE CUSTOMER  =========================//

async function createCustomer(req, res) {

    const { name, CNIC, address, debit_card, mm_yy, cvc, phone } = req.body;

    if (!name || !CNIC || !address || !debit_card || !mm_yy || !cvc || !phone ) {
        return res.status(422).json({ error: "Fill all fields" });
    }

    // const errors = validate();
    // if(errors)
    // {
    //     return res.json(errors);
    // }

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

};


//===================  GET CUSTOMER  =========================//

async function getCustomer(req, res) {

    try {
        const customers = await Customer.find({});
        res.status(200).json({ status: 'Ok', data: customers });

    } catch (err) {
        res.status(500).json({ status: 'Error', message: 'Failed to fetch customers' });
    }

}



module.exports = {
    createCustomer,
    getCustomer,
};


