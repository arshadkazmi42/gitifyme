const fs = require('fs');


const write = (path, content) => {
  
  return new Promise((resolve, reject) => {

    fs.writeFile(path, content, 'utf8', function (err) {
      if (err) {
        console.log(err);
        reject('Unable to flip remote');
      }

      resolve(true);
    });
  });
};

module.exports = write;
