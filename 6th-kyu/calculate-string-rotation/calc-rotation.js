// const shiftedDiff = (first,second) => {
//     let rotations = 0
//     while(rotations <= second.length && second != first) {
//       rotations++
//       second = second.substr(1) + second.substr(0,1)
//     }
//     return rotations < second.length ? rotations : -1
// }

const shiftedDiff = (first,second) => {
    let rotations = 0
    while(rotations < second.length) {
        if(first === second) return rotations;
      rotations++
      second = second.substr(1) + second.substr(0,1)
    }
    return -1
}

console.log(shiftedDiff("fatigue","tiguefa"));
console.log(shiftedDiff("hoop","pooh"));
console.log(shiftedDiff("eecoff","coffee"));
console.log(shiftedDiff("Esham","Esham"));