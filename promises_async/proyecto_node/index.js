//imports
let readConsole = require("./readConsole");
let writeAndRead = require("./writeAndReadObject");

//invoke

let myObj = {
  name: "javi",
  surname: "garcia",
  age: 39,
};

readConsole.readConsole(console.log);
writeAndRead.writeAndRead("./miObj.json", myObj);
