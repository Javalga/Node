const fs = require("fs/promises");

let newObj = {
  name: "Javi",
  surname: "Alonso",
  edad: 22,
};

const readAndWrite = async (currentItem, fileName) => {
  let stringifiedObj = JSON.stringify(currentItem, null, 2);
  try {
    await fs.writeFile(`./${fileName}.json`, stringifiedObj);
    const data = await fs.readFile(`./${fileName}.json`, "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { readAndWrite };
