var express = require('express');
var path = require('path');
var multer = require('multer');
const fs = require('fs');
var empModel = require('../model/empModel');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir('./uploads/', (err) => {
            cb(null, './uploads/');
        });
    },
    filename: (req, file, cb) => {
        filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, filename);
    }
});

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images Only!'));
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');


const imageUpload = (req, res, next) => {
    var userid = req.body.id;
    var userImage = req.file.path;
    console.log(">>>>>>", userid, req.file.path);
    empModel.findByIdAndUpdate(userid, {
        $set: {
            "image" : userImage
        }
    }, (err) => {
        if (err) {
            return res.status(500).send({
                message: err
            });
        }
        return res.status(200).send(`user updated on id:`);
    })
}

module.exports = {
    upload,
    imageUpload,
};