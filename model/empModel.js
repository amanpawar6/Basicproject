const mongoose=require("mongoose");

const empSchema = new mongoose.Schema({
    "email": String,
    "password": String,
    "name": String,
    "phone_no": Number,
    "image" : String
});

const empModel = mongoose.model('emp', empSchema);

module.exports = empModel;