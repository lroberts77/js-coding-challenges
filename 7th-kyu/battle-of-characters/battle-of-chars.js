const battle = (x, y) => {
    let first = x.split('').map(a => a.charCodeAt(0)-64).reduce((a,b) => a+b)
    let second = y.split('').map(a => a.charCodeAt(0)-64).reduce((a,b) => a+b)
    return first == second ? 'Tie!' :
    first > second ? x : y
}

console.log(battle("AAA", "Z"));
console.log(battle("ONE", "TWO"));
console.log(battle("ONE", "NEO"));
console.log(battle("FOUR", "FIVE"));