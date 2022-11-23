function palindrome(str){
  const regex = /[^a-zA-Z]/g
  const withoutSpecial = str.replaceAll(regex,'').toLowerCase();
  const split = withoutSpecial.split('');
  const reverted = [];
  for (let i = split.length - 1; i >= 0; i--) {
    reverted.push(split[i]);
  }
const joined = reverted.join('').toLowerCase()
return joined === withoutSpecial
}

module.exports = palindrome;