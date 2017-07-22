var Alexa = require('alexa-sdk');
var httpClient = require('./httpClient');
var options = require('./options');
var successResponses = ['Ok!', 'Sure', 'Ugh', 'As you please master', 'Doodleedoo'];
var errorResponses = [];

var handlers = {
//TODO: handle errors (e.g. can't play next song)

    'LaunchRequest': function () {
      this.emit(':tell', 'Hello World!');
    },
    'PlayIntent': function () {
      var path = '/play';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    },
    'PauseIntent': function () {
      var path = '/pause';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    },
    'PlayNextIntent': function () {
      var path = '/next';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    },
    'PlayPreviousIntent': function () {
      var path = '/previous';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    },
    'VolumeUpIntent': function () {
      var volume = this.event.request.intent.slots.volumeIncrease.value;
      var path = '/volume';
      volume ? path += ('/+' + volume): path += '/+10';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    },
    'VolumeDownIntent': function () {
      var volume = this.event.request.intent.slots.volumeDecrease.value;
      var path = '/volume';
      volume ? path += ('/-' + volume): path += '/-10';
      var response = makeCall(path);
      this.emit(':tell', generateResponse(response));
    }

};

function makeCall(path) {
  var request = {
        host: options.host,
        port: options.port,
        path: path,
        headers: options.headers
    };
  return httpClient(request).then(
      response => response,
      error => error
  )
};

function generateResponse(response) {
  //TODO: check stats, on error provide errorResponse
  var index = Math.floor(Math.random() * successResponses.length);
  return successResponses[index];
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};