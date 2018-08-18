var express = require("express"); 
var bodyParser = require("body-parser"); 
var path = require("path"); 

var app = express(); 
var PORT = 3000; 

//express app to handle data parsing 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

//any input data ==>

//routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html")); 
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})

//start server to listen 

app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT); 
});