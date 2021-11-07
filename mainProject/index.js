const { printMessage } = require("testpackage");
const { subMessage, text } = require("testpackage/subfolder/subfile");

console.log("Starting main project...");
console.log("---");

const message = "Testing123...";
console.log("Trying to use test package...");
printMessage(message);
console.log("Trying to use test package sub file...");
subMessage(message);
console.log(text);
console.log("---");

const { typeMessage } = require("typescriptpackage");
const { typeText } = require("typescriptpackage/subfolder/subfile");
console.log("Trying to use typescript test package...");
typeMessage(message);
console.log(typeText);
console.log("---");