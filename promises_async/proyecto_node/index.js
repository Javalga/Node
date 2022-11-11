//imports
let readConsole = require("./readConsole");
let writeAndRead = require("./writeAndReadObject");

//invoke

let myObj = {
  name: "javi",
  surname: "garcia",
  age: 39,
};

readConsole.readConsole(console.log, myObj);
writeAndRead.writeAndRead("./miObj.json", myObj);
