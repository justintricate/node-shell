const { cwd } = require("node:process");

module.exports = {
  pwdFunc() {
    process.stdout.write(`current directory: ${cwd()}`);
  },
};
