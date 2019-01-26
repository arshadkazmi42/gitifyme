const readline = require('readline')


const readInput = async () => {

  let name = await readQuestion('Name: ');
  let email = await readQuestion('Email: ');

  return {
    name,
    email
  };
}

const readQuestion = (question) => {

  return new Promise((resolve, reject) => {

    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    prompt.question(question, (input) => {
      prompt.close();
      resolve(input);
    });
  });
}


module.exports = readInput;