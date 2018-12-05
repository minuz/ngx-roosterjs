var ncp = require('ncp');
var fs = require('fs');

var source = 'projects/ngx-roosterjs/src/assets';
var destination = 'dist/ngx-roosterjs/assets';

ncp(source, destination, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Assets files copied to lib!');
});
