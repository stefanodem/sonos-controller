var Alexa = require('alexa-sdk');
var httpClient = require('./httpClient');
var successResponses = ['Ok!', 'Sure', 'Sure can do', 'As you please, master'];
var errorResponses = [];

var handlers = {

    'LaunchRequest': function () {
        this.emit(':tell', 'Hello World!');
    },
    'PlayIntent': function () {
      //construct uri component --> encodeURIComponent(room)
      //makeCall

      this.emit(':tell', generateResponse());
    }

};

function makeCall(path) {
  var url = path;
  var request = options;
  return httpClient(request).then((data) => 'gagi', (error) => 'bisi');
};

function generateResponse() {
  //TODO: check stats, on error provide errorResponse
  var index = Math.floor(Math.random() * successResponses.length;
  return successResponses[index];
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};