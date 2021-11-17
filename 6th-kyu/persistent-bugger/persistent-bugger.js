persistence = (num, counter = 0) => {
    if ([...`${num}`].length === 1)
        return counter;
    num = [...`${num}`].reduce((x, y) => x * y);
    counter++;
    return persistence(num, counter);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));