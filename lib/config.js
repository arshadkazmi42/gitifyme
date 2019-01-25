const fs = require('fs');
const CONSTANTS = require('./constants');

const get = () => {
  
  return new Promise((resolve, reject) => {

    fs.readFile(`${CONSTANTS.gitifyConfig}`, 'utf8', function (err, content) {
      if (err) {
        console.log(err);
        reject(`${CONSTANTS.gitifyConfig} not found`);
      }

      resolve(content);
    });
  });
};


module.exports = {
  get
};
