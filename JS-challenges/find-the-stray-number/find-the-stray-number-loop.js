stray = (numbers) => {
    let sorted = numbers.sort();
    for (let i=1;i<sorted.length;i++) {
        if (sorted[i] != sorted[i-1] && sorted[i] != sorted[i+1]) {
            return sorted[i]
        }
    }
}


console.log(stray([2, 1, 1]));
console.log(stray([0, 0, 0, 7, 0, 0, 0]));
console.log(stray([ 3, 10, 3, 3, 3 ]));
  