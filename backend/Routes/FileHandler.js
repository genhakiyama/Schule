const express = require('express');
const router = express.Router();

const ImageRoute = require('./FileHandler/Image');

router.use('/image' , ImageRoute);

module.exports = router;