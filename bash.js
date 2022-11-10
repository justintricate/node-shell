// const { cwd } = require("node:process");
const pwd = require("./pwd");
const ls = require("./ls");
process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  console.log(data);
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd.pwdFunc();
  } else if (cmd === "ls") {
    ls.lsFunc();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
