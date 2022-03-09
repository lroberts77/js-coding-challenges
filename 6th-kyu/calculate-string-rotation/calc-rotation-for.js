const shiftedDiff = (first,second) => {
    for (let i = 0; i < first.length; i++)
      if (second.substr(i) + second.substr(0,i) === first) return i;
    return -1;
}

console.log(shiftedDiff("fatigue","tiguefa"));
console.log(shiftedDiff("hoop","pooh"));
console.log(shiftedDiff("eecoff","coffee"));
console.log(shiftedDiff("Esham","Esham"));