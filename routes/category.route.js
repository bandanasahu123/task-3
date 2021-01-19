const express = require('express')
const router = express.Router()
const _ = require('lodash')
const responseMessage = require('../helpers/responseHandler')
const { getCategories } = require('../controllers/category.controller')

router.get('/get-all-categories', allCategory)

/**
 *
 * @param {*} req null
 * @param {*} res res
 */
async function allCategory (req, res) {
  return getCategories()
    .then(catData => {
      let allData = responseMessage.successResponse(
        catData,
        200,
        'All the category details.'
      )
      return res.json(allData)
    })
    .catch(error => {
      return res.json(
        responseMessage.errorResponse(error.data, error.code, error.message)
      )
    })
}

module.exports = router
