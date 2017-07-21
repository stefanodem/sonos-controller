var http = require('http');

var httpClient = function(options) {
  return new Promise((resolve, reject) => {
    const request = http.get(options, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to retrievce data, status code: ' + response.statusCode));
      }
      const body = [];

      response.on('data', chunk => body.push(chunk));

      response.on('end', () => resolve(body.join('')));
    });

    request.on('error', err => reject(err))
  })
};

module.exports = httpClient;