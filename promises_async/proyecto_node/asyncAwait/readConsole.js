let fs = require("fs/promises");
let readline = require("readline");

function pregunta(pregunta) {
  const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
  return question;
}

const readConsole = async (callback) => {
  let newObj = {};
  try {
    newObj.name = await pregunta("What's your name?\n");
    newObj.surname = await pregunta("What's your surname?\n");
    newObj.age = await pregunta("What's your age?");
    callback(newObj);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { readConsole };
