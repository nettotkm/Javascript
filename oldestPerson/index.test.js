const oldestPerson = require('./index')

test('basic test', () => {
  expect( oldestPerson([{ name: 'Jhon', birth:1920, death:1947},{ name: 'Mary', birth:1975, death:2015},{ name: 'Joseph', birth:1998 }])).toBe('Mary')
})