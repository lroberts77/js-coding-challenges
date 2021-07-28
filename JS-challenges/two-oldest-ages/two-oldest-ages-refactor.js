twoOldestAges = (ages) => {
    return ages.sort((a,b) => a-b).slice(-2)
}
console.log(twoOldestAges([11,15,25,36,57,12]))