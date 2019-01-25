#!/usr/bin/env node

const logSymbols = require('log-symbols');

const {
  config,
  read,
  write
} = require('./lib');


const configure = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await read(currentPath);

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
