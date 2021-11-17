persistence = (num, counter = 0) => {
    return [...`${num}`].length === 1 ? 
    counter :
    persistence([...`${num}`].reduce((x, y) => x * y), ++counter);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));