var username = getDefault('AUTH_USERNAME', 'basic_auth_username');
var password = getDefault('AUTH_PASSWORD', 'basic_auth_password');

var auth = new Buffer(username + ":" + password).toString("base64");

var options = {
  appid: getDefault('APPID', 'yourappidhere'),
  host: getDefault('HOST', 'yourhosthere'),
  port: getDefault('PORT', '5005'),
  headers: {
      'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/json'
  },
  defaultRoom: '/Living Room',
  baseUrl: 'http://localhost:5005/Living Room'
};

module.exports = options;

function getDefault(key, defaultVal) {
  if (typeof(process.env[key]) == 'undefined') {
    return defaultVal;
  }
  else {
    return process.env[key];
  }
}