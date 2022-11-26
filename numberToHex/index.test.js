const numberToHex = require('./index')

test('basic test', () => {
  expect(numberToHex(28)).toBe('1C')
})