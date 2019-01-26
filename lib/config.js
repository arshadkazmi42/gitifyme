const fs = require('fs');
const makeDir = require('make-dir');

const read = require('./read');
const readInput = require('./input');
const write = require('./write');

const CONSTANTS = require('./constants');


const get = async () => {
  
  try {

    return await read(`${CONSTANTS.gitifyConfig}config`)
  } catch (err) {

    // Config not found
    return await create();
  }
};

// Create new config
const create = async () => {

  const { name, email } = await readInput();
 
  const path = await makeDir(CONSTANTS.gitifyConfig);
  (fs.createWriteStream(`${path}/config`)).end();
  
  const configData = formatData(name, email);

  // Write config data to gitifyme conifg
  await write(`${path}/config`, configData);

  return configData;
}

const formatData = (name, email) => {

  return `[user]\n\tname = ${name}\n\temail = ${email}`
}


module.exports = {
  get
};
