var path = require("path");
var models = require(path.join(__dirname, "../models/models"));
var Model = models.Model;

var mainroutes = {};

// new user
var home = function(req, res) {
  res.render("home");
};
mainroutes.new = home;

var mongoosequery = function(req, res) {
  User.find({
      username: in_name
    })
    .count(1)
    .exec(function(err, user) {
      //make new user
      var newUser = new User({
        username: in_name
      });
      newUser.save(function(err, newuser) {
        if (err) {
          res.status(500).send('Error creating new user');
        } else {
          req.session.user = in_name;
          res.redirect('/');
        }
      });
    });
};
mainroutes.dblookup = mongoosequery;

module.exports = mainroutes;
