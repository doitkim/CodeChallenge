const fs = require("fs");

fs.writeFile("./Files/writeme.txt", "글이 입력됩니다", (err) => {
  if (err) {
    throw err;
  }
  fs.readFile("./Files/writeme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
