stray = (numbers) => {
    return numbers.find((item, i, arr) => {
        return item !== arr[i+1] && item !== arr[i-1]
    })
}

console.log(stray([2, 1, 1]));
console.log(stray([0, 0, 0, 7, 0, 0, 0]));
console.log(stray([1,1,2,2,3,4,4,5,5])); 