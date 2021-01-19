const app = require('./config/express')
require('./config/mongoose')

if (!module.parent) {
  app.listen(3030,() => {
    console.info(`server started on port 3030`);
  });
}

module.exports = app


