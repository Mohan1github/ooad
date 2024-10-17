const mongoose = require("mongoose");

const User = new mongoose.Schema({
  // pname: {
  //   type: String,
  //   require: true,
  // },
  name:{
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmpassword:{
    type: String,
    require: true,
  }
  // address: {
  //   type: String,
  //   require: true,
  // },
  // number: {
  //   type: String,
  //   require: true,
  // },
  // license: {
  //   type: String,
  //   require: true,
  // },
  // verification: {
  //   type: Boolean,
  //   require: false,
  // },
});
const UserModel = mongoose.model("users", User);
module.exports = UserModel;

