vaporcode = (string) => {
    return string.replace(/ +/g, "").split('').join('  ').toUpperCase()
}

console.log(vaporcode("Lets go to the movies"));
console.log(vaporcode("Why isnt my code working"));