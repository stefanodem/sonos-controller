var options = {
  appid: getDefault('APPID', 'yourappidhere'),
  host: getDefault('HOST', 'yourhosthere'),
  port: getDefault('PORT', '5005'),
  headers: {
      'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/json'
  },
  defaultRoom: getDefault('DEFAULT_ROOM', '')
};

module.exports = options;