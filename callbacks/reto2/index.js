let fs = require("fs");

let myObj = {
  name: "Javi",
  surname: "Alonso",
  age: 22,
};

const readAndWrite = (currentItem, fileName) => {
  let stringifiedObj = JSON.stringify(currentItem, null, 2);
  fs.writeFile(`./reto2/Json/${fileName}.json`, stringifiedObj, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:\n");
      console.log(fs.readFileSync(`./reto2/Json/${fileName}.json`, "utf8"));
    }
  });
};

readAndWrite(myObj, "myObj");
