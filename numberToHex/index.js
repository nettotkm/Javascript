const HEX = {
  10:'A',
  11:'B',
  12:'C',
  13:'D',
  14:'E',
  15:'F'
}

function numberToHex(number) {
  let result= [];
  let rest = number % 16;
  let value = number - rest;
  result.push(rest)

while (value >= 16) {
    value = value / 16;
    rest = value % 16;
    result.push(rest);
    value = value - rest;
   
}
return result.reverse().map( (item) =>{ 
  if( item >= 10){
    return HEX[item.toString()];
  }
 return item
}).join('')
}

module.exports = numberToHex;