const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      price: Number, 
      quantity: Number,
      subtotal: Number
    }
  ],
  totalAmount: {type: Number},
  status: { 
    type: String, 
    enum: ["pending", "paid", "shipped", "delivered", "cancelled"], 
    default: "pending" 
  },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
