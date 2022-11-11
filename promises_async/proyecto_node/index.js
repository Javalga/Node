//imports
let readConsole = require("./readConsole");
let writeAndRead = require("./writeAndReadObject");

//invoke
readConsole.readConsole((obj) => {
  writeAndRead.writeAndRead("./mi_objeto.json", obj);
});
