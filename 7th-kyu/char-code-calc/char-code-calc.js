calc = (x) => {
    return [...`${x}`].map(el => el.charCodeAt()).join('').split('').filter(x => x == 7).length * 6
}

console.log(calc('abcdef'));
console.log(calc('aaaaaddddr'));
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
