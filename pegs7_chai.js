var assert = require('chai').assert
/*
[~/srcPLgrado/nathansuniversity/exercises(master)]$ export  NODE_PATH=/usr/local/lib/node_modules/
[~/srcPLgrado/nathansuniversity/exercises(master)]$ node pegs7_chai.js 
[ '*', '9' ]

*/
var PEG = require("./pegs4.js");
var r = PEG.parse("(*  9)");
assert.deepEqual(r, [ '*', '9' ]);
console.log(r);
