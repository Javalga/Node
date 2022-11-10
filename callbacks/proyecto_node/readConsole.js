let fs = require("fs");
let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

const readConsole = (callback, object) => {
  let newObj = {};
  if (object) {
    callback(object);
  } else {
    let promptName = rl.question("What's your name?\n", (res) => {
      newObj.name = res;
      let promptSurname = rl.question("What's your surname?\n", (res) => {
        newObj.surname = res;
        let promptAge = rl.question("What's your age?\n", (res) => {
          newObj.age = res;
          callback(newObj);
          rl.close();
        });
      });
    });
  }
};

module.exports = { readConsole };
