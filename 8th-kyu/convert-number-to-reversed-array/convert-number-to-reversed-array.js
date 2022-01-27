digitize = (n) => {
    return [...`${n}`].map(i => Number(i)).reverse();
}

console.log(digitize(35231));
console.log(digitize(0));
console.log(digitize(23582357));