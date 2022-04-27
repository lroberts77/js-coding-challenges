const momentOfTimeInSpace = (moment) => {
  let arr1 = moment.slice(0,5).replace(/[^\d]/g,'')
  let arr = arr1.split('')
  let time = 0
  let space = 4
  for(let i=0;i<arr.length;i++) {
    if (arr[i] === '0') {
      space++
    } else {
      time += Number(arr[i])
    }    
  }
   return [time<space,time==space,time>space]
}

console.log(momentOfTimeInSpace("12:30 am"),[false, false, true]);
console.log(momentOfTimeInSpace("12:02 pm"),[false, true, false]);
console.log(momentOfTimeInSpace("01:00 pm"),[true, false, false]);
console.log(momentOfTimeInSpace("11:12 am"),[false, false, true]);
console.log(momentOfTimeInSpace("05:20 pm"),[false, false, true]);