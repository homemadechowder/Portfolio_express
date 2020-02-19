var db = require("../models");

module.exports = function(app) {

    app.get("/api/contacts/", function(req,res){
        db.Contacts.findAll({}).then(function(results){
            res.json(results);
        })
    })

    app.post("/api/contacts", function(req,res){
        db.Contacts.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }).then(function(results){
            res.json(results);
        })
    })

}