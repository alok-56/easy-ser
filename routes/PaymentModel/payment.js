const express = require('express');
const Fetchrefund = require('../../controller/PaymentController/fetchrefund');
const order = require('../../controller/PaymentController/order');
const Refund = require('../../controller/PaymentController/refund');
const verifypayment = require('../../controller/PaymentController/verify');

const router = express.Router();

router.post('/orders', order);
router.post('/verify', verifypayment);
router.post('/refund', Refund);
router.post('/fetchrefund', Fetchrefund)

module.exports = router;