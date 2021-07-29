var a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

mxdiflg = (a1, a2) => {
    return (!a1.length || !a2.length) ? -1 :  
     Math.max(Math.max(...(a1.map(el => el.length))) - Math.min(...(a2.map(el => el.length))),
              Math.max(...(a2.map(el => el.length))) - Math.min(...(a1.map(el => el.length))))
 }
console.log(mxdiflg(a1, a2));