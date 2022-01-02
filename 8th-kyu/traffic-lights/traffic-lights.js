updateLight = (current) => {
    return current == 'green' ? 'yellow' :
    current == 'yellow' ? 'red' : 'green'
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));