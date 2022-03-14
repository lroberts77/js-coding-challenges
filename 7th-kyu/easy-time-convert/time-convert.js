const timeConvert = (num) => {
  return num <= 0
    ? "00:00"
    : num / 60 < 10
    ? "0" +
      Math.floor(num / 60) +
      ":" +
      `${num % 60 < 10 ? "0" + (num % 60) : num % 60}`
    : `${Math.floor(num / 60)}:${num % 60 < 10 ? "0" + (num % 60) : num % 60}`;
};

console.log(timeConvert(0));
console.log(timeConvert(-6));
console.log(timeConvert(8));
console.log(timeConvert(970));
