const fs = require("fs/promises");

let newObj = {
  name: "Javi",
  surname: "Alonso",
  edad: 22,
};

const readAndWrite = (currentItem, fileName) => {
  let stringifiedObj = JSON.stringify(currentItem, null, 2);
  fs.writeFile(`./${fileName}.json`, stringifiedObj)
    .then(() => {
      fs.readFile(`./${fileName}.json`, "utf8")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = { readAndWrite };
