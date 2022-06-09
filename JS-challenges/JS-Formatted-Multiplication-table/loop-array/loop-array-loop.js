loopArr = (arr, direction, steps) => {
    for(let i=0;i<steps;i++) {
      if(direction == "right") {
        arr.unshift(arr.pop());
      } else {
        arr.push(arr.shift())
      }
    }
    return arr;
}
console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2));
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2));
    