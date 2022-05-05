solution = (a, b) => {
    return (a.length > b.length ? 
        b + a + b : a + b + a)
}
console.log(solution('45', '1'))
console.log(solution('1', '45'))