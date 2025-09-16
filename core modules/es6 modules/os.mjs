import os from "node:os";

console.log("cpu details || os.cpus  =>",os.cpus());
console.log("free memory || os.freemem  =>", (os.freemem()/(1024*1024*1024)).toFixed(2), "GB");
console.log("total memory || os.totalmem  =>", (os.totalmem()/(1024*1024*1024)).toFixed(2), "GB");
console.log("home directory || os.homedir  =>",os.homedir());
console.log("uptime || os.uptime  =>",os.uptime());
console.log("platform || os.platform  =>",os.platform());
console.log("architecture || os.arch  =>",os.arch());
console.log("temporary directory || os.tmpdir  =>",os.tmpdir());
console.log("network interfaces || os.networkInterfaces  =>",os.networkInterfaces());
console.log("user information || os.userInfo  =>",os.userInfo());