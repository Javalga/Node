//imports

let fs = require("fs");
let readline = require("readline");
let readConsole = require("./readConsole");
let writeAndRead = require("./writeAndReadObject");

//invoke
let myObj = {
  name: "manuel",
  surname: "matias",
  age: 40,
};
readConsole.readConsole(console.log, myObj);
writeAndRead.writeAndRead("./miObj.json", myObj);
