const express = require('express');
const bookinglist = require('../../controller/BookingController/bookinglist');
const Booknotify = require('../../controller/BookingController/booknotify');
const CancelBooking = require('../../controller/BookingController/cancelbooking');
const Cancelnotify = require('../../controller/BookingController/cancelnotify');
const Cancelnotifyowner = require('../../controller/BookingController/cancelownernotify');
const postbooking = require('../../controller/BookingController/postbooking');
const Sellernotify = require('../../controller/BookingController/sellernotify');
const Siglebook = require('../../controller/BookingController/singlebooking');
const singleupdate = require('../../controller/BookingController/Singleupdate');
const updatebooking = require('../../controller/BookingController/updatebooking');
const userbook = require('../../controller/BookingController/userbooking');
const bookupdateback = require('../../controller/BookingController/bookupdatebyback');
const Repay_ownernotify = require('../../controller/BookingController/Repay_ownernotify');
const Repay_usernotify = require('../../controller/BookingController/Repay_usernotify');
const Complain = require('../../controller/BookingController/Complain');
const Contact = require('../../controller/BookingController/Contact');
const Datebooknotify = require('../../controller/BookingController/Datebooknotify');

const router = express.Router();

router.get('/bookinglist', bookinglist);
router.get('/bookinglist/:id', Siglebook);
router.post('/postbooking', postbooking);
router.get('/userbookinglist/:id', userbook);
router.put('/updatebooking', updatebooking);
router.get('/cancelbooking/:id', CancelBooking);
router.put('/updatebooking/update', singleupdate);
router.post('/book/notify', Booknotify);
router.post('/book/sellnotify', Sellernotify)
router.post('/book/cancel', Cancelnotify)
router.post('/book/cancelowner', Cancelnotifyowner)
router.get('/allbook/notify', bookupdateback)
router.post('/repayowner', Repay_ownernotify);
router.post('/repayuser', Repay_usernotify);
router.post('/complain', Complain);
router.post('/contact', Contact);
router.post('/datenotify',Datebooknotify);

module.exports = router;