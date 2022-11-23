function filter(arr, num){
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i] !== num){
      newArray.push(arr[i])
    }
  }
  return newArray;
}
module.exports = filter;