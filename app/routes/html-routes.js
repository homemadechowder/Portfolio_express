// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  //To Homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //To registration page
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  //To user interface to add movies
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    console.log(req.body.first_name);
    });
 
  app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname, "../public/contact.html"));
    console.log(req.body.first_name);  
  })

  
    


};

