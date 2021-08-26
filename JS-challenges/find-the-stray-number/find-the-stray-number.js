stray = (numbers) => {
    return numbers.filter((value) => {
      return numbers.indexOf(value) === numbers.lastIndexOf(value);
    })[0];
  }
console.log(stray([1, 1, 2]));
console.log(stray([0, 0, 0, 7, 0, 0, 0]));