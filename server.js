/*============================================================
#title            : La Tour d'Argent
#description      : JS for server node 
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var ejs = require('ejs');

//folder static
app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));
app.use('/static/pictures', express.static(__dirname + '/public/pictures'));

app.set('view engine', 'ejs');

//INDEX HTML
app.get('/', function (req, res) {
    res.render('pages/index');
});

//LIEU HTML 
app.get('/lieu', function (req, res) {
    res.render('pages/lieu');
});

//CHEF HTML 
app.get('/chef', function (req, res) {
    res.render('pages/chef');
});

//CARTE HTML 
app.get('/carte', function (req, res) {
    res.render('pages/carte');
});

//TABLE HTML 
app.get('/table', function (req, res) {
    res.render('pages/table');
});

server.listen(1337);
console.log('server listening on port 1337');
