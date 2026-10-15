const User = require('../../Models/User');
const Errors = require('../../UTIL/Errors');
const {
    param ,
    body
} = require('express-validator');

const UserRegister = [
    body('name' , 'username' , 'password' , 'role')
        .trim()
        .notEmpty()
        .withMessage('Required')
        .bail()
        .isLength({max : 255})
        .withMessage('Name is too long') , 
]

module.exports = {UserRegister};
