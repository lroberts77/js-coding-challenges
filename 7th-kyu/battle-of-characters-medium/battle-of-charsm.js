const battle = (x, y) => {
    let first = x.split('').map(a => /^[A-Z]*$/.test(a) ? a.charCodeAt(0)-64 : (a.charCodeAt(0)-96)/2).reduce((a,b) => a+b)
    let second = y.split('').map(a => /^[A-Z]*$/.test(a) ? a.charCodeAt(0)-64 : (a.charCodeAt(0)-96)/2).reduce((a,b) => a+b)
    return first == second ? 'Tie!' :
    first > second ? x :
    y
}

console.log(battle("One", "Two"));
console.log(battle("One", "Neo"));
console.log(battle("One", "neO"));
console.log(battle("Foo", "BAR"));