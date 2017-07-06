var express = require('express');
var app = express();
var fs = require("fs");



app.get('/listPlayers', function (req, res) {
   fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
      var players = JSON.parse( data );
      var player = players["player" + req.params.id] 
      res.end( JSON.stringify(player));
   });
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});