const fs = require("node:fs");

module.exports = {
  lsFunc(done) {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        done("Something went wrong!");
      } else {
        done(files.join("\n"));
      }
    });
  },
};
