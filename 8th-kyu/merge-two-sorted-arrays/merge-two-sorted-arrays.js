mergeArrays = (arr1, arr2) => {
    return [...new Set([...arr1,...arr2])].sort((a,b) => a-b)
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
console.log(mergeArrays([10,8,6,4,2], [9,7,5,3,1]));
console.log(mergeArrays([-3,-2,-1,0], [1,2,3,4]));