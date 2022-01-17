const test = require('ava');
const fs = require('fs');
const path = require('path');

test('basic-test', t => {
  const pass = fs.existsSync(path.resolve(__dirname, './../dist/basic.html'));  

  if (pass) {
    t.pass();
  } else {
    t.fail();
  }
});
