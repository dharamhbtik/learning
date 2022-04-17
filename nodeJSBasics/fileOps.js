const { readFile } = require("fs");
//"./content/first.txt"
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const path1 = "./content/first.txt";
const path2 = "./content/second.txt";
getText(path1)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText(path1);
    const second = await getText(path2);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
