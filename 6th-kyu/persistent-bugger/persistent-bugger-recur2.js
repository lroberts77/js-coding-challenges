persistence = (num) => {
    return `${num}`.length > 1 ?
    1 + persistence([...`${num}`].reduce((a,b) => a*b)) :
    0;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));