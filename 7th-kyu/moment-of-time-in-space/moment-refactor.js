const momentOfTimeInSpace = (moment) => {
  let time = moment.split('').filter((el) => parseInt(el)).reduce((a,b) => (+a) + (+b))
  let space = moment.split('')
   return [time<space,time==space,time>space]
}

console.log(momentOfTimeInSpace("12:30 am"),[false, false, true]);
console.log(momentOfTimeInSpace("12:02 pm"),[false, true, false]);
console.log(momentOfTimeInSpace("01:00 pm"),[true, false, false]);
console.log(momentOfTimeInSpace("11:12 am"),[false, false, true]);
console.log(momentOfTimeInSpace("05:20 pm"),[false, false, true]);