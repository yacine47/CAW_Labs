


var fs = require('fs');

const message = process.argv[2];

fs.appendFile('f.txt', message, function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 