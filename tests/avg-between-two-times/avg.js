const avgTime = (time1, time2) => {
  let [hours1, mins1, sec1] = time1.split(":");
  let [hours2, mins2, sec2] = time2.split(":");
  let hoursAvg = String((+hours1 + +hours2) / 2).padStart(2, "0");
//   let minsAvg = String((+mins1 + +mins2) / 2).padStart(2, "0");
  let minsAvg = String(Math.floor((+mins1 + +mins2) / 2)).padStart(2, "0");
  let secondsAvg = String((+sec1 + +sec2) / 2).padStart(2, "0");
  return `${hoursAvg}:${minsAvg}:${secondsAvg}`;
};

console.log(avgTime("02:32:45", "02:34:25"));
console.log(avgTime("03:33:10", "09:44:30"));
