let readline = require("readline");
let fs = require("fs");
let rl = readline.createInterface(process.stdin, process.stdout);

const newObjMaker = (fileName) => {
  let newObj = {};
  let promptName = rl.question("What's your name?\n", (res) => {
    newObj.name = res;
    let promptSurname = rl.question("Whats your surname?\n", (res) => {
      newObj.surname = res;
      let promptAge = rl.question("What's your age?\n", (res) => {
        newObj.age = res;
        rl.close();
        let stringifiedObj = JSON.stringify(newObj, null, 2);
        fs.writeFile(`${fileName}.json`, stringifiedObj, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(
              `The object ${stringifiedObj} was successfully written into ${fileName}.json but this code is a callback hell :)`
            );
          }
        });
      });
    });
  });
};

newObjMaker("newObj");
