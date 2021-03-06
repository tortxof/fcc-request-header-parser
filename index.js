var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('trust proxy', true);

app.get('/', function(req, res) {
  res.redirect('/api/whoami');
});

app.get('/api/whoami', function(req, res) {
  var ip = req.ip;
  var lang = req.get('Accept-Language') || null;
  if (lang) {
    lang = lang.split(',')[0];
  }
  var os = req.get('User-Agent') || null;
  if (os && os.split('').indexOf('(') > -1 && os.split('').indexOf(')') > -1) {
    os = os.split('(')[1].split(')')[0];
  }
  res.json({
    ipaddress: ip,
    language: lang,
    software: os
  });
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port', app.get('port'));
});
