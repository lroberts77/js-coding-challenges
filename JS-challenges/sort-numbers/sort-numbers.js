solution = (nums) => {
    return !nums || !nums.length ? [] : nums.sort((a,b) => a-b)
  }
console.log(solution([1,2,3,10,5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));