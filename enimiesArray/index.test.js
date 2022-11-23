const Enemy = require('./index')

test('basic test', () =>{
 
  expect(Enemy([1, 0, 0, 0, 2, 2, 2])).toBe(4)
  
});