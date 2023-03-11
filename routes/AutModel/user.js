const express = require('express');
const Alluser = require('../../controller/AutController/alluser');
const emailcheck = require('../../controller/AutController/emailcheck');
const forget = require('../../controller/AutController/forget');
const login = require('../../controller/AutController/login');
const profile = require('../../controller/AutController/profile');
const singleuser = require('../../controller/AutController/singleuser');
const signup = require('../../controller/AutController/user');
const verification = require('../../controller/AutController/verification');


const router = express.Router();

router.post('/signup', signup);
router.post('/signin', login);
router.put('/forgot', forget);
router.put('/profile/:id',profile);
router.get('/alluser',Alluser);
router.get('/email/:email',emailcheck);
router.get('/singleuser/:id',singleuser);
router.post('/verification',verification)


module.exports = router;