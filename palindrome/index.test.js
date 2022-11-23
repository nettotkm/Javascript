const palindrome = require('./index')

test('basic test', () =>{
  expect(palindrome('Noel - sees Leon!')).toBe(true)
});

