var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");         // Import the model (burger.js) to use its database functions.



// ------------------------------------------------------------
// Create all routes and set up logic

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

//router.delete("/burgers/:id", function(req, res) {
//  var condition = "id = " + req.params.id;
//
//  burger.deleteOne(condition, function(result) {
//    if (result.affectedRows == 0) {
//      // If no rows were changed, then the ID must not exist, so 404
//      return res.status(404).end();
//    } else {
//      res.status(200).end();
//    }
//  });
//});

// Export routes for server.js to use.
module.exports = router;
