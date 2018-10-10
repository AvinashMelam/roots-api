const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notices = new Schema({
    createdAt:{
        type:Date,
        default:Date.now()
    },
    Category:String,
    isAdmin:Boolean,
    description: String,
})

module.exports = mongoose.model('notices',notices);