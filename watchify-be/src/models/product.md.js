const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    default: null
  },
  barcode: {
    type: String, 
    default: null
  },
  caseColor: {
    type: String,
    required: true,
  },
 braceletMaterial: {
    type: String,
    required: true,
  },
 price: {
    type: String,
    required: true,
  },
 description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
