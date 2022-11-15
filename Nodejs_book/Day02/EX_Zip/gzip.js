const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./Sample/readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./Sample/readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
