let readline = require("readline");
let fs = require("fs");
let readAndWrite = require("../../reto2/asyncAwait/index");

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

const newObjMaker = async (fileName) => {
  let newObj = {};
  try {
    newObj.name = await pregunta("What's your name?\n");
    newObj.surname = await pregunta("What's your surname?\n");
    newObj.age = await pregunta("What's your age?\n");
    await readAndWrite.readAndWrite(newObj, fileName);
  } catch (err) {
    console.log(err);
  }
};
newObjMaker("Mi_objeto");
