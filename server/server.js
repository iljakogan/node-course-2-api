var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app=express();
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
   console.log(req.body) ;
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
module.exports.app = app;