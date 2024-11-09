// exo4.js
const fs = require('fs');

const filename = process.argv[2];
const text = process.argv[3];

fs.writeFile(filename, text, (err) => {
  if (err) {
    console.error("An error occurred while saving the file.");
    return;
  }
  console.log("The file has been saved!");
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error("An error occurred while reading the file.");
      return;
    }
    console.log(data);
  });
});
