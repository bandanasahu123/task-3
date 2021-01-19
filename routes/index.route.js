const express = require('express')
const router = express.Router() // eslint-disable-line new-cap
const categoryRoute = require('./category.route')

//defined routes
router.use('/', categoryRoute)

module.exports = router
