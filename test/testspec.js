var calc = require('../lib/calc');

var assert = require('assert');

assert.equal(calc.add(1,1),2);
assert.equal(calc.add("notnumber",1),"invalid arguments");
assert.equal(calc.add(1,"sss"),"invalid arguments");
assert.equal(calc.add("sss","ssss"),"invalid arguments");
