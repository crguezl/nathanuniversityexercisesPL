var assert = require('assert');
var PEG = require("./pegs4.js");
var r = PEG.parse("(*  9)");
assert.deepEqual(r, [ '*', '9' ]);
console.log(r);
