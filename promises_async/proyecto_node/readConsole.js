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
const readConsole = (callback, object) => {
  if (object) {
    callback(object);
  } else {
    let newObj = {};
    pregunta("What's your name?\n")
      .then((res) => {
        newObj.name = res;
        return pregunta("What's your surname?\n");
      })
      .then((res) => {
        newObj.surname = res;
        return pregunta("What's your age?\n");
      })
      .then((res) => {
        newObj.age = res;
        callback(newObj);
      });
  }
};

module.exports = { readConsole };
