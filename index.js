const assert = require('assert').strict;
const sort = require('./sort');

var tests = require('./test-cases');

for (let { input, output } of tests) {
    let actual = sort(input);
    console.log('-'.repeat(22)); // separation between test cases
    console.log(`testing with input: ${JSON.stringify(input)}`);
    console.log(`expected output: ${JSON.stringify(output)}`);
    console.log(`actual result: ${JSON.stringify(actual)}`);
    assert.deepStrictEqual(actual, output);
}