const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    console.log("server started");
    //const tx = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(tx);
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
