subMessage = function(message) {
  console.log("Printing test sub message from test package...");
  console.log(message);
  console.log("😉 SUB WORKS 😉")
};

text = "TEXT";

module.exports = {
  subMessage,
  text,
};