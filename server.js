/*============================================================
#title            : La Tour d'Argent
#description      : JS for server node 
#author           : DUPRE ANTHONY
#date             : 2017/05/22
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    ejs = require('ejs');

var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'tourdargent_db',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

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

//home HTML
app.get('/home', function (req, res) {
    res.render('pages/home');
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

//BAKER HTML 
app.get('/boulangerie', function (req, res) {
    res.render('pages/boulangerie');
});

//CELLAR HTML 
app.get('/cave', function (req, res) {
    res.render('pages/cave');
});

//ROTISSERIE HTML 
app.get('/rotisserie', function (req, res) {
    res.render('pages/rotisserie');
});

//BRANCH HTML 
app.get('/comptoir', function (req, res) {
    res.render('pages/comptoir');
});

//TOKYO HTML 
app.get('/tokyo', function (req, res) {
    res.render('pages/tokyo');
});

//CONTACT HTML 
app.get('/contact', function (req, res) {
    res.render('pages/contact');
});

//MENTIONS HTML 
app.get('/mentions_legales', function (req, res) {
    res.render('pages/mentions_legales');
});

//CREDITS HTML 
app.get('/credits', function (req, res) {
    res.render('pages/credits');
});


//POST BOOKINGS
app.post('/bookings', function (req, res) {

    var q = "INSERT INTO bookings (day, hour, lastname, firstname, mail, phone_number, country, cutlery) VALUES ('" + req.body.day + "', '" + req.body.hour + "', '" + req.body.lastname + "', '" + req.body.firstname + "', '" + req.body.mail + "', '" + req.body.phone_number + "',  '" + req.body.country + "', '" + req.body.cutlery + "');"

    var co = connection();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.render('pages/table');

    });

    co.end();
});

//POST PRIVATE_LOUNGE
app.post('/pivate_lounge', function (req, res) {

    var q = "INSERT INTO pivate_lounge (civility, lastname, firstname, compagny, address, city, postal_code, country, private_pro, mail, phone_number, day, service, cutlery, message, newletters) VALUES ('" + req.body.civility + "', '" + req.body.lastname + "', '" + req.body.firstname + "', '" + req.body.compagny + "', '" + req.body.address + "', '" + req.body.city + "',  '" + req.body.postal_code + "', '" + req.body.country + "', '" + req.body.private_pro + "', '" + req.body.mail + "', '" + req.body.phone_number + "', '" + req.body.day + "', '" + req.body.service + "', '" + req.body.cutlery + "', '" + req.body.message + "', '" + req.body.newletters + "');"

    var co = connection();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.render('pages/table');
    });

    co.end();
});

//POST INVITATION
app.post('/invitation', function (req, res) {

    var q = "INSERT INTO invitation (civility_guest, lastname_guest, firstname_guest, address_guest, city_guest, postal_code_guest, country_guest, mail_guest, phone_number_guest, compagny_guest, civility_host, lastname_host, firstname_host, address_host, city_host, postal_code_host, country_host, mail_host, phone_number_host, compagny_host, message_host) VALUES ('" + req.body.civility_guest + "', '" + req.body.lastname_guest + "', '" + req.body.firstname_guest + "', '" + req.body.address_guest + "', '" + req.body.city_guest + "',  '" + req.body.postal_code_guest + "', '" + req.body.country_guest + "', '" + req.body.mail_guest + "', '" + req.body.phone_number_guest + "', '" + req.body.compagny_guest + "', '" + req.body.civility_host + "', '" + req.body.lastname_host + "', '" + req.body.firstname_host + "', '" + req.body.address_host + "', '" + req.body.city_host + "', '" + req.body.postal_code_host + "', '" + req.body.country_host + "', '" + req.body.mail_host + "', '" + req.body.phone_number_host + "', '" + req.body.compagny_host + "', '" + req.body.message_host + "');"

    var co = connection();
    co.query(q, function (error, results, fields) {
        if (error) return console.log(error);
        res.render('pages/table');
    });

    co.end();
});

server.listen(8080);
console.log('server listening on port 8080');
