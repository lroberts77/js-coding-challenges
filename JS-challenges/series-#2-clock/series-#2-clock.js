past = (h, m, s) => {
    return (h*3600000) + (m*60000) + (s*1000)
}
console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(1,0,1));
console.log(past(0,0,0));