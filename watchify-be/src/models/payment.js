const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  method: { type: String, enum: ["stripe"] },
  amount: {type: Number},
  currency: { type: String, default: "USD" },
  status: { type: String, enum: ["initiated", "success", "failed"], default: "initiated" },
  transactionId: {type: String, require: true},
}, { timestamps: true });


module.exports = mongoose.model('Payment', PaymentSchema);