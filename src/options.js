var username = getDefault('AUTH_USERNAME', 'basic_auth_username');
var password = getDefault('AUTH_PASSWORD', 'basic_auth_password');

var options = {
  appid: getDefault('APPID', 'appIdhere'),
  host: getDefault('HOST', 'hosthere'),
  port: getDefault('PORT', '5005'),
  headers: {
      //'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/json'
  },
  defaultRoom: '/LivingRoom'
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