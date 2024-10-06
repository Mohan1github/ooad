const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cusname: {
    type: String,
    required: true,
    trim: true
  },
  med: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  quan: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  addr: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  num: {
    type: Number,
    required: true,
    default: 123
  }
});
const Orders = mongoose.model('Order', orderSchema);
module.exports = Orders;
