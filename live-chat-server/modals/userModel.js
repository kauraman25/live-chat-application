const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name : {
        type : String,
        requried : true,
    },
    email : {
        type: String,
        requried : true,
    },
    password : {
        type : String,
        requried : true,
    },
},{
    timeStamp : true,
});

const User = mongoose.Model("User", userModel);
module.exports = User;