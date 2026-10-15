const Auth = require('../Controller/Auth');
const express = require('express');

const router = express.Router();

router.post('/signup' , Auth.Signup);

module.exports = router;