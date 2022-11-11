let fs = require("fs/promises");

const writeAndRead = async (path, obj) => {
  let stringifiedObj = JSON.stringify(obj, null, 2);
  try {
    await fs.writeFile(path, stringifiedObj);
    await console.log(
      `The object : ${obj} was successfully written in ${path}`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { writeAndRead };
