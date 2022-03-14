const timeConvert = (num) => {

    let hours = `${Math.floor(num/60)}`.padStart(2,'0')
    let mins = `${Math.floor(num%60)}`.padStart(2,'0')

    return num <= 0 ? '00:00' : 
    `${hours}:${mins}`
};

console.log(timeConvert(0));
console.log(timeConvert(-6));
console.log(timeConvert(8));
console.log(timeConvert(970));