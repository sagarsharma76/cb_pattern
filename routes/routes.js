const cb = require('../cb/cb.js');

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/cb", function(req, res){
      cb.makeApiCall().then(function(result) {
        res.send(result)
    }, function(err) {
      console.log('In error case')
      res.send(err)
    })
  });
  }
  
  module.exports = appRouter;