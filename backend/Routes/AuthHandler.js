const Auth = require('../Controller/Auth');
const express = require('express');

const router = express.Router();

router.post('/signup' , Auth.Signup);
router.get('/verify-Email' , Auth.VerifyEmail);
router.post('/Login' , Auth.LogIn);

module.exports = router;