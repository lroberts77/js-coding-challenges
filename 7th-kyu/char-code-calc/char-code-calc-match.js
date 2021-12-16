calc = (x) => {
    return (x.replace(/./g, x => x.charCodeAt()).match(/7/g) || []).length * 6
}

console.log(calc('cdef'));
console.log(calc('abcdef'));
console.log(calc('aaaaaddddr'));
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));