var express = require("express"); 
var bodyParser = require("body-parser"); 
var path = require("path"); 

var app = express(); 
var PORT = 3000; 

//express app to handle data parsing 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

//any input data ==>

var reservation = [];
var waitlist = [];

//routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html")); 
});

app.post("api/new", function(req,res){
    var newReso = req.body;
    newReso.routeName = newReso.name.replace(/\s+/g, "").toLowerCase();
    reservation.push(newReso);
    res.json(newReso);
})

//start server to listen 

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT); 
});