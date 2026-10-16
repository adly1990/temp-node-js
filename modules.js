// CommonJS, every file is a module (by default)
//MOdules -Encapsulation (only share minimum)

const names = require("./names");
const sayHallo = require("./utilis");

console.log(names);

sayHallo("susan");
sayHallo(names.john);
