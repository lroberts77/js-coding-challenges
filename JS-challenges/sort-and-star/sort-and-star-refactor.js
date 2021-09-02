twoSort = (s) => {
    return s.sort()[0].split('').join('***')
} 

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]));