reverseWords = (str) => {
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this" ));