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
      //construct uri component --> encodeURIComponent(room)
      var url = options.baseUrl + '/resumeall';
      //makeCall
      var response = makeCall(url);
      //pass in response json to generateResponse(response)
      this.emit(':tell', generateResponse());
    }

};

function makeCall(path) {
  var url = path;
  var request = options;
  return httpClient(request).then(
      response => this.emit(':tell', generateResponse(response)),
      error => this.emit(':tell', generateResponse(error))
  )
};

function generateResponse(response) {
  //TODO: check stats, on error provide errorResponse
  var index = Math.floor(Math.random() * successResponses.length;
  return successResponses[index];
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};