const { cwd } = require("node:process");

module.exports = {
  pwdFunc(done) {
    done(`Current Directory: ${cwd()}`);
  },
};
