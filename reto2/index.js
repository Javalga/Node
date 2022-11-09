let fs = require("fs");

let myObj = {
  name: "Javi",
  surname: "Alonso",
  age: 22,
};

const writeFile = (currentItem, fileName) => {
  let stringifiedObj = JSON.stringify(currentItem, null, 2);
  console.log(stringifiedObj);
  fs.unlink(`./reto2/Json/${fileName}.json`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Previous file deleted");
    }
  });
  fs.writeFile(`./reto2/Json/${fileName}.json`, stringifiedObj, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(`./reto2/Json/${fileName}.json`, "utf8"));
    }
  });
};

writeFile(myObj, "myObj");
