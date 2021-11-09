splitInParts = (s, partLength) => {
    return s.match(new RegExp(".{1," + partLength + "}", "g")).join(' ')
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("HelloKata", 1));
console.log(splitInParts("HelloKata", 9));