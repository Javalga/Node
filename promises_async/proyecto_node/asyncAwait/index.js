//imports
let { readConsole } = require("./readConsole");
let { writeAndRead } = require("./writeAndReadObject");

//invoke
readConsole((obj) => {
  writeAndRead("./mi_objeto.json", obj);
});
