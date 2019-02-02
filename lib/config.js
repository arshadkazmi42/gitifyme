const fs = require('fs');
const makeDir = require('make-dir');

const readInput = require('./input');

const CONSTANTS = require('./constants');


const get = async () => {
  
  try {

    const gitifyConfigData = await fs.readFileSync(`${CONSTANTS.gitifyConfig}config`)

    // If gitifyme config is empty, throw error and take input
    if (!gitifyConfigData || gitifyConfigData.length === 0) {
      throw 'Name and email not configured';
    }

    return gitifyConfigData;

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
  await fs.writeFileSync(`${path}/config`, configData);

  return configData;
}

const formatData = (name, email) => {

  return `[user]\n\tname = ${name}\n\temail = ${email}`
}


module.exports = {
  get
};
