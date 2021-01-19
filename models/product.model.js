const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    categoryId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    createdAt: {
      type: String,
      default: Date.now
    },
    updatedAt: {
      type: String,
      default: Date.now
    },
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Product', ProductSchema)
