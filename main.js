var PEG = require("./pegs4.js");
var r = PEG.parse("(+ (*  9) 2)");
console.log(r);
