function Enemy(array) {
  let pos = 0;
  let left= 0;
  let right= 0;

  for (let i = 0; i < array.length; i++) {
    if(array[i] === 1) {
      pos = i;
      console.log('um',pos)
      break;
      
    }
  }
  for (let j = pos; j >= 0; j--) {
    if(array[j] === 2) {
      console.log('@@@',j)
      left = pos - j;
      console.log('left',left)
      break;
    }
  }

  for (let k = pos; k < array.length; k++) {
   if (array[k] === 2) {
    console.log('$$',k)
    right = k - pos;
    console.log('right',right)
    break;
   }
    
  }
  if( left === 0){
    return right === 0 ? 0 : right;
  }
  if ( right === 0) {
    return left === 0 ? 0 : left
  }





  if (left <= right) {
    return left;
  } else {
    return right;
  }
  
  
}
module.exports = Enemy;