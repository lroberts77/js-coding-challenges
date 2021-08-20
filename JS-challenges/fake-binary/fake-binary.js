fakeBin = (x) => {
    return x.split('').map((a) => a<5 ? 0 : 1).join('');
  }
console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));
