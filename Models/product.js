const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
        type: String, 
        required: true
    },
    id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
