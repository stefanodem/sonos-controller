var http = require('http');
var axios = require('axios');

var httpClient = function(options) {
  return new Promise((resolve, reject) => {
    console.log('promise')
    http.get(options, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to retrievce data, status code: ' + response.statusCode));
      }
      const body = [];

      response.on('data', chunk => body.push(chunk));

      response.on('end', () => resolve(body.join('')));
    }).on('error', err => reject(err))
  })
};

module.exports = httpClient;