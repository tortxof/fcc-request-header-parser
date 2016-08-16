var express = require('express');
var app = express();

app.set('port', (process.env.port || 5000));

app.get('/api/whoami', function(req, res) {
  var ip = req.ip;
  var lang = req.get('Accept-Language').split(',')[0];
  var os = req.get('User-Agent').split('(')[1].split(')')[0];
  res.json({
    ipaddress: ip,
    language: lang,
    software: os
  });
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port', app.get('port'));
});
