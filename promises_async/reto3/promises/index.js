let readline = require("readline");
let fs = require("fs");
let readAndWrite = require("../../reto2/promises/index");
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

const newObjMaker = (fileName) => {
  let newObj = {};
  pregunta("What's your name\n")
    .then((res) => {
      newObj.name = res;
      return pregunta("What's your surname\n");
    })
    .then((res) => {
      newObj.surname = res;
      return pregunta("What's your age?\n");
    })
    .then((res) => {
      newObj.age = res;
      readAndWrite.readAndWrite(newObj, fileName);
    })
    .catch((err) => console.log(err));
};

newObjMaker("Mi_objeto");
