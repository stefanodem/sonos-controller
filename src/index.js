var Alexa = require('alexa-sdk');
var httpClient = require('./httpClient');
var options = require('./options');
var successResponses = ['Ok!', 'Sure', 'Sure can do', 'As you please, master'];
var errorResponses = [];

var handlers = {

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
    'VolumeIntent': function () {
      //insert intent.slots to get volume as argument
      var path = '/volume' + '/+10';
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
      response => generateResponse(response),
      error => generateResponse(error)
  )
};

function generateResponse(response) {
  //TODO: check stats, on error provide errorResponse
  var index = Math.floor(Math.random() * successResponses.length);
  return successResponses[index];
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};