const express = require('express');
const postroom = require('../../controller/RoomController/postroom');
const getAllroom = require('../../controller/RoomController/roomlist');
const Searchroom = require('../../controller/RoomController/searchroom');
const singleroom = require('../../controller/RoomController/singleroom');
const updateroom = require('../../controller/RoomController/updateroom');

const router = express.Router();

router.post('/postroom', postroom);
router.get('/roomlist', getAllroom);
router.get('/roomlist/:id', singleroom)
router.get('/searchroom/:key', Searchroom);
router.put('/update',updateroom);


module.exports = router;