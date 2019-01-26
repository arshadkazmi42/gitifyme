const fs = require('fs');


const read = (path) => {
  
  return new Promise((resolve, reject) => {

    fs.readFile(path, 'utf8', function (err, content) {
      if (err) {
        reject(`${path} not found`);
      }

      resolve(content);
    });
  });
};


module.exports = read;
