const min = (arr, toReturn) => {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

console.log(min([1,2,3,4,5], 'value'), 1);
console.log(min([1,2,3,4,5], 'index'), 0);
console.log(min([5,2,3,4,1], 'index'), 4);
console.log(min([5,2,1,4,6], 'index'), 2);