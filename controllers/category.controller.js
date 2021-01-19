let _ = require('lodash')
let Category = require('../models/category.model')
let Product = require('../models/product.model')

/**
 * Function to get the all category with their number of products.
 */
function getCategories () {
  return new Promise(function (resolve, reject) {
    return Category.aggregate([
      {"$lookup":{
        "from":"products",
        "localField":"_id",
        "foreignField":"categoryId",
        "as": "productDetails"
      }},
      {
        $project:{
          name:"$name",
          numOfProducts:{$size:"$productDetails"},
          products:"$productDetails"
      }
    }
    ])
     .then(docs => {
        if (docs == null) {
          return reject({
            code: 400,
            message: 'No emp data found!',
            data: ''
          })
        } else {
          return resolve(docs)
        }
      })
      .catch(err => {
        return reject({
          code: 400,
          message: 'Something went wrong!',
          data: err
        })
      })
  })
}

module.exports = {
  getCategories
}
