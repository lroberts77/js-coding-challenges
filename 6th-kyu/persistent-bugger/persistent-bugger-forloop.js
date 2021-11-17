persistence = (num) => {
    for (i=0; num>9; i++) {
        num = [...`${num}`].reduce((x, y) => x * y);
    }
    return i
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));