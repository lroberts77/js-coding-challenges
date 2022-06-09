loopArr = (arr, direction, steps) => {
    direction == 'left' ? arr.push.apply(arr, arr.splice(0, steps)) :
    arr.push.apply(arr, arr.splice(0, arr.length - steps))
    return arr
  }
console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2));
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2));
