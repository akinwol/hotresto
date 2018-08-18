var express = require("express"); 
var bodyParser = require("body-parser"); 
var path = require("path"); 

var app = express(); 
var PORT = 3000; 

//express app to handle data parsing 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

//any input data ==>

var reservations = [];
var waitlist = [];

//routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html")); 
});


app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/reservations", function(req,res){

    return res.json(reservations)
});


app.get("/api/waitlist", function(req,res){
    return res.json(waitlist)
});


app.post("/api/new", function(req,res){
    var newReso = req.body;
    reservations.push(newReso);
    res.json(newReso);
});

//start server to listen 

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT); 
});