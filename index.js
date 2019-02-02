#!/usr/bin/env node

const logSymbols = require('log-symbols');
const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');


const {
  config,
  constants  
} = require('./lib');


const configure = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await readConf(`${currentPath}`);

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
    await writeConf(`${currentPath}`, configContent);

    console.log(logSymbols.success, 'Gitifyed you!!!');
    return;

  } catch (err) {
    console.log(logSymbols.error, err);
  }
}


// Triggering flip with current path
configure(process.cwd());
