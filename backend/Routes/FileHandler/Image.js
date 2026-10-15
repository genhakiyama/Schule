const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const Errors = require('../../UTIL/Errors');

const Storage = multer.diskStorage({
    destination : (req , res , cb) =>{
        cb(null , path.join(__dirname , '../../File/Uploads'));
    } , 
    filename : (req , file , cb) => {
        const ext = path.extname(file.originalname).toLocaleLowerCase();
        cb(null , crypto.randomUUID() + ext);
    }
});

const upload = multer({
    storage : Storage , 

    fileFilter : (req , file , cb) => {
        const allowedTypes = [
            'image/png' , 
            'image/jpeg' , 
            'image/webp'
        ];

        if (allowedTypes.includes(file.mimetype)) {
            return cb(null , true);
        }

        cb(new Error('Unverified file type'));
    } 
});

router.post('/upload' , upload.single('image') , (req , res , next) => {
    if (!req.file) {
        return res.status(Errors.UNAUTHORIZED).json({
            message : Errors.UNAUTHORIZED.message
        });
    }

    res.json({
        message : 'Upload successuflly' , 
        imageURL : `/File/Uploads/${req.file.filename}`
    });
});

module.exports = router;