const express = require('express');
const router = express.Router();

require('../db/conn');

const customerController = require('../controllers/customerController');

//===================  CREATE CUSTOMER  =========================//

router.post('/signup', customerController.createCustomer);

//===================  GET CUSTOMER  =========================//

router.get('/customer', customerController.getCustomer);



module.exports = router;

