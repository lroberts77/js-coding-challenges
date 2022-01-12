// pattern = (n) => {
//     var output="";
//     for(var i=1; i<n; i++) {
//         output += (i==1 ? '1\n' : '\n') + `${1}${('*'.repeat(i))}${i+1}`
//     }
//     return output;
// }

pattern = (n) => {
    var output="1";
    for(var i=1; i<n; i++) {
        output += `${'\n1'}${('*'.repeat(i))}${i+1}`
    }
    return output;
}

console.log(pattern(3));
console.log(pattern(7));
console.log(pattern(20));
