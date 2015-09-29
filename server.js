'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilioClient = require('./public/js/twilioClient.js');
var port = 9000;

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){console.log('listening on 9000')});


function sendMessage(to, message){
app.post('/send-text/:to', function(req, res){
  var to = req.params.to;
  var message = req.body.message;

  console.log(to, message);

  twilioClient.send(to, message, function(err, message){
    if(err) {
      console.log('twilio error')
        res.send(400);
    }  else {
      console.log('twilio success:' + message.sid)}
      res.send();
  })

})
};
