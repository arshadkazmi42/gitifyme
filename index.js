#!/usr/bin/env node

const logSymbols = require('log-symbols');

const {
  config,
  constants,
  read,
  write
} = require('./lib');


const configure = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await read(currentPath);

    // Check if already gitified
    const userRegex = new RegExp(constants.user, 'i');
    if (userRegex.test(configContent)) {
      console.log(logSymbols.info, 'You are already gitified!!!');
      return;
    }

    // Getting user config from /usr/local/.gitifyme/config
    const userConfig = await config.get();
    configContent = configContent + userConfig

    // Writting updated config
    await write(currentPath, configContent);

  } catch (err) {
    console.log(logSymbols.error, err);
  }
}


// Triggering flip with current path
configure(process.cwd());
