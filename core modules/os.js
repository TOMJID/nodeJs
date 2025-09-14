const os = require("os");

console.log(os.arch()); // x64 || architecture of cpu
console.log(os.platform()); // linux || operating system platform
console.log(os.type()); // linux || operating system name
console.log(os.uptime()); // 8332.71 || system uptime in seconds
console.log(os.cpus()); // AMD || cpu information
console.log(os.homedir()); // /home/tomjid || home directory of current user
