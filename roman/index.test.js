const romanToNumber = require('./index')

test('basic case', () => {
  expect(romanToNumber('C')).toBe(100);
});

test('non-trivial case', () =>{
expect(romanToNumber('XL')).toBe(40)
expect(romanToNumber('CMXL')).toBe(940)
expect(romanToNumber('MCMLXXXIII')).toBe(1983)
})
