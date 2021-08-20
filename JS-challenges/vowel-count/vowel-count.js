getCount = (str) => {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
      if (vowels.includes(char)){
          vowelsCount++
      }
    }
    return vowelsCount;
  }
console.log(getCount("abracadabra"));
