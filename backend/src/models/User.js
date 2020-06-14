<<<<<<< HEAD
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
=======
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
>>>>>>> d0d6bf2d0993186d06507d2f8b9355e4ddb85a91
});

module.exports = mongoose.model("User", UserSchema);
