// const { cwd } = require("node:process");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd.pwdFunc(done);
  } else if (cmd === "ls") {
    ls.lsFunc(done);
  } else if (cmd.slice(0, 3) === "cat") {
    const fileName = cmd.slice(4);
    cat.catFunc(fileName, done);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
