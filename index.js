const assert = require('assert').strict;
const sort = require('./sort');

var tests = require('./test-cases');

for (let { input, output } of tests) {
    assert.deepStrictEqual(sort(input), output);
}