const filter = require('./index');

test('basic test', () =>{
  expect(filter([1,4,6,7,8,0], 5)).toEqual([1,4,6,7,8,0])
  expect(filter([1,4,6,7,8,0], 8)).toEqual([1,4,6,7,0])
  expect(filter([1,4,6,7,8,0], 0)).toEqual([1,4,6,7,8])
})