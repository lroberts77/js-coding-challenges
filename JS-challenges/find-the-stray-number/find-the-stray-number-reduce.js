stray = (nums) => { 
    return nums.reduce((a, b) => a ^ b)
}

console.log(stray([1, 1, 2]));
console.log(stray([0, 0, 0, 7, 0, 0, 0]));
