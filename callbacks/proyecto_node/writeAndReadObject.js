let fs = require("fs");
let readline = require("readline");

const writeAndRead = (path, obj) => {
  let stringifiedObj = JSON.stringify(obj, null, 2);
  fs.writeFile(path, stringifiedObj, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`The object : ${obj} was successfully written in ${path}`);
    }
  });
};

module.exports = { writeAndRead };
