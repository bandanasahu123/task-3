const mongoose = require('mongoose')

// connect to mongo db
const mongoUrl = 'mongodb://localhost:27017/appiness-test-application'
mongoose
  .connect(
    mongoUrl,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    }
  )
  .then(() => console.log('-- MongoDB Connected!! --'))
  .catch(err => {
    console.log(err)
    throw new Error(`unable to connect to database: ${mongoUrl}`)
  })


