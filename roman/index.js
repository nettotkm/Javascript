const ROMANS = {
'I': 1,
'V': 5,
'X': 10,
'L': 50,
'C': 100,
'D': 500,
'M': 1000
}
function romanToNumber(roman) {
  if (ROMANS[roman]) {
    return ROMANS[roman];
  }

  let chars = roman.split('');
  let sum = 0;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if( (char === 'I' || char  === 'X' || char === 'C') && chars[ i+1 ]) {
      if (ROMANS[chars[i + 1]] > ROMANS[char]){
        sum = sum + (ROMANS[chars[i + 1]] - ROMANS[char]);
        i = i + 1;
      } else {
        sum = sum + ROMANS[chars[i]]
      }
    }else{
      sum = sum + ROMANS[chars[i]];
    }

  }
return sum;
}


module.exports = romanToNumber;
