const minMax = (arr) => {
    let sort = arr.sort((a,b) => a-b);
    return [sort[0], sort[(sort.length)-1]]
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5]));