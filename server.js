var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//tables with data to populate some existing reservations

var tables = [
	{
		name: 'George',
		phonenumber: 9042658617,
		email: 'mymail@mail.com',
		uniqueId:454
	},
	{
		name: 'Kyle',
		phonenumber: 555555555,
		email: 'kyle@mail.com',
		uniqueId: 500
	},
	{
		name: 'Stone',
		phonenumber: 555555555,
		email: 'stone@mail.com',
		uniqueId: 500
	},
	{
		name: 'Jason',
		phonenumber: 555555555,
		email: 'jason@mail.com',
		uniqueId: 500
	},
	{
		name: 'Robert',
		phonenumber: 555555555,
		email: 'robert@mail.com',
		uniqueId: 500
	},
	{
		name: 'Charley',
		phonenumber: 555555555,
		email: 'chrarley@mail.com',
		uniqueId: 500
	},
	{
		name: 'Tina',
		phonenumber: 555555555,
		email: 'tina@mail.com',
		uniqueId: 500
	}
];

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
