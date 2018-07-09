var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    throw(err);
  })
  .once('response', function(response){
    console.log('Started Downloading image...');
  })
  .on('response', function(response){
    console.log('HTTPS response code: '+ response.statusCode
      + "\nResponse message: " + response.statusMessage
      + "\nContent type: " + response.headers['content-type']);
  })
  .on('end', function(){
    console.log('Download complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
