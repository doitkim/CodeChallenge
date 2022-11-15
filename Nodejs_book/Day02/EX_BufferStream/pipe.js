const fs = require("fs");

const readStream = fs.createReadStream("./Sample/readme4.txt");
const writeStream = fs.createWriteStream("./Sample/writeme3.txt");
readStream.pipe(writeStream);
