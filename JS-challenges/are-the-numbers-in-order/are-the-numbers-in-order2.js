inAscOrder = (arr) => {
    for (let i=1; i<arr.length; i++)
      if (arr[i] < arr[i-1]) return false;
    return true;
  }
console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));