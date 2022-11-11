let fs = require("fs/promises");

const writeAndRead = (path, obj) => {
  let stringifiedObj = JSON.stringify(obj, null, 2);
  fs.writeFile(path, stringifiedObj)
    .then(() => {
      console.log(`The object : ${obj} was successfully written in ${path}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { writeAndRead };
