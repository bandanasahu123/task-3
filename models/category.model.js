const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
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

module.exports = mongoose.model('Category', CategorySchema)
