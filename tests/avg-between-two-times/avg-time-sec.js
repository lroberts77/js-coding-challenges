const avgTime = (time1, time2) => {
  let [hours1, mins1, sec1] = time1.split(":");
  let [hours2, mins2, sec2] = time2.split(":");
  let timeInSeconds = 0;

  const convertHours = (hours) => {
    return hours * 60 * 60;
  };

  const convertMins = (mins) => {
    return mins * 60;
  };

  timeInSeconds += convertHours(hours1) + convertHours(hours2);
  timeInSeconds += convertMins(mins1) + convertMins(mins2);
  timeInSeconds += (+sec1) + (+sec2);
  timeInSeconds = timeInSeconds / 2;
  console.log(timeInSeconds);

  let hoursAvg = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
  let minsAvg = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
  let secondsAvg = String((timeInSeconds % 3600) % 60).padStart(2, "0");

  return `${hoursAvg}:${minsAvg}:${secondsAvg}`;
};

console.log(avgTime("02:32:45", "02:33:25"));
console.log(avgTime("03:33:10", "09:44:30"));
