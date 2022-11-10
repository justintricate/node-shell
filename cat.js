const cat = require("node:fs");

module.exports = {
  catFunc(fileNameInput, done) {
    cat.readFile(fileNameInput, "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        done(data);
      }
    });
  },
};
