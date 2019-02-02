//include path package to get correct file path for our html
var path = require("path");

//ROUTING

module.exports = function(app) {

    //HTML GET Requests

    //route to take user to the landing carousel
    app.get("/landing", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/landing.html"));
    });

    //route to take user to contact request form
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/contact.html"));
    });

    //route to take user to gallery
    app.get("/gallery", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/gallery.html"));
    });

    //route to take user to survey guaging their interest in purchasing art
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //catch all route to return to home if nothing else matches
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/landing.html"));
    });

};